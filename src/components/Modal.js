import React, {useEffect, useState } from 'react';
import portfolio1 from '../assets/img/deonatulle.jpg';
import portfolio1_2 from '../assets/img/deonatulle_2.jpg';
import portfolio1_3 from '../assets/img/deonatulle_3.jpg';
import portfolio2 from '../assets/img/steins.jpg';
import portfolio3 from '../assets/img/kurumanomori.jpg';
import Swiper from "react-id-swiper"
import 'swiper/css/swiper.css'
import {SwiperFunc} from "./SwiperFunc.js"

    export const ModalOne = ({  isOpen, hideModal }) =>{
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
            isOpen && ( 
                <div className="modal_area">
                    <div className="modal_close_area" onClick={hideModal} ></div>
                    <div className="modal_wrap">
                        <div className="modal_closeBtn" onClick={hideModal}></div>
                        <div className="head">デオナチュレ</div>
                        <div className="modal_content">
                            <Swiper {...gallerySwiperParams} > 
                                <div><img src={portfolio1} alt="deonatulle"/></div>
                                <div><img src={portfolio1_2} alt="deonatulle"/></div>
                                <div><img src={portfolio1_3} alt="deonatulle"/></div>
                            </Swiper>
                            <Swiper {...thumbnailSwiperParams}>
                                <div className="thumbnail_slider"><img src={portfolio1} alt="t deonatulle"/></div>
                                <div className="thumbnail_slider"><img src={portfolio1_2} alt="t deonatulle"/></div>
                                <div className="thumbnail_slider"><img src={portfolio1_3} alt="t deonatulle"/></div>
                            </Swiper>
                            <ul className="modal_txt">
                                <li><strong>URL</strong> <a rel="noreferrer" target="_blank" href="http://otoko-deonatulle.com/cp/2018/murease-men.html">http://otoko-deonatulle.com/cp/2018/murease-men.html</a></li>
                                <li><strong>使用ツール</strong> <p>Photoshop / VSCode</p></li>
                                <li><strong>使用言語</strong> <p>HTML5 / CSS3 / Javascript</p></li>
                                <li><strong>詳細</strong> </li>
                            </ul>
                        </div>
                    </div>

                </div> )
            )
    }
    export const ModalTwo = ({  isOpen, hideModal, gallerySwiperParams, thumbnailSwiperParams }) =>{

        // SwiperFunc()
            
        return (
            isOpen && ( 
                <div className="modal_area">
                    <div className="modal_close_area" onClick={hideModal} ></div>
                    <div className="modal_wrap">
                        <div className="modal_closeBtn" onClick={hideModal}></div>
                        <div className="head">デオナチュレ</div>
                        <div className="modal_content">
                            <Swiper {...gallerySwiperParams} > 
                                <div><img src={portfolio1} alt="deonatulle"/></div>
                                <div><img src={portfolio1_2} alt="deonatulle"/></div>
                                <div><img src={portfolio1_3} alt="deonatulle"/></div>
                            </Swiper>
                            <Swiper {...thumbnailSwiperParams}>
                                <div className="thumbnail_slider"><img src={portfolio1} alt="t deonatulle"/></div>
                                <div className="thumbnail_slider"><img src={portfolio1_2} alt="t deonatulle"/></div>
                                <div className="thumbnail_slider"><img src={portfolio1_3} alt="t deonatulle"/></div>
                            </Swiper>
                            <ul className="modal_txt">
                                <li><strong>URL</strong> <a rel="noreferrer" target="_blank" href="http://otoko-deonatulle.com/cp/2018/murease-men.html">http://otoko-deonatulle.com/cp/2018/murease-men.html</a></li>
                                <li><strong>使用ツール</strong> <p>Photoshop / VSCode</p></li>
                                <li><strong>使用言語</strong> <p>HTML5 / CSS3 / Javascript</p></li>
                                <li><strong>詳細</strong> </li>
                            </ul>
                        </div>
                    </div>

                </div> )
            )
    }
    export  const ModalThree = ({ isOpen, hideModal }) =>{
        return (
            isOpen && (  
                <div className="modal_area">
                <p>modal3</p>
                <div className="modal_closeBtn" onClick={hideModal}></div>
            </div> )
            )
    }
