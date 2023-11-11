import React from "react";
import './ProductDetailComponent.css'
import { useParams } from "react-router-dom";


const ProductDetailComponent = () => {
  const { productId } = useParams();
  return <div>ProductDetailComponent productid {productId}</div>;
}

// const ProductDetailComponent = (props) => {
//   return (
//     <div className="item">
//       <img src={props.image} alt="" />
//       <p>{props.name}</p>
//       <div className="item-prices">
//         <div className="item-price-new">
//           {props.new_price}
//         </div>
//         <div className="item-price-old">
//           {props.old_price}
//         </div>
//       </div>
//     </div>
//   )
// };

export default ProductDetailComponent;
