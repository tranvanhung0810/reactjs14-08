import React from 'react';
import "../styles/header.css";
import {
    FacebookOutlined,
    SearchOutlined,
    HomeOutlined,
    PlaySquareOutlined,
    BookOutlined,
    LayoutOutlined,
    ContactsOutlined
  } from '@ant-design/icons';
const Header = () => {
    return ( 
        <>
            <div className="container-fluid">
                <div className="header _start">
                    <div className = "wapper-icon">
                        <FacebookOutlined style = {{color : "#fff" , fontSize : '40px'}} />
                    </div>
                    <div className = "search-bar">
                        <SearchOutlined style = {{color : '#a7abaf',fontSize : '20px'}} />
                        <input placeholder = "Tìm kiếm .... " className= "input" type = "text"/>
                    </div>
                </div>
                <div className="header _center">
                    <div className = "w-icon">
                        <HomeOutlined style = {{color : '#5b5c5f', fontSize : '20px'}}/>
                    </div>
                    <div className = "w-icon">
                        <PlaySquareOutlined style = {{color : '#5b5c5f', fontSize : '20px'}}/>
                    </div>
                    <div className = "w-icon">
                        <BookOutlined style = {{color : '#5b5c5f', fontSize : '20px'}}/>
                    </div>
                    <div className = "w-icon">
                        <LayoutOutlined style = {{color : '#5b5c5f', fontSize : '20px'}}/>
                    </div>
                    <div className = "w-icon">
                        <ContactsOutlined style = {{color : '#5b5c5f', fontSize : '20px'}}/>
                    </div>
                   
                   
                 
                   
                   
                </div>
                <div className="header _end">
c
                </div>
            </div>
        </>
    );
};

export default Header;