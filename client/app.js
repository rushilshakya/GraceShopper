import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {Navbar, AllArt, SingleArtPage, Signup, Login} from './components'
import thankYou from './components/thankYou'
import Cart from './components/cart'

const App = () => {
  return (
    <div className="page">
      <Navbar />
      {/* <AllArt /> */}
      <div className="body">
        <Switch>
          <Route exact path="/" component={AllArt} />
          <Route exact path="/art/:id" component={SingleArtPage} />
          <Route exact path="/thankyou" component={thankYou} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </div>
    </div>
  )
}

export default App
