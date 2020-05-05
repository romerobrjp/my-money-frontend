import React from 'react'

export default props => (
  <footer className='main-footer'>
    <strong>
        Copyright &copy; {new Date().getFullYear()} - 
        <a href='http://github.com/rom5jp' target='_blank'> rom5jp Github</a>
        <span> | </span>
        <a href='http://gitlab.com/rom5jp' target='_blank'> rom5jp Gitlab</a>
    </strong>
  </footer>
)