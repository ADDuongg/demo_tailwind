import React from 'react';

const ModalHeader = (props) => {
    
    const { toggleModal, menuItem } = props.data
   
    return (
        <div className="sticky top-0  z-50 bg-white h-80 p-10 flex justify-between items-start ">
            <div>
                {menuItem?.map((item, index) => (
                    <div key={index} className="item-modal mb-4 cursor-pointer p-2 hover:rounded-2xl hover:bg-colorGray hover:text-white" >{item} </div>
                ))}

            </div>
            <button className="btnX" onClick={toggleModal}><i className="fa-solid fa-x"></i></button>
        </div>
    );
}

export default ModalHeader;
