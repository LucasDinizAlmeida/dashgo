<h1> Dashgo 📈</h1>

<p align="center"  > 
  <img align='right' width='18%' src="https://user-images.githubusercontent.com/48728541/113488473-c7050e00-9494-11eb-8cc8-0e5ccba76aa0.png" /> 
  <img width='77%' src="https://user-images.githubusercontent.com/48728541/113488471-c5d3e100-9494-11eb-8d56-5293ec3b33e3.png" />
</p>

<p align="center">
   O DashGo é uma aplicação de acesso restrito onde só usuários autorizados tem acesso. Pode ser usado como painel de administrador de uma aplicação entre outros casos de uso. Principais tecnologias utilizadas: nextJS, chakra-ui, react-query, typescript, react-hookform;
</p>
<p align="center">
   implementei no projeto toda uma autenticação desenvolvida do zero no bootcamp onde o front-end consome os dados de uma API que gera os tokens JWT dos usuários já pré-cadastrados. Com isso usuários não logados só tem acesso a página de login, quando o usuário tem o token expirado é feito uma requisição refresh-token, quando o token é inválido é feito o signOut automaticamente, certos componentes só são exibidos se o usuário for administrador ou tiver a permissão e para certas páginas essa verificação é feita também.
</p>

<h2> Tecnologias utilizadas: </h2> 

- <a href="https://nextjs.org" > Next.js </a>
- <a href="https://www.typescriptlang.org/"> TypeScript </a>
- <a href="https://chakra-ui.com"> Chakra UI </a>
- <a href="https://apexcharts.com"> Apexcharts.js </a>
- <a href="https://react-hook-form.com"> React Hook Form </a>
- <a href="https://github.com/jquense/yup"> Yup </a>
- <a href="https://react-query.tanstack.com"> React Query </a>
- <a href="https://miragejs.com"> Mirage JS </a>
- <a href="https://github.com/marak/Faker.js/"> Faker </a>

</br>
</br>

<h2>Rodando a aplicação:</h2>
<p> Para rodar o aplicativo na sua máquina, basta seguir os seguintes passos... </p>

   <ul> 
    <li><b>Clonar o repositório na pasta desejada:</li></b>
    <code> git@github.com:LucasDinizAlmeida/dashgo.git</code>
   </ul>
   <ul> 
    <li><b>Instalar bibliotecas do projeto utilizando o comando:</li></b>
    <code> yarn </code>
   </ul>
    <ul> 
    <li><b>Rodar o app:</li></b>
    <code> yarn dev </code>
   </ul>
