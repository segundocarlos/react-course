import React, { useEffect, useState } from 'react'
import { getGift } from '../helpers/getGifts';


export const useFetchGift = (category) => {
 
    const [images, setimages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async () => {
        const newImages = await getGift(category);
        setimages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages(category);
        }, [])
    
  
    return {
        images: images,
        isLoading: isLoading
    }

}
