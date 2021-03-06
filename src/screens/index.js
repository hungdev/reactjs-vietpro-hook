import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './layout/header'
import Menu from './layout/menu'
import Slide from './layout/slide'
import Sidebar from './layout/sidebar'
import Footer from './layout/footer'

import Product from './product'
import Detail from './detail'
// import Category from './Category'
// import Cart from './Cart'
import Search from './search'
// import Success from './Success'
// import NoMatchPage from './Layout/PageNotFound'


export default function AppContainer() {
  return (
    <Router>
      <Header />
      <div id="body">
        <div class="container">
          <Menu />
          <div class="row">
            <div id="main" class="col-lg-8 col-md-12 col-sm-12">
              <Slide />
              <Switch>
                <Route exact path="/" component={Product} />
                <Route path="/product/:productId" component={Detail} />
                <Route path="/search" component={Search} />
                {/* <Route path="/category/:categoryId" component={Category} />
                  <Route exact path="/cart" component={Cart} />
                  <Route path="/cart/success" component={Success} />
                  <Route component={NoMatchPage} /> */}
              </Switch>
            </div>
            <Sidebar />
          </div>
        </div>
      </div>
      <Footer />
    </Router>
  )
}
