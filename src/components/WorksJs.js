import React from 'react'
import portfolio1 from '../assets/img/react_todo.jpg'
import portfolio2 from '../assets/img/react_covid19.jpg'
import portfolio3 from '../assets/img/react_quiz.jpg'
import {ModalOne,ModalTwo, ModalThree} from './WorksJsModal';
import {ModalContext, ModalProvider, ModalRoot } from 'react-multi-modal';

const WorksJs = ({openModal, showModal, setShowModal}) => {

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

      const modalList = [
        {func: showModalOne, label: "Todoアプリ", portfolioImg: portfolio1 },
        {func: showModalTwo, label: "コロナトラッカー", portfolioImg: portfolio2},
        {func: showModalThree, label: "クイズアプリ", portfolioImg: portfolio3}
    ];
    
    return (
        <ModalProvider> 
        <ModalContext.Consumer>
          {({ showModal, hideModal }) => (
              <div className="works_coding">
                  <ul className="works_list">
                  {modalList.map( (modal, index) =>(
                      <li key={index} onClick={() => modal.func(showModal)} className="works_item">
                          <div className="works_img_wrap"><img className="works_img" src={modal.portfolioImg} alt="deonatulle"/></div> 
                          <p className="works_txt">{modal.label}</p>
                      </li>
                       ))}
                  </ul>
                  <ModalRoot  hideModal={hideModal} showModal={showModal} />
              </div>
          )}
      </ModalContext.Consumer>
  </ModalProvider>
    )
}

export default WorksJs
