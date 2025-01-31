import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  const {productId, product_title, product_image, price } = product;
  return (
    <Link to={`/products/${productId}`}>
      <div className="card  p-5 border border-gray-200">
        <figure className=' py-2 rounded-2xl'>
          <img
            src={product_image}
            className='h-[180px] w-[282px] rounded'
            alt="" />
        </figure>
        <div className="card-body">
          <h2 className=" text-[#09080F] text-2xl font-semibold">
            {product_title}
          </h2>
          <p className='text-[#09080F99] font-medium text-xl'>Price: {price}</p>
          <div className="card-actions">
            {/* <div className="p-2 border border-[#9538E2] rounded-3xl text-[#9538E2]">View Details</div> */}
            <button className="p-2 border border-[#9538E2] rounded-3xl text-[#9538E2]">View Details</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;