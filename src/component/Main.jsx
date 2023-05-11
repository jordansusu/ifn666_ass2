import React, { useEffect, useState } from "react";
import style from "../style/style";
import { GetPhotos } from '../api/Unsplash';
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "../App.css";

const Main = () => {

    const [images, setImages] = useState([]);
    useEffect(() => {
        refreshPhotos();
    }, []);

    const refreshPhotos = async () => {
        setImages(await GetPhotos());
    };
       
    return (
        <div style={style.Main.mainContainer}>
            <Slider autoplay={1500}>
                {
                    images?.map((image) => 
                    <div key={image.id} style={{ background: `url('${image.url}') no-repeat center center`, backgroundSize: 'cover' }}>
                    </div>
                )}
            </Slider>
            <div style={style.Main.mainTextContainer}>
                <p align="center" style={style.Main.mainText}>
                    People love to travel, not to reach their destination, but to enjoy the pleasures of the journey.<br />Plan your next trip right now.
                </p>
            </div>
        </div>
        
    );
};

export default Main;