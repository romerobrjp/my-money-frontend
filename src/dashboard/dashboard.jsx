import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Row from '../common/layout/row'
import ValueBox from '../common/widget/valueBox'
import Axios from 'axios'

const BASE_URL = 'http://localhost:3003/api'

export default class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = { credit: 0, debt: 0 }
  }

  componentWillMount() {
    Axios.get(`${BASE_URL}/billingCycles/summary`)
         .then(resp => this.setState(resp.data))
  }

  render() {
    const { credit, debt } = this.state

    return (
      <div>
        <ContentHeader title='Dashboard' small='Without Redux' />

        <Content>
          <Row>
            <ValueBox cols='12 4' color='green' icon='bank' value={`R$ ${credit}`} text='Total Credits' />
            <ValueBox cols='12 4' color='red' icon='credit-card' value={`R$ ${debt}`} text='Total Debts' />
            <ValueBox cols='12 4' color='blue' icon='money' value={`R$ ${credit - debt}`} text='Balance' />
          </Row>
        </Content>
      </div>
    )
  }
}