import React from 'react'
import T from 'prop-types'
import s from './NotFound.module.scss'

function NotFound({ location }) {
  return (
    <div className={s.container}>
      <h1>404 Not Found</h1>
      <h2>
        <code>{location.pathname}</code>
      </h2>
    </div>
  )
}

NotFound.propType = []

export default NotFound
