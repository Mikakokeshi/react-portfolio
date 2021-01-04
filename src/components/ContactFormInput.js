import React from 'react'
import { useForm } from "react-hook-form";
import { useDispatch} from 'react-redux';
import {addStep} from '../redux/actions';

const ContactFormInput = (props) => {
    const dispatch = useDispatch()
    const { register, errors, handleSubmit } = useForm();

    const handleOnConfirm = (e) => {
        dispatch(addStep())
    }

    console.log(props.lastName)
    return (
        <>
        <ul className="form_step">
            <li className="step1 active">入力</li>
            <li className="step2">確認</li>
            <li className="step3">完了</li>
        </ul>
        <form className="form input" onSubmit={handleSubmit(handleOnConfirm)}>
        <div className="form_wrap">
            <label className="required" htmlFor="lastName">お名前</label>
            <div className="form_name"> 
                <div className="form_lastname">
                    <input defaultValue={props.lastName} onChange={(e) => props.setLastName(e.target.value)} 
                            type="text"  name="lastName" placeholder="姓"  ref={register({ required: true })} /> 
                            {errors.lastName && <span className='error'>名字は必須です</span>}
                </div>
                <div className="form_firstname">
                    <input defaultValue={props.firstName} onChange={(e) => props.setFirstName(e.target.value)} 
                            type="text" name="firstName" placeholder="名"  ref={register({ required: true })} />
                            {errors.firstName && <span className='error'>名前は必須です</span>}                </div>                        
            </div>
            <label className="required" htmlFor="company">会社名</label>
            <input defaultValue={props.company} onChange={(e) => props.setCompany(e.target.value)} 
                    type="text" name="company" placeholder="〇〇会社" ref={register({ required: true })} />
                    {errors.company && <span className='error'>会社名は必須です</span>}  
            <label htmlFor="department">部署名</label>
            <input  defaultValue={props.department} onChange={(e) => props.setDepartment(e.target.value)} 
                    type="text" name="department" placeholder="〇〇部署"/>
            <label className="required" htmlFor="email">メールアドレス</label>
            <input defaultValue={props.email} onChange={(e) => props.setEmail(e.target.value)} 
                    type="email" name="email" placeholder="***@email.com"
                    ref={register({
                        required: true,
                        maxLength: 60,
                        pattern: {
                            value: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                            message: 'メールアドレスの形式が不正です。',
                           },
                        })}
                    />
                    {errors.email && <span className='error'>{errors.email.message}</span>}

            <label className="required" htmlFor="tel">電話番号</label>
            <input defaultValue={props.tel} onChange={(e) => props.setTel(e.target.value)} 
                    type="tel" name="tel" placeholder="00-0000-0000" 
                    ref={register({required: true, minLength: 6, maxLength: 12})} />
                    {errors.tel && <span className='error'>電話番号は必須です</span>}  

            <label className="required" htmlFor="message">お問い合わせ内容</label>
            <textarea defaultValue={props.message}  onChange={(e) => props.setMessage(e.target.value)} 
                    name="message" id="" cols="30" rows="10" placeholder="ご用件をお書きください" ref={register({ required: true })}></textarea>
                    {errors.message && <span className='error'>お問い合わせ内容は必須です</span>}  

        </div>

        <button type="submit">確認画面へ</button>
    </form>
    </>
    )
}

export default ContactFormInput
