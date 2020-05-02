import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'

import LabelAndInput from '../common/form/labelAndInput'
import { init } from '../billingCycle/billingCycleActions'

class BillingCycleForm extends React.Component {
  render() {
    const { handleSubmit, readOnly } = this.props

    return (
      <form role='form' onSubmit={handleSubmit}>
        <div className='box-body'>
          <Field name='name' label='Name' component={LabelAndInput} cols='12 4' placeholder='Insert the name here' readOnly={readOnly} />
          <Field name='month' label='Month' component={LabelAndInput} cols='12 4' placeholder='Which month?' readOnly={readOnly} />
          <Field name='year' label='Year' component={LabelAndInput} cols='12 4' placeholder='Which year?' readOnly={readOnly} />
        </div>

        <div className='box-footer'>
          <button type='submit' className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
          <button type='button' className='btn btn-default ml-10' onClick={this.props.init}>Cancel</button>
        </div>
      </form>
    )
  }
}

BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycleForm)