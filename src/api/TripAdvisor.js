import React, { useState } from "react";

export const GetPlaceData = async ({ searchType, mapBounds }) => {
    const attractionItem = [
        {
            location_id:"451112",
            name:"Po Nagar Cham Towers",
            latitude:"12.265535",
            longitude:"109.19535",
            image_url:"https://media-cdn.tripadvisor.com/media/photo-t/09/b9/08/45/screenshot-2015-12-11.jpg",
            num_reviews:"4770",
            rating:"4.5",
            description:"The Po Nagar Tower is the name of the main temple in a complex of Cham towers on a knoll at the river-mouth of the Cai River, 2km north of Nha Trang City. Nowadays, the name Po Nagar is usually used to refer to the whole complex.",
            website:"https://www.tripadvisor.com/Attraction_Review-g293928-d451112-Reviews-Po_Nagar_Cham_Towers-Nha_Trang_Khanh_Hoa_Province.html"
        },
        {
            location_id:"451112",
            name:"Po Nagar Cham Towers",
            latitude:"12.265535",
            longitude:"109.19535",
            image_url:"https://media-cdn.tripadvisor.com/media/photo-t/09/b9/08/45/screenshot-2015-12-11.jpg",
            num_reviews:"4770",
            rating:"4.5",
            description:"The Po Nagar Tower is the name of the main temple in a complex of Cham towers on a knoll at the river-mouth of the Cai River, 2km north of Nha Trang City. Nowadays, the name Po Nagar is usually used to refer to the whole complex.",
            website:"https://www.tripadvisor.com/Attraction_Review-g293928-d451112-Reviews-Po_Nagar_Cham_Towers-Nha_Trang_Khanh_Hoa_Province.html"
        },
        {
            location_id:"451112",
            name:"Po Nagar Cham Towers",
            latitude:"12.265535",
            longitude:"109.19535",
            image_url:"https://media-cdn.tripadvisor.com/media/photo-t/09/b9/08/45/screenshot-2015-12-11.jpg",
            num_reviews:"4770",
            rating:"4.5",
            description:"The Po Nagar Tower is the name of the main temple in a complex of Cham towers on a knoll at the river-mouth of the Cai River, 2km north of Nha Trang City. Nowadays, the name Po Nagar is usually used to refer to the whole complex.",
            website:"https://www.tripadvisor.com/Attraction_Review-g293928-d451112-Reviews-Po_Nagar_Cham_Towers-Nha_Trang_Khanh_Hoa_Province.html"
        }
    ];
    if (!searchType) return [];
   
    // restaurants, attractions, hotels
    const url = `https://travel-advisor.p.rapidapi.com/${searchType}/list-in-boundary?bl_latitude=${mapBounds.ne.lat}&tr_latitude=${mapBounds.sw.lat}&bl_longitude=${mapBounds.sw.lng}&tr_longitude=${mapBounds.ne.lng}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
    };

    const response = await fetch(url, options);
    const result = await response.json();
    if (searchType === 'hotels') {
        const tmp = result.data.map((hotel) => ({
            location_id: hotel.location_id,
            name: hotel.name,
            lat: hotel.latitude,
            lng: hotel.longitude,
            image_url: hotel.photo,
            num_reviews: hotel.num_reviews,
            rating: hotel.rating,
            price_level: hotel.price_level
        }));
        return tmp.filter(function (item) {
            return item.name !== undefined;
        });
    }
    else if (searchType === 'restaurants') {
        const tmp = result.data.map((restaurant) => ({
            location_id: restaurant.location_id,
            name: restaurant.name,
            lat: restaurant.latitude,
            lng: restaurant.longitude,
            address: restaurant.address,
            image_url: restaurant.photo,
            num_reviews: restaurant.num_reviews,
            rating: restaurant.rating,
            price_level: restaurant.price_level,
            // cuisine: restaurant.cuisine[0],
            phone: restaurant.phone,
            website: restaurant.website
        }));
        return tmp.filter(function (item) {
            return item.name !== undefined;
        });
    }
    else if (searchType === 'attractions') {
        const tmp = result.data.map((attraction) => ({
            location_id: attraction.location_id,
            name: attraction.name,
            lat: attraction.latitude,
            lng: attraction.longitude,
            image_url: attraction.photo,
            num_reviews: attraction.num_reviews,
            rating: attraction.rating,
            description: attraction.description,
            website: attraction.web_url
        }));
        return tmp.filter(function (item) {
            return item.name !== undefined;
        });
    }
    return [];
}
