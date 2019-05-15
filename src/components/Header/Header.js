import React from 'react'
import T from 'prop-types'
import s from './Header.module.scss'
import { routes } from '../../scenes/Router'
import { Link, withRouter } from 'react-router-dom'
import { compose, withHandlers } from 'recompose'
import Api from '../../api/Index'

function Header({ HandleLogout }) {
  return (
    <div className={s.header}>
      <div className={s.left}>
        <Link to={routes.home}>Marketplace</Link>
      </div>
      <div className={s.right}>
        {Api.Auth.isLoggetIn ? (
          <button type="button" onClick={HandleLogout}>
            Logout
          </button>
        ) : (
          <Link to={routes.login}>Login</Link>
        )}
      </div>
    </div>
  )
}

Header.propType = []

const enhancer = compose(
  withRouter,
  withHandlers({
    HandleLogout: props => () => {
      Api.Auth.logout()
      props.history.push(routes.home)
    },
  })
)

export default enhancer(Header)
