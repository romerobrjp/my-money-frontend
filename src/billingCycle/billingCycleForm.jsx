import React from 'react'
import { reduxForm, Field } from 'redux-form'
import LabelAndInput from '../common/form/labelAndInput'

class BillingCycleForm extends React.Component {
  render() {
    const { handleSubmit } = this.props

    return (
      <form role='form' onSubmit={handleSubmit}>
        <div className='box-body'>
          <Field name='name' label='Name' component={LabelAndInput} cols='12 4' placeholder='Insert the name here' />
          <Field name='month' label='Month' component={LabelAndInput} cols='12 4' placeholder='Which month?' />
          <Field name='year' label='Year' component={LabelAndInput} cols='12 4' placeholder='Which year?' />
        </div>

        <div className='box-footer'>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </div>
      </form>
    )
  }
}

export default reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)