import React from 'react'
import T from 'prop-types'
import s from './Login.module.scss'
import { routes } from '../Router'
import { Link, withRouter } from 'react-router-dom'
import { compose, withHandlers } from 'recompose'
import {
  Card,
  Button,
  Badge,
  CardImg,
  CardTitle,
  CardText,
  CardFooter,
  Row,
  Col,
} from 'reactstrap'

// import { Header } from '../../components/';
import Api from '../../api/Index'
function Login({ HandleLogin }) {
  return (
    <div className={s.container}>
      <Row>
        <Col>
          {/* <Header /> */}
          <button type="button" onClick={HandleLogin}>
            Login
          </button>
          <Link to={routes.register}>register</Link>
        </Col>
        <Button>Test</Button>
      </Row>
    </div>
  )
}

Login.propType = []

const enhancer = compose(
  withRouter,
  withHandlers({
    HandleLogin: props => () => {
      Api.Auth.login()
      props.history.push(routes.home)
    },
  })
)

export default enhancer(Login)
