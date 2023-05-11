import { useEffect, useRef, useState } from "react";
import style from "../style/style";
import Header from "./Header";
import Main from "./Main";
import Login from "./Login";
import SearchPage from "./SearchPage";
import { useLocation, Routes, Route, useNavigate } from "react-router-dom";
import Footer from "./Footer";

const LandingPage = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const [selectPage, setSelectPage] = useState('Home');

    const handleMenuClick = (page) => {
        navigate(getNewPageUrl(page));
    }

    const getNewPageUrl = (page) => {
        if (page === 'Home') return '/';
        else {
            return '/' + page;
        }
    }

    return (
        <div 
            className="landingContainer"
            style={style.landingPage.leadingContainer}
        >
            {/* Header */}
            <Header
                clickMenu={handleMenuClick}
                currentPath={location.pathname.split('/')[1]}
            />

            {/* content */}
            <div 
                className="landingContent"
                style={style.landingPage.leadingContent}
            >
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/Hotel" element={<SearchPage type="Hotel"/>} />
                    <Route path="/Eat" element={<SearchPage type="Eat"/>} />
                    <Route path="/Play" element={<SearchPage type="Play"/>} />
                    <Route path="/Login" element={<Login />} />
                </Routes>
            </div>

            {/* footer */}
            <Footer />
        </div>
    )
}

export default LandingPage;