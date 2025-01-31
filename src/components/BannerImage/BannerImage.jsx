import React from 'react';
import bannerImg from '../../assets/images/banner.jpg';

const BannerImage = () => {
    return (
        <div>
            <div className="flex justify-center mt-[-80px]">
                <img src={bannerImg}
                    alt="Gadget Heaven"
                    className="w-[600px] rounded-2xl shadow-2xl border-4 border-white" />
            </div>
        </div>
    );
};

export default BannerImage;