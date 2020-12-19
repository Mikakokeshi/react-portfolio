import React, {useEffect, useState } from 'react';

export const SwiperFunc = () =>{

    const [gallerySwiper, setGallerySwiper] = useState(undefined)
    const [thumbnailSwiper, setThumbnailSwiper] = useState(undefined)

    const gallerySwiperParams = {
        centeredSlides: true,
        keyboard: {
            enabled: true,
        },
        getSwiper: setGallerySwiper, // Get swiper instance callback
    }

    const thumbnailSwiperParams = {
        centeredSlides: true,
        slidesPerView: 8,
        spaceBetween:10,
        touchRatio: 0.2,
        slideToClickedSlide: true,
        getSwiper: setThumbnailSwiper, // Get swiper instance callback
    }

    useEffect(() => {
        if (gallerySwiper && thumbnailSwiper) {
            gallerySwiper.controller.control = thumbnailSwiper
            thumbnailSwiper.controller.control = gallerySwiper
        }
    }, [gallerySwiper, thumbnailSwiper])

    return (
        {gallerySwiperParams,thumbnailSwiperParams }
    )

}