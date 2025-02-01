import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredCartList, getStoredWishList } from '../../utility/addToDb';
import Product from '../Product/Product';

const Dashboard = () => {

    const [wishList, setWishList] = useState([]);
    const allProduct = useLoaderData();
    const [cartList, setCartList] = useState([]);
    const allProducts = useLoaderData();
    useEffect(() => {
        const StoredCartList = getStoredCartList();
        const storedCartListInt = StoredCartList.map(id => parseInt(id));
        console.log(StoredCartList, storedCartListInt, allProducts);
        const cartList = allProducts.filter(product => storedCartListInt.includes(product.productId));
        setCartList(cartList);


        const storedWishList = getStoredWishList();
        const storedWishListInt = storedWishList.map(id => parseInt(id));
        console.log(storedWishList, storedWishListInt, allProduct);
        const wishList = allProduct.filter(product => storedWishListInt.includes(product.productId));
        setWishList(wishList);


    }, [])

    // const [wishList, setWishList] = useState([]);
    // const allProduct = useLoaderData();

    // useEffect(() => {
    //     const storedWishList = getStoredWishList
    //     const storedWishListInt = storedWishList.map(id => parseInt(id));
    //     console.log(storedWishList, storedWishListInt, allProducts);
    //     const wishList = allProduct.filter(product => storedWishListInt.includes(product.productId));
    //     setWishList(wishList);
    // }, []);

    return (
        <div>
            <div className="bg-[#9538E2] h-[300px]   text-center py-16 px-4 rounded-2xl  mb-16">
                <h1 className="text-3xl font-bold text-[#FFFFFF] mb-5">Dashboard</h1>
                <p className="text-base font-normal text-[#FFFFFF] mb-5">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
            </div>
            




            <div>
                <Tabs>
                    <TabList >
                        <Tab>Cart</Tab>
                        <Tab>Wishlist</Tab>
                    </TabList>

                    <TabPanel>
                        <h2 className='text-2xl font-bold text-[#0B0B0B]'>Cart</h2>

                        <div>
                            {
                                cartList.map(product => <Product key={product.productId}  product={product}></Product>)
                            }
                        </div>
                        




                    </TabPanel>
                    <TabPanel>
                        <h2 className='text-2xl font-bold text-[#0B0B0B]'>WishList</h2>
                        {
                            wishList.map(product => <Product key={product.productId} product={product}></Product>)

                        }
                    </TabPanel>
                    
                </Tabs>
            </div>




        </div>
    );
};

export default Dashboard;