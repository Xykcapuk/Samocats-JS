// Post api/login в теле содержит 2 параметра login, password
// Post api/edit-equip в теле параметры эквипмента
// Post api/add-equip в теле параметры эквипмента
// Post api/delete-equip в теле id
// Get api/catalog
// Get api/balance параметры уточним позже, пока без них
// Post api/top-up-balance пока только 1 параметр - amount
// Get api/catalog/product 1 параметр id
// Post api/catalog/product/set-busy 1 параметр - id
// Get api/catalog/product/get-start-time 1 параметр - id
// Post api/catalog/product/set-free 1 параметр - id
// Get api/catalog/product/get-current-price 1 параметр - id
// Get api/catalog/product/get-total-price 1 параметр - id
import axios from 'axios'

const config = {
  headers: { 'Access-Control-Allow-Origin': '*' }
}

const url = 'http://52.29.148.46:8080/api/'

async function getCatalog() {
  const response = await fetch(url + 'catalog', config)
  return await response.json()
}

async function getBalance() {
  const response = await fetch(url + 'balance', config)
  const res = await response.json()
  if (res.status !== 404) {
    return res
  } return '#'
}

async function getProduct(id) {
  const response = await axios.get(url + 'catalog/product?id=' + id)
  // const response = await axios(url + 'product?id=4')
  return response.data
}

export { getCatalog, getBalance, getProduct }