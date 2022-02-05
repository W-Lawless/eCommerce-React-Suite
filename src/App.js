import React from 'react';
import './App.css';
import { Home } from './pages/home/home.component';
import { Switch, Route, Redirect } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.util'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import Header from './components/header/header.component'

import ShopPage from './pages/shop/shop.component';
import AuthPage from './pages/auth/auth.component';
import CheckoutPage from './pages/checkout/checkout.component';

import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selectors'

class  App extends React.Component {

  unsubscribeFromAuth = null 
  
  componentDidMount() {
    const { setCurrentUser } = this.props  
    
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      
      if(user) {
        const userDocument = await createUserProfileDocument(user);

        userDocument.onSnapshot(snapshot =>{
          setCurrentUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })
      }
      
      setCurrentUser(user)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() { return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path='/auth' render={() =>  
          this.props.currentUser ? ( <Redirect to='/' />) : (<AuthPage />) 
        } />
      </Switch>
    </div>
  ); }
}

const mapStateToProps =  createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default  connect(mapStateToProps, mapDispatchToProps)(App)

//pk_test_h4XTe3KB0gdP9FxMsKmMRYXe00WcZfaMj0
//sk_test_LRwc1IHuDlGNFfrUcvjFdY8c00c75yrFKY


//pk_live_EkySwRMDJb5kOfxxT6hjFIxZ00y0VxE7Ri
//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