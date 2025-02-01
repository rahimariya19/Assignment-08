import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredCartList, addToStoredWishList } from '../../utility/addToDb';

const DetailsBannerImage = () => {
  const { productId } = useParams();
  const data = useLoaderData();
  const id = parseInt(productId);

  const product = data.find(product => product.productId === id);
  // console.log(product);
  // console.log(typeof productId, typeof id,typeof data[0].productId);
  const { productId: currentProductId, product_title, product_image, category, price, description, specification, availability, rating } = product;

  const handleAddToCart=(id)=>{
    addToStoredCartList(id);

  }
  const handleAddToWish=(id)=>{
    addToStoredWishList(id);

  }

  return (



    <div className="card card-side  w-[1000px] h-[500px] mt-[-90px] ml-36 bg-base-100">
      <figure>
        <img
          src={product_image}
          className='w-[400px]'
          alt="Movie" />
      </figure>
      <div className="card-body w-[600px]">
        {/* <h2 className="card-title">details :{productId}</h2> */}
        <h2 className='text-3xl font-semibold text-[#09080F]'>{product_title}</h2>
        <p className='text-xl font-semibold text-[#09080FCC]'>Price: ${price}</p>
        <p className='p-2 text-[#309C08] font-medium text-base'>{availability}</p>
        <p className='text-[#09080F99] font-normal text-lg'>{description}</p>
        <p className='text-[#09080F] text-lg font-bold'>Specification:</p>
        <p className='text-[#09080F99] text-lg font-normal'>{specification}</p>
        <p className='text-[#09080F] text-lg font-bold'>Rating :</p>
        <p className='text-[#09080FCC] font-medium text-sm'>{rating}</p>
        <div className="card-actions ">
          <button onClick={() => handleAddToCart(productId)} className="btn  btn-outline bg-[#9538E2] text-[#FFFFFF]  rounded-3xl">Add To Card</button>
          <button onClick={() => handleAddToWish(productId)} className="btn btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[1.2em]"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
          </button>       
           </div>
      </div>
    </div>


  );
};

export default DetailsBannerImage;