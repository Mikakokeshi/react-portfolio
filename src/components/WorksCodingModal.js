import React, {useEffect, useState } from 'react';
import portfolio1 from '../assets/img/deonatulle.jpg';
import portfolio1_2 from '../assets/img/deonatulle_2.jpg';
import portfolio1_3 from '../assets/img/deonatulle_3.jpg';
import portfolio2 from '../assets/img/steins.jpg';
import portfolio2_2 from '../assets/img/steins_2.png';
import portfolio2_3 from '../assets/img/steins_3.png';
import portfolio3 from '../assets/img/kurumanomori.jpg';
import portfolio3_2 from '../assets/img/kurumanomori_2.png';
import portfolio3_3 from '../assets/img/kurumanomori_3.png';
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
            slidesPerView: 7,
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
                <div className="modal_area modal1">
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
                                <li><strong>詳細</strong><p>制汗剤の商品のPRページ。PC・SPのレスポンシブ対応。スタイルはSassで記述。動的部分はモーダルの開閉・Topへ戻るボタン等。</p></li>
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
                        <div className="head">シュタインズ・ゲート</div>
                        <div className="modal_content">
                            <Swiper {...gallerySwiperParams} > 
                                <div><img src={portfolio2} alt="シュタインズ・ゲート"/></div>
                                <div><img src={portfolio2_2} alt="シュタインズ・ゲート"/></div>
                                <div><img src={portfolio2_3} alt="シュタインズ・ゲート"/></div>
                            </Swiper>
                            <Swiper {...thumbnailSwiperParams}>
                                <div className="thumbnail_slider"><img src={portfolio2} alt="シュタインズ・ゲート"/></div>
                                <div className="thumbnail_slider"><img src={portfolio2_2} alt="シュタインズ・ゲート"/></div>
                                <div className="thumbnail_slider"><img src={portfolio2_3} alt="シュタインズ・ゲート"/></div>
                            </Swiper>
                            <ul className="modal_txt">
                                <li><strong>URL</strong> <a rel="noreferrer" target="_blank" href="http://steinsgate0-anime.com/">http://steinsgate0-anime.com/</a></li>
                                <li><strong>使用ツール</strong> <p>Photoshop / VSCode</p></li>
                                <li><strong>使用言語</strong> <p>HTML5 / CSS3 / Javascript</p></li>
                                <li><strong>詳細</strong><p>アニメ公式サイト。PCのフロント対応。スタイルはSassで記述。動的部分は再生ボタンを押すと画面一杯に動画が自動再生。また、Storyエリアでコンテンツの下にあるセレクトボタンをクリックするとコンテンツが切り替わる等。</p></li>
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
                        <div className="head">車の森</div>
                        <div className="modal_content">
                            <Swiper {...gallerySwiperParams} > 
                                <div><img src={portfolio3} alt="車の森"/></div>
                                <div><img src={portfolio3_2} alt="車の森"/></div>
                                <div><img src={portfolio3_3} alt="車の森"/></div>
                            </Swiper>
                            <Swiper {...thumbnailSwiperParams}>
                                <div className="thumbnail_slider"><img src={portfolio3} alt="車の森"/></div>
                                <div className="thumbnail_slider"><img src={portfolio3_2} alt="車の森"/></div>
                                <div className="thumbnail_slider"><img src={portfolio3_3} alt="車の森"/></div>
                            </Swiper>
                            <ul className="modal_txt">
                                <li><strong>URL</strong> <a rel="noreferrer" target="_blank" href="https://kurumanomori.com/">https://kurumanomori.com/</a></li>
                                <li><strong>使用ツール</strong> <p>Photoshop / VSCode</p></li>
                                <li><strong>使用言語</strong> <p>HTML5 / CSS3 / Javascript</p></li>
                                <li><strong>詳細</strong><p>自動車販売専門店公式サイト。スタイルはSassで記述。動的な部分はメインビジュアルの画像とその下の車の画像はスライダーを実装。また車の画像をクリックすると背景がオレンジ色に変わり、ブランド名、メーカー名、もっと見るボタンが出現する実装をしている。</p></li>
                            </ul>
                        </div>
                    </div>

                </div> )
            )
    }

