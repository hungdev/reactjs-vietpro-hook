import React from 'react'
import { Link } from 'react-router-dom'
import { getImageUrl } from '../utils'

export default function item({ detail }) {
  return (
    <div class="product-item card text-center">
      <Link to={`/product/${detail && detail._id}`}>
        <img src={getImageUrl(detail)} alt='product' />
      </Link>
      <h4>
        <Link to={`/product/${detail && detail._id}`}>{detail && detail.name}</Link>
      </h4>
      <p>Giá Bán: <span>{detail && detail.price}đ</span></p>
    </div>
  )
}
