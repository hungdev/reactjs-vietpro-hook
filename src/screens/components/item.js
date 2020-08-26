import React from 'react'

export default function item(props) {
  return (
    <div class="product-item card text-center">
      <a href="#"><img src="images/product-1.png" /></a>
      <h4><a href="#">{props.name}</a></h4>
      <p>Giá Bán: <span>{props.price}</span></p>
    </div>
  )
}
