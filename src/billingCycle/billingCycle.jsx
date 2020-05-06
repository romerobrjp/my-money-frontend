import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabHeader from '../common/tab/tabHeader'
import TabsContent from '../common/tab/tabsContent'
import TabContent from '../common/tab/tabContent'
import List from './billingCycleList'
import Form from './billingCycleForm'
import { init, create, update, delete_ } from './billingCycleActions'

class BillingCycle extends Component {
  componentWillMount() {
    this.props.init()
  }

  render() {
    return (
      <div>
        <ContentHeader title='Billing Cycles' small='Register' />

        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label='List' icon='bars' target='tabList' />
              <TabHeader label='Add' icon='plus' target='tabCreate' />
              <TabHeader label='Edit' icon='pencil' target='tabUpdate' />
              <TabHeader label='Delete' icon='trash-o' target='tabDelete' />
            </TabsHeader>

            <TabsContent>
              <TabContent id="tabList">
                <List />
              </TabContent>

              <TabContent id="tabCreate">
                <Form onSubmit={this.props.create} submitLabel='Create' submitClass='success' />
              </TabContent>
              
              <TabContent id="tabUpdate">
                <Form onSubmit={this.props.update} submitLabel='Update' submitClass='primary' />
              </TabContent>
              
              <TabContent id="tabDelete">
                <Form onSubmit={this.props.delete_} submitLabel='Delete' submitClass='danger' readOnly={true} />
              </TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({init, create, update, delete_}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycle)