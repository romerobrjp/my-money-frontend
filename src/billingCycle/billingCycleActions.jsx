import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'

export function getList() {
  const request = axios.get(`${BASE_URL}/billingCycles`)

  return {
    type: 'BILLING_CYCLES_FETCHED',
    payload: request
  }
}

export function create(values) {
  axios.post(`${BASE_URL}/billingCycles`, values)
    .then(success => {
      toastr.success('Success', 'Register created')
      dispatch([
        resetForm('billingCycleForm'),
        getList(),
        selectTab('tabList'),
        showTabs('tabList', 'tabCreate')
      ])
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

export function showUpdate(billingCycle) {
  return [showTabs('tabUpdate'), selectTab('tabUpdate')]
}