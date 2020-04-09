import React from 'react'
import MenuTree from './menuTree'
import MenuItem from './menuItem'

export default props => (
  <ul className='sidebar-menu'>
    <MenuItem path='/' label='Dashboard' icon='dashboard' />

    <MenuTree label='Register' icon='edit'>
      <MenuItem path='billingCycles' label='Billing Cycle' icon='usd' />
    </MenuTree>
  </ul>
)
