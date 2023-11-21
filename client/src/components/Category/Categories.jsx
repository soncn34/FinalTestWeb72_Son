import React from 'react'
import { categories } from "../../data";
import CategoryItem from "../CategoryItem/CategoryItem";
import "./Categories.css"

const Categories = () => {
  return (
    <div className="categories-container">
      <h1 className="categories-title">DANH MỤC SẢN PHẨM</h1>
      <div className="categories">
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
      </div>
    </div>
  )
}

export default Categories