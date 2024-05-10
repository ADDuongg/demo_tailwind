import React, { useState } from 'react';
import MainLogo from '../images/MainLogo.png';
import ModalHeader from '../modal/modalHeader';

const Header = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };
    console.log(modalVisible);
    const menuItem = ['Home', 'About', 'Service', 'Gallery', 'Blog'];

    return (
        <React.Fragment>
            <div className='w-full h-16 absolute top-0 left-0 right-0 px-20 mt-14 z-10'>
                <header id="" className="flex w-full h-full justify-between mx-auto  items-center">
                    <img id="logo" src={MainLogo} alt="Main Logo" className="" />
                    <div className='h-25 w-2/5 lg:block hidden'>
                        <div id="" className="h-full w-full flex justify-between  ">
                            {menuItem?.map((item, index) => (
                                <div
                                    key={index}
                                    className={`menu-item text-xl cursor-pointer ${index === 0 ? 'text-colorPurple font-bold' : ''}`}
                                >
                                    {item}
                                    {index === 0 && <i className="fa-solid fa-plus" style={{ fontSize: '50%' }}></i>}
                                </div>
                            ))}
                        </div>
                    </div>
                    <button className="btnbar lg:hidden block" onClick={toggleModal}>
                        <i className="fa-solid fa-bars"></i>
                    </button>
                    <button className="custom-btn lg:block hidden">Contact</button>

                </header>
            </div>
            {modalVisible && <ModalHeader data={{ toggleModal, menuItem }} />}
        </React.Fragment>
    );
};

export default Header;
