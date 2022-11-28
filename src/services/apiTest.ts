import axios from "axios";
import { parseCookies } from "nookies";

let cookies = parseCookies()

export const apiTest = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    Authorization: `Bearer ${cookies['nextauth.token']}`
  }
})