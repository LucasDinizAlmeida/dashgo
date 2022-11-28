import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { Can } from "../components/Can";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { UseAuth } from "../contexts/AuthContext";
import { getApi } from "../services/api";
import { api } from "../services/apiClient";
import { theme } from "../styles/theme";
import { withSSRAuth } from "../utils/withSSRAuth";

type dateType = 'datetime' | 'numeric' | 'category'

const options = {
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    },
    foreColor: theme.colors.gray[500]
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    type: "datetime" as dateType,
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2021-03-18T00:00:00.000Z',
      '2021-03-19T00:00:00.000Z',
      '2021-03-20T00:00:00.000Z',
      '2021-03-21T00:00:00.000Z',
      '2021-03-22T00:00:00.000Z',
    ]
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
  }
}

const series = [
  { name: 'series1', data: [10, 150, 206, 80, 56] }
]

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
})


export default function Dashboard() {

  const { user, sigOut } = UseAuth()

  useEffect(() => {
    api.get('me')
      .then(response => console.log(response))
  }, [])


  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" maxW={1480} mx="auto" my="6" px="6">
        <Sidebar />
        <Can
          permissions={['metrics.list']}
          roles={['administrator', 'editor']}
        >
          <SimpleGrid flex="1" gap="4" minChildWidth={320} alignItems="flex-start">
            <Box
              p={["6", "8"]}
              bg="gray.800"
              borderRadius={8}
              pb="4"
            >
              <Text fontSize="lg" mb="4">Inscritos da semana</Text>
              <Chart type="area" height={160} options={options} series={series} />
            </Box>

            <Box
              p={["6", "8"]}
              bg="gray.800"
              borderRadius={8}
              pb="4"
            >
              <Text fontSize="lg" mb="4">Taxa de abertura</Text>
              <Chart type="area" height={160} options={options} series={series} />
            </Box>
          </SimpleGrid>
        </Can>
      </Flex>
    </Flex>
  )
}


export const getServerSideProps = withSSRAuth(async (ctx) => {
  const api = getApi(ctx)

  const response = await api.get('/me')
  console.log(response.data)


  return {
    props: {}
  }
})