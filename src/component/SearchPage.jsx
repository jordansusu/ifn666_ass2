import React, { useState, useEffect } from "react";
import style from "../style/style";
import Map from "./Map";
import { GetPlaceData } from "../api/TripAdvisor";
import Lottie from "react-lottie";
import ListDetail from "./ListDetail";
import * as loadingAnimationData from '../assets/lottie/loading.json';

const SearchPage = ({ type }) => {
    const [searchString, setSearchString] = useState(''); // user input
    const [isSearching, setIsSearching] = useState(false);
    const [searchType, setSearchType] = useState(''); // for api using
    const [itemLists, setItemLists] = useState([]); // raw data fetch from api
    const [searchItemList, setSearchItemList] = useState([]); // processed data by user input
    const [placeCoordinates, setPlaceCoordinates] = useState({ lat: -27.468128, lng: 153.026701 });
    const [mapBounds, setMapBounds] = useState(null);

    // default option for lottie animation
    const loadingAnimationOptions = {
        loop: true,
        autoplay: true,
        animationData: loadingAnimationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid meet'
        }
    };

    const displayLists = searchItemList.map((item) => {
        return <ListDetail key={item.name} data={item} />;
    });

    const updateUI = () => {
        if (type === 'Hotel') setSearchType('hotels');
        else if (type === 'Eat') setSearchType('restaurants');
        else if (type === 'Play') setSearchType('attractions');
    };

    const refreshPlaceData = async () => {
        setIsSearching(true);
        setItemLists(await GetPlaceData({ searchType, mapBounds }));
    };

    const refreshSearchItemLists = () => {
        if (searchString === '') {
            setSearchItemList(itemLists);
        } else {
            const newItemLists = itemLists.filter(function (item) {
                return item.name.toLowerCase().includes(searchString.toLowerCase());
            });
            setSearchItemList(newItemLists);
        }
    }

    const handleInput = (e) => {
        setSearchString(e.target.value);
    }

    useEffect(() => {
        if (type === 'Hotel') setSearchType('hotels');
        else if (type === 'Eat') setSearchType('restaurants');
        else if (type === 'Play') setSearchType('attractions');
    }, []);
    
    // Get place info base on the location on map or the address input from input field
    useEffect(() => {
        refreshPlaceData();
    }, [placeCoordinates, mapBounds]);

    useEffect(() => {
        updateUI();
        setSearchString('');
    }, [type]);

    useEffect(() => {
        refreshPlaceData();
    }, [searchType]);

    useEffect(() => {
        refreshSearchItemLists();
        setTimeout(() => {
            setIsSearching(false);
        }, 1500);
    }, [itemLists]);

    useEffect(() => {
        refreshSearchItemLists();
    }, [searchString]);


    return (
        <div className="searchPageContainer" style={style.SearchPage.searchPageContainer}>
            {/* Search bar and list */}
            <div className="searchPageListContainer">
                <div
                    className="searchPageInputContainer"
                    style={style.SearchPage.searchPageInputContainer}
                >
                    <input
                        className="searchPageInput"
                        style={style.SearchPage.searchPageInput}
                        placeholder="Enter the name you want to find"
                        onChange={handleInput}
                        defaultValue=""
                        value={searchString}
                    />
                </div>
                {
                    isSearching ?
                                    <Lottie
                                        options={loadingAnimationOptions}
                                        resizeMode="center"
                                        height={250}
                                        width={250}
                                    />
                                :
                                    <div style={{ overflow: 'auto', height: '75vh' }}>
                                        {displayLists}
                                    </div>
                                
                }
            </div>

            {/* Google Map */}
            <Map 
                setPlaceCoordinates={setPlaceCoordinates}
                setMapBounds={setMapBounds}
                coordinates={placeCoordinates}
                placeLists={searchItemList}
            />
        </div>
    );
};

export default SearchPage;