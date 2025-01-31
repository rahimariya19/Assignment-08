import React from 'react';
import { useParams } from 'react-router-dom';
import DetailsBanner from '../DetailsBanner/DetailsBanner';
import DetailsBannerImage from '../DetailsBannerImage/DetailsBannerImage';

const ProductsDetail = () => {
    return (
        <div>
            <DetailsBanner></DetailsBanner>
            <DetailsBannerImage></DetailsBannerImage>
        </div>
    );
};

export default ProductsDetail;