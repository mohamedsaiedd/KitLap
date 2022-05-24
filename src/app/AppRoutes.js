import React, { Component, Suspense, lazy } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Loader } from 'semantic-ui-react'
import { header } from './shared/Header'
import LoaderUi from './shared/Loader'

const Dashboard = lazy(() => import('./pages/Dashboard'))

const Signin = lazy(() => import('./general-pages/Signin'))
const Signup = lazy(() => import('./general-pages/Signup'))

const Buttons = lazy(() => import('./ui-elements/Buttons'))
const Dropdowns = lazy(() => import('./ui-elements/Dropdowns'))
const Icons = lazy(() => import('./ui-elements/Icons'))

const FormElements = lazy(() => import('./form/FormElements'))

const ChartJs = lazy(() => import('./charts/ChartJs'))

const BasicTable = lazy(() => import('./tables/BasicTable'))

const CheckOut = lazy(() => import('./checkout/CheckOut'))

const MenCategory = lazy(() => import('./pages/Men'))

const WomenCategory = lazy(() => import('./pages/Women'))

const ElectronicsCategory = lazy(() => import('./pages/Electronics'))

const Cart = lazy(() => import('./pages/Cart'))

const Detailes = lazy(() => import('./pages/Detailes'))
const AddProducts = lazy(() => import('./form/addProducts'))


export class AppRoutes extends Component {
  render() {
    return (
      <Suspense fallback={<LoaderUi/>}>
        <Switch>
          <Route exact path="/">
            <Redirect to="/dashboard"></Redirect>
          </Route>
          <Route exact path="/dashboard" component={ Dashboard } />

          <Route exact path="/general-pages/signin" component={ Signin } />
          <Route exact path="/general-pages/signup" component={ Signup } />

          <Route exact path="/ui-elements/buttons" component={ Buttons } />
          <Route exact path="/ui-elements/dropdowns" component={ Dropdowns } />
          <Route exact path="/ui-elements/icons" component={ Icons } />

          <Route exact path="/form/form-elements" component={ FormElements } />

          <Route exact path="/checkout/checkout" component={ CheckOut } />

          <Route exact path="/pages/men" component={ MenCategory } />

          <Route exact path="/pages/women" component={ WomenCategory } />

          <Route exact path="/pages/electronics" component={  ElectronicsCategory } />

          <Route exact path="/pages/cart" component={  Cart } />

          <Route exact path="/pages/detailes/:id" component={  Detailes } />
          <Route exact path="/form/addProducts" component={  AddProducts } />

          
          <Route exact path="/charts/chartjs" component={ ChartJs } />

          <Route exact path="/tables/basic-table" component={ BasicTable } />

        </Switch>
      </Suspense>
    )
  }
}

export default AppRoutes
