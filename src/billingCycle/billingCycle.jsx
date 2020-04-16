import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

export default class BillingCycle extends Component {
  render() {
    return (
      <div>
        <ContentHeader title='Billing Cycles' small='Register' />
        <Content>
          Billing Cycles
        </Content>
      </div>
    )
  }
}