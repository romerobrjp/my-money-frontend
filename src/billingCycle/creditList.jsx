import React from 'react'

import { Field } from 'redux-form'
import Grid from '../common/layout/grid'
import Input from '../common/form/input'

class CreditList extends React.Component {

  renderRows() {
    const list = this.props.list || []

    return list.map((item, index) => (
      <tr key={index}>
        <td><Field name={`credits[${index}].name`} component={Input} placeholder='Enter the name here' readOnly={this.props.readOnly} /></td>
        <td><Field name={`credits[${index}].value`} component={Input} placeholder='Enter the value here' readOnly={this.props.readOnly} /></td>
        <td></td>
      </tr>
    ))
  }

  render() {
    return (
      <Grid cols={this.props.cols}>
        <fieldset>
          <legend>Credits</legend>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Value</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {this.renderRows()}
            </tbody>
          </table>
        </fieldset>
      </Grid>
    )
  }
}

export default CreditList