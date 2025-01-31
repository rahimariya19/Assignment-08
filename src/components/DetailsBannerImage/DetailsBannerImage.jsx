import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const DetailsBannerImage = () => {
    const {productId}= useParams();
    const data =useLoaderData();
    const id =parseInt(productId);

    const product =data.find(product => product.productId===id);
    // console.log(product);
    // console.log(typeof productId, typeof id,typeof data[0].productId);
    const {productId:currentProductId,product_title,product_image,category,price,description,specification,availability,rating} = product;

    return (



 <div className="card card-side  bg-base-100 w-[1000px] h-[500px] mt-[-90px] ml-36">
  <figure>
    <img
      src={product_image}
      className='w-[400px]'
      alt="Movie" />
  </figure>
  <div className="card-body w-[600px]">
    {/* <h2 className="card-title">details :{productId}</h2> */}
    <h2>{product_title}</h2>
    <p>Price: ${price}</p>
    {/* <p className='bg-amber-300'>price:{availability}</p> */}
    <p>{description}</p>
    <p>{specification}</p>
    <p>Rating :{rating}</p>
    {/* <p>{category}</p> */}
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div> 


        //   {/* <div className="w-[1000px] h-[500px] border border-gray-300 flex justify-center mt-[-90px] ml-36 bg-amber-50">
        //            </div> */}







    );
};

export default DetailsBannerImage;