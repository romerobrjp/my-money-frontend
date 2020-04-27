import axios from 'axios'

export function list() {
  const request = axios.get(`${BASE_URL}/billingCycles`)

  return {
    type: 'BILLING_CYCLES_FETCHED',
    payload: request
  }
}