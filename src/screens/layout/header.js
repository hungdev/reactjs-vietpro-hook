import React, { useState, useEffect } from "react";
import { Link, useHistory } from 'react-router-dom'

export default function Header() {
  const history = useHistory()
  const [textSearch, setTextSearch] = useState([]);

  const onSubmit = () => {
    if (textSearch === '') {
      return
    }
    history.push(`/search?query=${textSearch}`)
  }

  const onChangeText = (value) => {
    setTextSearch(value)
  }

  return (
    <div id="header">
      <div class="container">
        <div class="row">
          <div id="logo" class="col-lg-3 col-md-3 col-sm-12">
            <h1>
              <Link to="/">
                <img className="img-fluid" src="/images/logo.png" />
              </Link>
            </h1>
          </div>
          <div id="search" class="col-lg-6 col-md-6 col-sm-12">
            <form class="form-inline" onSubmit={(e) => { e.preventDefault() }}>
              <input
                class="form-control mt-3"
                type="search"
                placeholder="Tìm kiếm"
                aria-label="Search"
                onChange={(e) => onChangeText(e.target.value)}
                value={textSearch}
              />
              <button class="btn btn-danger mt-3" onClick={onSubmit}>Tìm kiếm</button>
            </form>
          </div>
          <div id="cart" class="col-lg-3 col-md-3 col-sm-12">
            <Link class="mt-4 mr-2" to={'/cart'}>giỏ hàng</Link><span class="mt-3">
              {/* {cart && cart.length} */}
              2
            </span>
          </div>
        </div>
      </div>
      <button class="navbar-toggler navbar-light" type="button" data-toggle="collapse" data-target="#menu">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  )
}
