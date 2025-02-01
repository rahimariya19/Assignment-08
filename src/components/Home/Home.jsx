import React from 'react';
import Banner from '../Banner/Banner';
import BannerImage from '../BannerImage/BannerImage';
import Products from '../Products/Products';
// import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Banner ></Banner>
            <BannerImage></BannerImage>
            <Products></Products>
            {/* <Outlet></Outlet> */}
            
            {/* banner
            heading
            categories tab section
            dynamic nested component */}
        </div>
    );
};

export default Home;