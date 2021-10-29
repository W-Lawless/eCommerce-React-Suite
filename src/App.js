import React from 'react';
import './App.css';
import { Home } from './pages/home/home.component';
import { Switch, Route, Redirect } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.util'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import Header from './components/header/header.component'
// import { RippleAPI } from 'ripple-lib';
import ShopPage from './pages/shop/shop.component';
import AuthPage from './pages/auth/auth.component'

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
        <Route path='/auth' render={() =>  
          this.props.currentUser ? ( <Redirect to='/' />) : (<AuthPage />) 
        } />
      </Switch>
    </div>
  ); }
}





// const api = new RippleAPI({
//   server: 'wss://s.altnet.rippletest.net/' // Public rippled server
// });

// const my1Address = 'r3ctqxCvawEu8Ks15iKkfQjg5XMhm9TcRg';
// // const my1Secret = 'saU65uBuHKeGFHorgr8QeyAxwNDo3';
// const my2Address = 'rEoWVrrBVSUXAXLNxTYYh1XyzH7jDjH4ME';
// const my2Secret = 'snXUn5FeNycxBnXAi6CoTkgRtzLPM';



// api.connect()

// api.on('connected', async () => { 
  
//   console.log("INITIAITE HANDSHAKE")

//   let info = await api.getAccountInfo(my1Address);
//   let info2 = await api.getAccountInfo(my2Address);

//   console.log(info)
//   console.log(info2)

//   // Prepare transaction -------------------------------------------------------
//   const preparedTx = await api.prepareTransaction({
//     "TransactionType": "Payment",
//     "Account": my2Address,
//     "Amount": api.xrpToDrops("17"),
//     "Destination": my1Address
//   }, {
//     // Expire this transaction if it doesn't execute within ~5 minutes:
//     "maxLedgerVersionOffset": 75
//   })
//   const maxLedgerVersion = preparedTx.instructions.maxLedgerVersion
//   console.log("Prepared transaction instructions:", preparedTx.txJSON)
//   console.log("Transaction cost:", preparedTx.instructions.fee, "XRP")
//   console.log("Transaction expires after ledger:", maxLedgerVersion)


//   // Sign prepared instructions ------------------------------------------------
//   const signed = api.sign(preparedTx.txJSON, my2Secret)
//   const txID = signed.id
//   const tx_blob = signed.signedTransaction
//   console.log("Identifying hash:", txID)
//   console.log("Signed blob:", tx_blob)  


//   // Submit signed blob --------------------------------------------------------
//   // The earliest ledger a transaction could appear in is the first ledger
//   // after the one that's already validated at the time it's *first* submitted.
//   const earliestLedgerVersion = (await api.getLedgerVersion()) + 1
//   const result = await api.submit(tx_blob)
//   console.log("Tentative result code:", result.resultCode)
//   console.log("Tentative result message:", result.resultMessage)

//   // Wait for validation -------------------------------------------------------
//   let has_final_status = false
//   api.request("subscribe", {accounts: [my2Address]})
//   api.connection.on("transaction", async (event) => {
//     console.log("TX EVENT")
//     if (event.transaction.hash == txID) {
//       console.log("Transaction has executed!", event)
//       has_final_status = true


//       try {
//         let tx = await api.getTransaction(txID, {
//         minLedgerVersion: earliestLedgerVersion})
//         console.log("2222 / /  /Transaction result:", tx.outcome.result)
//         console.log("Balance changes:", JSON.stringify(tx.outcome.balanceChanges))
//       } catch(error) {
//         console.log("22 2 2 TRY CATCH / / / Couldn't get transaction outcome:", error)
//       }
//     }
//   })
//   // api.on('ledger', ledger => {
    
//   //   // console.log("Ledger event emmitted", ledger.ledgerVersion)

//   //   if (ledger.ledgerVersion > maxLedgerVersion && !has_final_status) {
//   //     console.log("Ledger version", ledger.ledgerVersion, "was validated.")
//   //     console.log("If the transaction hasn't succeeded by now, it's expired")
//   //     has_final_status = true
//   //   }
//   // })

//   // Check transaction results -------------------------------------------------
//   try {
//     let tx = await api.getTransaction(txID, {
//     minLedgerVersion: earliestLedgerVersion})
//     console.log("Transaction result:", tx.outcome.result)
//     console.log("Balance changes:", JSON.stringify(tx.outcome.balanceChanges))
//   } catch(error) {
//     console.log("TRY CATCH / / / Couldn't get transaction outcome:", error)
//   }

// });

const mapStateToProps =  createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default  connect(mapStateToProps, mapDispatchToProps)(App)
