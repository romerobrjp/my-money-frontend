import React from 'react'

import { Field } from 'redux-form'
import Grid from '../common/layout/grid'
import Input from '../common/form/input'

class CreditList extends React.Component {

  renderRows() {
    return (
      <tr>
        <td><Field name='credits[0].name' component={Input} placeholder='Enter the name here' readOnly={this.props.readOnly} /></td>
        <td><Field name='credits[0].value' component={Input} placeholder='Enter the value here' readOnly={this.props.readOnly} /></td>
        <td></td>
      </tr>
    )
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