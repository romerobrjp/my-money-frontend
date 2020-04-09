import React from 'react'

export default props => (
  <footer className='main-footer'>
    <strong>
        Copyright &copy; {new Date().getFullYear()} - 
        <a href='http://github.com/rom5jp' target='_blank'> rom5jp Gihub</a>
        <span> | </span>
        <a href='http://gitlab.com/rom5jp' target='_blank'> rom5jp Gilab</a>
    </strong>
  </footer>
)