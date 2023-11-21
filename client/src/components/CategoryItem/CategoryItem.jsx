import React from 'react'
import { Link } from "react-router-dom";
import "./CategoryItem.css"

const CategoryItem = ({ item }) => {
  return (
    <div className="category-item">
      <Link to={`/products/${item.cat}`}>
      <img className="image" src={item.img} />
      <div className="info">
        <h1 className="title-category-item">{item.title}</h1>
        <button className="btn-category-item">SHOP NOW</button>
      </div>
      </Link>
    </div>
  )
}

export default CategoryItem