import React from 'react'

const ContactFormConfirm = (props) => {
    return (
        <>
        <ul className="form_step">
            <li className="step1">入力</li>
            <li className="step2 active">確認</li>
            <li className="step3">完了</li>
        </ul>
        <form className="form confirm" onSubmit={(e) => props.handleOnSubmit(e)}>
        <div className="form_wrap">
            <label htmlFor="">お名前</label>
            <div className="form_name"> 
                <div className="form_lastname">
                    <input required defaultValue={props.lastName} type="text"  name="lastName" placeholder={props.lastName}/>
                </div> 
                <div className="form_firstname">
                     <input required defaultValue={props.firstName} type="text" name="firstName" placeholder={props.firstName}/>
                </div> 
            </div>
            <label htmlFor="">会社名</label>
            <input required defaultValue={props.company} type="text" name="company" placeholder={props.company}/>
            <label htmlFor="">部署名</label>
            <input  defaultValue={props.department} type="text" name="department" placeholder={props.department}/>
            <label htmlFor="">メールアドレス</label>
            <input required defaultValue={props.email} type="email" name="email" placeholder={props.email}/>
            <label htmlFor="">電話番号</label>
            <input required defaultValue={props.tel} type="text" name="tel" placeholder={props.tel} />
            <label htmlFor="">お問い合わせ内容</label>
            <textarea defaultValue={props.message} name="message" id="" cols="30" rows="10" placeholder={props.message}></textarea>
        </div>

        <button type="submit">送信する</button>
    </form>
    </>
    )
}

export default ContactFormConfirm
