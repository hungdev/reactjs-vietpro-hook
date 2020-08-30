import React, { useState, useEffect } from "react";
import Item from './components/item'
import * as API from './services/Api'
function Product() {
  const [featProduct, setFeatProduct] = useState([]);
  const [newProduct, setNewProduct] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const [featPr, newPr] = await Promise.all([
        API.getFeatureProducts({ limit: 9 }),
        API.getNewProducts({ limit: 6 }),
      ])
      setFeatProduct(featPr.data.data);
      setNewProduct(newPr.data.data);
    }

    fetchData();
  }, []);

  return (
    <>
      <div class="products">
        <h3>Sản phẩm nổi bật</h3>
        <div class="product-list card-deck">
          {featProduct.map(e => <Item key={e._id} detail={e} />)}
        </div>
      </div>

      <div class="products">
        <h3>Sản phẩm mới</h3>
        <div class="product-list card-deck">
          {newProduct.map(e => <Item key={e._id} detail={e} />)}
        </div>
      </div>
    </>
  );
}

export default Product