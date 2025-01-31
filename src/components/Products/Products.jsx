import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    //ew
    // const [selectedCategory, setSelectedCategory] = useState("All Product");
    // const filteredProducts =
    // selectedCategory === "All Product"
    //   ? products
    //   : products.filter((product) => product.category === selectedCategory);

    useEffect(() => {
        fetch('./productData.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h1 className='text-4xl font-bold text-[#0B0B0B] mt-24 text-center mb-6'>Explore Cutting-Edge Gadgets</h1>
           <div className='max-w-7xl mx-auto'>
           <div className='flex flex-col md:flex-row gap-5'>
                <div className=' w-[190px] h-fit grid grid-cols-1 bg-[#FFFFFF] border border-gray-200 rounded-xl'>
                    <button className='text-lg font-extrabold text-[#FFFFFF] bg-[#9538E2] rounded-full p-2 m-2 '>All Product</button>
                    <button className='text-lg font-medium text-[#09080F99] rounded-full p-2 m-2 bg-[#09080F0D]'>Laptops</button>
                    <button className='text-lg font-medium text-[#09080F99] rounded-full p-2 m-2 bg-[#09080F0D]'>Phones</button>
                    <button className='text-lg font-medium text-[#09080F99] rounded-full p-2 m-2 bg-[#09080F0D]'>Accessories</button>
                    <button className='text-lg font-medium text-[#09080F99] rounded-full p-2 m-2 bg-[#09080F0D]'>Smart Watches</button>
                </div>

                <div className='w-3/4 grid grid-cols-1 md:grid-cols-3 gap-5'>
                    {
                        products.map(product=> <Product key={product.productIid} product={product}></Product>)

                    }
                </div>
            </div>

           </div>
        </div>
    );
};

export default Products;