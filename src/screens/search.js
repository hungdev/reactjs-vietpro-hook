import React, { useState, useEffect } from "react";
import { getImageUrl } from './utils'
import * as API from './services/Api'
import { Link, useHistory, useLocation } from 'react-router-dom'
import Item from './components/item'

export default function Search() {
  let location = useLocation()
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      const query = new URLSearchParams(location.search);
      const queryString = query.get('query')
      try {
        const result = await API.getProductByName({ name: queryString })
        setProducts(result.data.data)
      } catch (error) {

      }
    }

    getData();
  }, [location.search]);

  return (
    <div class="products">
      <div id="search-result">Kết quả tìm kiếm với sản phẩm <span>iPhone Xs Max 2 Sim - 256GB</span></div>
      <div class="product-list card-deck">
        {products && products.map(e => <Item key={e._id} detail={e} />)}
      </div>
    </div>
  )
}
