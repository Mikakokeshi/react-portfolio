import React, {useEffect, useState } from 'react';
import portfolio1 from '../assets/img/react_todo.jpg';
import portfolio1_2 from '../assets/img/react_todo_2.png';
import portfolio1_3 from '../assets/img/react_todo_3.png';
import portfolio2 from '../assets/img//react_covid19.jpg';
import portfolio2_2 from '../assets/img/react_covid19_2.png';
import portfolio3 from '../assets/img/react_quiz.jpg';
import portfolio3_2 from '../assets/img/react_quiz_2.png';
import portfolio3_3 from '../assets/img/react_quiz_3.png';
import Swiper from "react-id-swiper"
import 'swiper/css/swiper.css'

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
                        <div className="head">Todoアプリ</div>
                        <div className="modal_content">
                            <Swiper {...gallerySwiperParams} > 
                                <div><img src={portfolio1} alt="Todoアプリ"/></div>
                                <div><img src={portfolio1_2} alt="Todoアプリ"/></div>
                                <div><img src={portfolio1_3} alt="Todoアプリ"/></div>
                            </Swiper>
                            <Swiper {...thumbnailSwiperParams}>
                                <div className="thumbnail_slider"><img src={portfolio1} alt="Todoアプリ"/></div>
                                <div className="thumbnail_slider"><img src={portfolio1_2} alt="Todoアプリ"/></div>
                                <div className="thumbnail_slider"><img src={portfolio1_3} alt="Todoアプリ"/></div>
                            </Swiper>
                            <ul className="modal_txt">
                                <li><strong>URL</strong> <a rel="noreferrer" target="_blank" href="https://react-todo-list20201121.herokuapp.com/">https://react-todo-list20201121.herokuapp.com/</a></li>
                                <li><strong>使用ツール</strong> <p>Photoshop / VSCode</p></li>
                                <li><strong>使用言語</strong> <p>HTML5 / CSS3 / Javascript</p></li>
                                <li><strong>詳細</strong> </li>
                            </ul>
                        </div>
                    </div>

                </div> )
            )
    }
    
    export const ModalTwo = ({  isOpen, hideModal}) =>{
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
            spaceBetween: 45,
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
                        <div className="head">コロナトラッカー</div>
                        <div className="modal_content">
                            <Swiper {...gallerySwiperParams} > 
                                <div><img src={portfolio2} alt="コロナトラッカー"/></div>
                                <div><img src={portfolio2_2} alt="コロナトラッカー"/></div>
                            </Swiper>
                            <Swiper {...thumbnailSwiperParams}>
                                <div className="thumbnail_slider"><img src={portfolio2} alt="コロナトラッカー"/></div>
                                <div className="thumbnail_slider"><img src={portfolio2_2} alt="コロナトラッカー"/></div>
                            </Swiper>
                            <ul className="modal_txt">
                                <li><strong>URL</strong> <a rel="noreferrer" target="_blank" href="https://react-covid19tracker.herokuapp.com/">https://react-covid19tracker.herokuapp.com/</a></li>
                                <li><strong>使用ツール</strong> <p>Photoshop / VSCode</p></li>
                                <li><strong>使用言語</strong> <p>HTML5 / CSS3 / Javascript</p></li>
                                <li><strong>詳細</strong> </li>
                            </ul>
                        </div>
                    </div>

                </div> )
            )
    }
    
    export  const ModalThree = ({  isOpen, hideModal}) =>{
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
                        <div className="head">クイズアプリ</div>
                        <div className="modal_content">
                            <Swiper {...gallerySwiperParams} > 
                                <div><img src={portfolio3} alt="クイズアプリ"/></div>
                                <div><img src={portfolio3_2} alt="クイズアプリ"/></div>
                                <div><img src={portfolio3_3} alt="クイズアプリ"/></div>
                            </Swiper>
                            <Swiper {...thumbnailSwiperParams}>
                                <div className="thumbnail_slider"><img src={portfolio3} alt="クイズアプリ"/></div>
                                <div className="thumbnail_slider"><img src={portfolio3_2} alt="クイズアプリ"/></div>
                                <div className="thumbnail_slider"><img src={portfolio3_3} alt="クイズアプリ"/></div>
                            </Swiper>
                            <ul className="modal_txt">
                                <li><strong>URL</strong> <a rel="noreferrer" target="_blank" href="https://react-quiz-app2020.herokuapp.com/">https://react-quiz-app2020.herokuapp.com/</a></li>
                                <li><strong>使用ツール</strong> <p>Photoshop / VSCode</p></li>
                                <li><strong>使用言語</strong> <p>HTML5 / CSS3 / Javascript</p></li>
                                <li><strong>詳細</strong> </li>
                            </ul>
                        </div>
                    </div>

                </div> )
            )
    }

