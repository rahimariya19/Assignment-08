
const Footer = () => {
    return (
        <footer className="bg-[#FFFFFF] px-24 py-24  mt-20">
            <div className="grid  grid-cols-1 justify-center text-center">
                <h4 className="font-bold  text-[#09080F] text-3xl mb-3">Gadget Heaven</h4>
                <p className="text-[#09080F99] text-sm font-medium mb-3">Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <hr className="text-[#09080F99]" />
           <div className="footer sm:footer-horizontal   p-10">
           <nav>
                <h6 className=" text-lg font-bold text-[#09080F]">Services</h6>
                <a className="text-base font-normal text-[#09080F99]">Product Support</a>
                <a className="text-base font-normal text-[#09080F99]">Order Tracking</a>
                <a className="text-base font-normal text-[#09080F99]">Shipping & Delivery</a>
                <a className="text-base font-normal text-[#09080F99]">Returns</a>
            </nav>
            <nav>
                <h6 className="text-lg font-bold text-[#09080F]">Company</h6>
                <a className="text-base font-normal text-[#09080F99]">About Us</a>
                <a className="text-base font-normal text-[#09080F99]">Careers</a>
                <a className="text-base font-normal text-[#09080F99]">Contact</a>
            </nav>
            <nav>
                <h6 className="text-lg font-bold text-[#09080F]">Legal</h6>
                <a className="text-base font-normal text-[#09080F99]">Terms of Service</a>
                <a className="text-base font-normal text-[#09080F99]">Privacy Policy</a>
                <a className="text-base font-normal text-[#09080F99]">Cookie Policy</a> 
            </nav>
           </div>
        </footer>
    );
};

export default Footer;