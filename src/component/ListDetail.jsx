import React, { useEffect } from "react";
import style from "../style/style";
import NotFound from "../assets/icon/notFound.svg";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

const ListDetail = ({ data }) => {
    return (
        <Card sx={{ display: 'flex', width: '400px', margin: '15px 5px' }}>
            <CardMedia
                component="img"
                sx={{ width: 150, minWidth: '150px', objectFit: 'contain' }}
                image={data.image_url?.images?.medium?.url ? data.image_url.images.medium.url : NotFound }
                alt=""
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent 
                    sx={{ flex: '1 0 auto' }}
                >
                    {/* Name */}
                    {
                        data.name ?
                                    <Typography
                                        component="div" 
                                        variant="h6"
                                    >
                                        {data.name}
                                    </Typography>
                                  :
                                   <></>
                    }

                    {/* Cuisine type */}
                    {
                        data.cuisine ?
                                        <Typography
                                            variant="subtitle2"
                                            color="text.secondary"
                                            component="div"
                                        >
                                            {data.cuisine}
                                        </Typography>
                                     :
                                        <></>
                    }

                    {/* Rating */}
                    {
                        data.rating ? 
                                        <Box sx={{ display: 'flex', alignItems: 'center'}}>
                                            <Rating
                                                name="text-feedback"
                                                value={data.rating}
                                                readOnly
                                                precision={0.1}
                                            >
                                                
                                            </Rating>
                                            <Typography
                                                sx={{ marginLeft: '5px' }}
                                                variant="subtitle2"
                                                color="text.secondary"
                                                component="div"
                                            >
                                                {data.rating}({data.num_reviews})
                                            </Typography>
                                        </Box>
                                    :
                                        <></>
                    }
                    
                    {/* price level */}
                    {
                        data.price_level ?
                                            <Typography
                                                variant="subtitle1"
                                                color="text.secondary"
                                                component="div"
                                            >
                                                Price: {data.price_level}
                                            </Typography>
                                         :
                                            <></>
                    }

                    {/* Phone number */}
                    {
                        data.phone ?
                                        <Typography
                                            variant="subtitle1"
                                            color="text.secondary"
                                            component="div"
                                        >
                                            Phone: {data.phone}
                                        </Typography>
                                    :
                                        <></>
                    }

                    {/* Description */}
                    {
                        data.description ?
                                            <Typography
                                                sx={{ margin: '10px 0' }}
                                                variant="subtitle1"
                                                color="text.secondary"
                                                component="div"
                                            >
                                                {data.description}
                                            </Typography>
                                    :
                                        <></>
                    }

                    {/* Website */}
                    {
                        data.website ?
                                        <Typography
                                            variant="subtitle1"
                                            color="text.secondary"
                                            component="div"
                                        >
                                        <a
                                            href={data.website}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Check the website
                                        </a>
                                        </Typography>
                                    :
                                        <></>
                    }

                </CardContent>
            </Box>
        </Card>
    );
};

export default ListDetail;