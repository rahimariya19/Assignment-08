import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    useEffect(() => {
        document.title = "About Us | GadgetHeaven"; // Dynamic Page Title
    }, []);
    return (


        <div>

            <div>
                <div className="bg-[#9538E2] h-[300px]   text-center py-16 px-4 rounded-2xl  mb-16">
                    <h1 className="text-4xl font-bold text-[#FFFFFF] mb-5">About GadgetHeaven</h1>
                    <p className="text-lg font-normal text-[#FFFFFF] mb-5">Your go-to destination for the latest and greatest gadgets!</p>

                    <div className="bg-white shadow-lg rounded-2xl p-6 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-[#0B0B0B] ">Our Mission</h2>
                    <p className="text-lg font-medium text-[#09080F99] mt-2 text-justify">
                        At <strong>GadgetHeaven</strong>, our passion lies in revolutionizing the way you experience technology. We are committed to curating the latest, most innovative, and high-quality gadgets that seamlessly blend functionality with cutting-edge design. From smartphones that redefine connectivity to smartwatches that keep you in sync, and power banks that ensure you’re always powered up—we bring you the best-in-class tech at unbeatable prices.
                        Our mission is not just about selling gadgets; it's about enhancing lifestyles, simplifying everyday tasks, and empowering you with technology that makes a difference. Whether you're a tech enthusiast, a professional, or someone who loves staying ahead of trends, GadgetHeaven is your ultimate destination for next-level innovation.
                    </p>
                </div>

                </div>
            </div>



            <div className="max-w-3xl mx-auto px-4 py-8 ">


                {/* <div className="bg-white shadow-lg rounded-2xl p-6">
                    <h2 className="text-2xl font-semibold text-gray-700">Our Mission</h2>
                    <p className="text-gray-600 mt-2 text-justify">
                        At <strong>GadgetHeaven</strong>, our passion lies in revolutionizing the way you experience technology. We are committed to curating the latest, most innovative, and high-quality gadgets that seamlessly blend functionality with cutting-edge design. From smartphones that redefine connectivity to smartwatches that keep you in sync, and power banks that ensure you’re always powered up—we bring you the best-in-class tech at unbeatable prices.
                        Our mission is not just about selling gadgets; it's about enhancing lifestyles, simplifying everyday tasks, and empowering you with technology that makes a difference. Whether you're a tech enthusiast, a professional, or someone who loves staying ahead of trends, GadgetHeaven is your ultimate destination for next-level innovation.
                    </p>
                </div> */}

                <div className="bg-gray-100 shadow-md rounded-xl p-6 mt-[400px] md:mt-44">
                    <h2 className="text-2xl font-bold text-[#0B0B0B]">Why Choose Us?</h2>
                    <ul className="list-disc list-inside text-lg font-medium text-[#09080F99] mt-2">
                        <li>High-quality, trending gadgets</li>
                        <li>Easy-to-use e-commerce platform</li>
                        <li>Secure payments and fast delivery</li>
                        <li>Wishlist and cart management with smooth UI</li>
                        <li>Authentic customer reviews & top-notch support</li>
                    </ul>
                </div>


                <div className="bg-[#9538E2] text-center p-8 rounded-xl shadow-md mt-8">
                    <h2 className="  text-3xl font-bold text-[#0B0B0B]">Stay Updated with GadgetHeaven</h2>
                    <p className="text-lg font-normal mt-2 text-[#09080F99]">Subscribe to get exclusive tech deals and updates!</p>
                    <input type="email" placeholder="Enter your email" className="mt-4 p-2 rounded-lg text-black w-2/3" />
                    <button className="bg-white text-[#9538E2] px-6 py-2 rounded-lg shadow-lg mt-4 hover:bg-gray-200 transition">
                        Subscribe
                    </button>
                </div>







                <div className="text-center mt-8">
                    <Link to="/" className="bg-[#9538E2] text-white px-6 py-2 rounded-lg shadow-lg ">
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;