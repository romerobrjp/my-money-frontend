import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

import Tab from '../common/tab/tab'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'

export default class BillingCycle extends Component {
  render() {
    return (
      <div>
        <ContentHeader title='Billing Cycles' small='Register' />

        <Content>
          <Tab>
            <TabHeader>
              </TabHeader>
              <TabContent>
            </TabContent>
          </Tab>
        </Content>
      </div>
    )
  }
}