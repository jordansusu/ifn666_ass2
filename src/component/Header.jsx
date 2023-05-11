import { useEffect, useRef, useState } from "react";
import style from "../style/style";
import HeaderLogo from "../assets/icon/headerLogo.svg";

const Header = ({clickMenu, currentPath}) => {

    const [needUpdate, setNeedUpdate] = useState(true);
    const [selectBtn, setSelectBtn] = useState('Home');
    const [hoverBtn, setHoverBtn] = useState('');

    useEffect(() => {
        if (needUpdate) clickMenu(selectBtn);
    }, [selectBtn]);

    const menuItemLists = [
        {
            path: '',
            title: 'Home',
            handleClick: () => setSelectBtn('Home'),
            handleMouseEnter: () => setHoverBtn('Home'),
            handleMouseLeave: () => setHoverBtn('')
        },
        // {
        //     path: 'Hotel',
        //     title: 'Hotel',
        //     handleClick: () => setSelectBtn('Hotel'),
        //     handleMouseEnter: () => setHoverBtn('Hotel'),
        //     handleMouseLeave: () => setHoverBtn('')
        // },
        {
            path: 'Eat',
            title: 'Eat',
            handleClick: () => setSelectBtn('Eat'),
            handleMouseEnter: () => setHoverBtn('Eat'),
            handleMouseLeave: () => setHoverBtn('')
        },
        {
            path: 'Play',
            title: 'Play',
            handleClick: () => setSelectBtn('Play'),
            handleMouseEnter: () => setHoverBtn('Play'),
            handleMouseLeave: () => setHoverBtn('')
        },
        {
            path: 'Login',
            title: 'Login',
            handleClick: () => setSelectBtn('Login'),
            handleMouseEnter: () => setHoverBtn('Login'),
            handleMouseLeave: () => setHoverBtn('')
        }
    ];

    
    let lists = menuItemLists?.map(function(list) {
        return (
            <div
                key={list.title}
                className="headerMenuButton"
                style={ currentPath === list.path ? style.header.selectedButton : hoverBtn === list.title ? style.header.hoverButton : style.header.headerMenuButton }
                onMouseEnter={list.handleMouseEnter}
                onMouseLeave={list.handleMouseLeave}
                onClick={list.handleClick}
            >
                {list.title}
            </div>
        );
    })

    return (
        <div
            className="headerContainer"
            style={style.header.headerContainer}
        >
            <div
                className="headerLogoContainer"
                style={style.header.headerLogoContainer}
            >
                <img 
                    src={HeaderLogo}
                    style={style.header.headerLogoSvg}
                />
            </div>

            <div
                className="headerMenuContainer"
                style={style.header.headerMenuContainer}
            >
                {lists}
            </div>
           
        </div>
    );
}

export default Header;