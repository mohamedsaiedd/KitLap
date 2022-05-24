import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './App.scss';
import AppRoutes from './AppRoutes';
import {Provider} from 'react-redux';

import Header from './shared/Header';
import Footer from './shared/Footer';
import store from '../app/redux/store'
// import authHeader from './Auth/auth.header';
class App extends Component {
  
  state = {}
  componentDidMount() {
    this.onRouteChanged();
    // authHeader();
  }
  render () {
    let headerComponent = !this.state.isFullPageLayout ? <Header /> : '';
    let footerComponent = !this.state.isFullPageLayout ? <Footer/> : '';
    return (
      
      <div><Provider store={store}>
        { headerComponent }
        <div className="az-content-wrapper">
        
          <AppRoutes/>
       
        </div>
        { footerComponent }
      
      </Provider>
      </div>
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    console.log("ROUTE CHANGED");
    window.scrollTo(0, 0);
    const fullPageLayoutRoutes = ['/general-pages/signin', '/general-pages/signup', '/general-pages/page-404'];
    for ( let i = 0; i < fullPageLayoutRoutes.length; i++ ) {
      if (this.props.location.pathname === fullPageLayoutRoutes[i]) {
        this.setState({
          isFullPageLayout: true
        })
        document.querySelector('.az-content-wrapper').classList.add('p-0');
        break;
      } else {
        this.setState({
          isFullPageLayout: false
        })
        document.querySelector('.az-content-wrapper').classList.remove('p-0');
      }
    }
  }

}

export default withRouter(App);
