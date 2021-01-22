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
                                <li><strong>使用言語</strong> <p>HTML5 / CSS3 / React</p></li>
                                <li><strong>詳細</strong><p>Taskの入力欄にTODOを記載しSubmitをボタンを押して追加すると、下にリストとして表示される。また、チェック欄にチェックすると打消し線が表示される。右の×ボタンでリストを削除することも出来る。</p></li>
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
                                <li><strong>使用言語</strong> <p>HTML5 / CSS3 / React</p></li>
                                <li><strong>詳細</strong><p>世界各国のコロナの感染者数・回復者数・志望者数がグラフで表示されるアプリ。最初に表示される折れ線グラフは世界の感染者数、セレクトボックスで国別で選択し各国の感染者数・回復者数・死亡者数を確認できる。</p></li>
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
                                <li><strong>使用言語</strong> <p>HTML5 / CSS3 / React</p></li>
                                <li><strong>詳細</strong><p>UI/UXの基礎知識10問を4択形式で表示。最後にクイズの正答数・正答率が表示される。</p></li>
                            </ul>
                        </div>
                    </div>

                </div> )
            )
    }

