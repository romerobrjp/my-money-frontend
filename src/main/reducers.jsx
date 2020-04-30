import { combineReducers } from 'redux'

import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'
import BillingCycleReducer from '../billingCycle/billingCycleReducer'
import { reducer as FormReducer } from 'redux-form'
import { reducer as ToastrReducer } from 'react-redux-toastr'

const rootReducer = combineReducers(
  { 
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCycleReducer,
    form: FormReducer,
    toastr: ToastrReducer,
  }
)

export default rootReducer