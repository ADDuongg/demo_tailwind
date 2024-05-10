import React from 'react';
import footerLogo from '../images/Footer Logo.png';
import bgfooter from '../images/bgfooter.png';
const Footer = () => {
    function handleToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div className='relative bottom-0 left-0 right-0'>
            <section id="" className="w-full h-[705.34px] relative">
                <div className="bg-footer absolute top-0 w-full h-[705.34px] z-10" style={{ backgroundImage: `url(${bgfooter})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                    <div className=" pt-[15rem]">
                        <div className=" flex sm:justify-evenly justify-start sm:pl-0 pl-10 flex-wrap">
                            <div className=" flex flex-col text-[#D7DBFF] mr-20">
                                <div><img src={footerLogo} alt="" /></div>
                                <div className=" sm:pl-28 pl-0">
                                    <p className="text-lg">Beautice</p>
                                    <p className="text-[#D7DBFF]">is a Beauty Clinic WordPress Theme.</p>
                                    <p className="text-[#D7DBFF] mt-3">Baker Steet 101, NY, United States.</p>
                                    <div className="flex justify-between text-[#D7DBFF] mt-3">
                                        <p>+521 569 8966.</p>
                                        <p>mail@company.com.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="text-white text-xl">Pages</div>
                                <ul className="ul-page text-[#D7DBFF]">
                                    <li><i className="fa-solid fa-caret-right mr-4 lg:mt-6 mt-2"></i>Home</li>
                                    <li><i className="fa-solid fa-caret-right mr-4 lg:mt-6 mt-2"></i>About</li>
                                    <li><i className="fa-solid fa-caret-right mr-4 lg:mt-6 mt-2"></i>Service</li>
                                    <li><i className="fa-solid fa-caret-right mr-4 lg:mt-6 mt-2"></i>Gallery</li>
                                    <li><i className="fa-solid fa-caret-right mr-4 lg:mt-6 mt-2"></i>Team</li>
                                </ul>
                            </div>
                            <div className="">
                                <div className="text-white text-xl sm:mt-0 mt-3">Informations</div>
                                <ul className="ul-page text-[#D7DBFF]">
                                    <li><i className="fa-solid fa-caret-right mr-4 lg:mt-6 mt-2"></i>Terms & conditions</li>
                                    <li><i className="fa-solid fa-caret-right mr-4 lg:mt-6 mt-2"></i>Privacy policy</li>
                                    <li><i className="fa-solid fa-caret-right mr-4 lg:mt-6 mt-2"></i>Blog</li>
                                    <li><i className="fa-solid fa-caret-right mr-4 lg:mt-6 mt-2"></i>Contact</li>
                                </ul>
                            </div>
                        </div>

                        <div  className="flex justify-end pr-10">
                            <button className="text-white rounded-lg h-6 w-6 p-5 bg-colorPink flex justify-center items-center" onClick={handleToTop}><i className="fa-solid fa-arrow-up"></i></button>
                        </div>

                        <div className=" sm:w-70 w-full mx-auto sm:mt-12 mt-0 flex sm:flex-row flex-col justify-evenly items-center">
                            <div className="iconFooter flex w-1/3 justify-between">
                                <i className="fa-brands  fa-facebook text-white text-3xl"></i>
                                <i className="fa-brands  fa-twitter text-white text-3xl"></i>
                                <i className="fa-brands  fa-linkedin-in text-white text-3xl"></i>
                                <i className="fa-brands  fa-youtube text-white text-3xl"></i>
                                <i className="fa-brands  fa-instagram text-white text-3xl"></i>
                            </div>
                            <div className=" text-[#D7DBFF] font-poppins font-normal text-base text-right">
                                © AltDesain Studio 2021 - All right reserved.
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" absolute bottom-0 w-full h-[125px] bg-[#0D165C] z-2"></div>
            </section>
        </div>
    );
}

export default Footer;
