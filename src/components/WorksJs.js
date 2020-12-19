import React from 'react'
import portfolio1 from '../assets/img/react_todo.jpg'
import portfolio2 from '../assets/img/react_covid19.jpg'
import portfolio3 from '../assets/img/react_quiz.jpg'

const WorksJs = ({openModal, showModal, setShowModal}) => {
    return (
        <div className="works_js">
            <ul className="works_list">
                <li onClick={openModal} className="works_item">
                    <div className="works_img_wrap"><img className="works_img" src={portfolio1} alt="todo"/></div> 
                    <p className="works_txt">TODOアプリ<br/>(React)</p>
                </li>
                <li onClick={openModal} className="works_item">
                    <div className="works_img_wrap"><img className="works_img" src={portfolio2} alt="コロナトラッカー"/></div> 
                    <p className="works_txt">コロナトラッカー<br/>（React, Chart js, Material-UI）</p>
                </li>
                <li onClick={openModal} className="works_item">
                    <div className="works_img_wrap"><img className="works_img" src={portfolio3} alt="クイズアプリ"/></div> 
                    <p className="works_txt">クイズアプリ<br/>（React, Material-UI）</p>
                </li>
            </ul>     
        </div>
    )
}

export default WorksJs
