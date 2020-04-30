import axios from 'axios'
import { toastr } from 'react-redux-toastr'

const BASE_URL = 'http://localhost:3003/api'

export function getList() {
  const request = axios.get(`${BASE_URL}/billingCycles`)

  return {
    type: 'BILLING_CYCLES_FETCHED',
    payload: request
  }
}

export function create(values) {
  console.log(values);
  
  axios.get(`${BASE_URL}/billingCycles`, values)
    .then(success => {
      toastr.success('Success', 'Register created')
    })
    .catch(e => {
      e.response.data.errors.forEach(error => {
        toastr.error('Fail', error)
      })
    })
    return {
      type: 'CREATED'
    }  
}