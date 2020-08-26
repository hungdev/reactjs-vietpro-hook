import React, { useState, useEffect } from "react";
import axios from 'axios';
import Item from './components/item'
import { getProducts } from './services/Api'
function Product() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // const result = await axios('http://mobileshop.hungvu.net/get-products');
      const result = await getProducts();
      setData(result.data.data);
      console.log('result', result)
    }

    fetchData();
  }, []);

  return (
    <>
      <div class="products">
        <h3>Sản phẩm nổi bật</h3>
        <div class="product-list card-deck">
          {data.map(e => <Item key={e._id} name={e.name} price={e.price} />)}
        </div>
      </div>

      {/* <div class="products">
        <h3>Sản phẩm mới</h3>
        <div class="product-list card-deck">
          {data1.map(el => <Item name={el.name} />)}
        </div>
      </div> */}
    </>
  );
}

export default Product