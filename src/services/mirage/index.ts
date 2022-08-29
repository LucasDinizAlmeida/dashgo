import { createServer, Factory, Model } from 'miragejs'
import { faker } from '@faker-js/faker'

type User = {
  name: string,
  email: string,
  create_at: string
}

export function startMakeServer() {

  const server = createServer({

    models: {
      user: Model.extend<Partial<User>>({})
    },

    // factories: {
    //   user: Factory.extend({
    //     name(i: number) {
    //       return `User ${i + 1}`
    //     },
    //     email() {
    //       return faker.internet.email().toLocaleLowerCase()
    //     },
    //     createAt() {
    //       return faker.date.recent()
    //     },
    //   })
    // },

    // seeds(server) {
    //   server.createList('user', 200)
    // },

    factories: {
      user: Factory.extend({
        name(i: number) {
          return `User ${i + 1}`
        },
        email() {
          return faker.internet.email().toLocaleLowerCase()
        },
        createAt() {
          return faker.date.recent(10)
        },
      })
    },

    seeds(server) {
      server.createList('user', 10)
    },

    routes() {
      this.namespace = 'api'
      this.timing = 750

      this.get('/users')
      this.post('/users')

      this.namespace = ''

      this.passthrough()
    }
  })

  return server
}