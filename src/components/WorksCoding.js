import React from 'react'
import portfolio1 from '../assets/img/deonatulle.jpg'
import portfolio2 from '../assets/img/steins.jpg'
import portfolio3 from '../assets/img/kurumanomori.jpg'
import {ModalOne, ModalTwo, ModalThree} from './Modal';
import {ModalContext, ModalProvider, ModalRoot } from 'react-multi-modal';

const WorksCoding = () => {      
      
        function showModalOne(showModal) {
          showModal({
            component: ModalOne,
          });
        }
        function showModalTwo(showModal) {
          showModal({
            component: ModalTwo
          });
        }
        function showModalThree(showModal) {
          showModal({
            component: ModalThree
          });
        }
      
        return (
            <ModalProvider> 
                  <ModalContext.Consumer>
                    {({ showModal, hideModal }) => (
                        <div className="works_coding">
                            <ul className="works_list">
                                <li onClick={() => showModalOne(showModal)} className="works_item">
                                    <div className="works_img_wrap"><img className="works_img" src={portfolio1} alt="deonatulle"/></div> 
                                    <p className="works_txt">デオナチュレ</p>
                                </li>
                                <li onClick={() => showModalTwo(showModal)}  className="works_item">
                                    <div className="works_img_wrap"><img className="works_img" src={portfolio2} alt="steinsgate0"/></div> 
                                    <p className="works_txt">シュタインズ・ゲート</p>
                                </li>
                                <li onClick={() => showModalThree(showModal)} className="works_item">
                                    <div className="works_img_wrap"><img className="works_img" src={portfolio3} alt="kurumanomori"/></div> 
                                    <p className="works_txt">車の森</p>
                                </li>
                            </ul>
                            <ModalRoot hideModal={hideModal} />
                        </div>
                    )}
                </ModalContext.Consumer>
            </ModalProvider>
        );
   
}

export default WorksCoding
