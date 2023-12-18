import React from 'react';
import { PRODUCTS } from './Products';
import {Product} from "./Product";
import "./ProductList.css";

function ProductList() {
  return (
      <div className='shop'>
        <div className='shopTitle'>
          <h1>Shop</h1>
        </div>
        <div className='products'>
            {" "}
          {PRODUCTS.map((product) => (
            <Product data={product} />
          )
          )}
       
        </div>
        
       
      </div>
  );
};
export default ProductList;

