import React from "react";

export const GetPhotos = async () => {
    const url = `https://api.unsplash.com/search/photos?query=landscape&orientation=landscape&per_page=5&client_id=${process.env.UNSPLASH_ACCESS_KEY}`;
    const res = await fetch(url);
    const data = await res.json();
    return data.results.map((image) => ({
        id: image.id,
        url: image.urls.regular
    }));
};