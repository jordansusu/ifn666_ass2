import React, { useEffect, useState, useTransition } from "react";
import GoogleMapReact from 'google-map-react';
import style from "../style/style";
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import NotFound from "../assets/icon/notFound.svg";
import Rating from '@mui/material/Rating';
import "../App.css";

const Map = ({ setPlaceCoordinates, setMapBounds, coordinates, placeLists }) => {

    const [placesList, setPlacesList] = useState([]);

    const test = [
        {
            name: 'south bank',
            lat: '-27.477701',
            lng: '153.02266'
        },
        {
            name: 'botanic garden',
            lat: '-27.47372',
            lng: '152.9746'
        },
        {
            name: 'City Cat',
            lat: '-27.472961',
            lng: '153.03108'
        },
        {
            name: 'XXXX',
            lat: '-27.467293',
            lng: '153.00647'
        },
        {
            name: 'City hooper',
            lat: '-27.465368',
            lng: '153.03334'
        }
    ];
    useEffect(() => {
        setPlacesList(placeLists);
    }, [placeLists]);

    useEffect(() => {
    }, [placesList]);

    const handleOnChange = (e) => {
        setPlaceCoordinates({ lat: e.center.lat, lng: e.center.lng });
        setMapBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
    } ;

    const handleOnChildClick = (e) => {
    } ;

    const places = placesList?.map((place) => {
        if (place.name === '') return <></>;
        else {
            return (
                <div
                    className="mapMarkerContainer"
                    style={{position: 'absolute !important', transform: 'translate(-50%, -50%)', zIndex: 1, cursor: 'pointer'}}
                    lat={Number(place.lat)}
                    lng={Number(place.lng)}
                    key={place.name}
                >
                    <Paper
                        style={{padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100px'}}
                        className="mapMarkerPaper"
                        elevation={3}
                    >
                        <Typography
                            variant="subtitle3"
                            gutterBottom
                        >
                            {place.name}
                        </Typography>
                        <img
                            className="mapMarkerImage"
                            src={place.image_url?.images?.medium?.url ? place.image_url.images.medium.url : NotFound}
                            width={30}
                            height={30}
                        />
                        <Rating
                            name="read-only"
                            size="small"
                            value={place.rating}
                            readOnly
                            precision={0.1}
                        />
                    </Paper>
                </div>
            );
        }
    });

    return (
        <div className="mapContainer" style={style.Map.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLEMAP_APIKEY}}
                defaultCenter={{ lat: -27.468128, lng: 153.026701 }}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={handleOnChange}
                onChildClick={handleOnChildClick}
            >
                {places}
            </GoogleMapReact>
        </div>
    );
};

export default Map;