import React, {useState} from 'react';
import {db} from '../firebase';
import ContactFormInput from './ContactFormInput';
import ContactFormConfirm from './ContactFormConfirm';
import ContactFormSubmit from './ContactFormSubmit';
import emailjs from 'emailjs-com';
import {useSelector, useDispatch} from 'react-redux';
import {addStep} from '../redux/actions';

const ContactForm = () => {
     const step = useSelector(state => state.step)
     const dispatch = useDispatch()

    const [lastName, setLastName] = useState("")
    const [firstName, setFirstName] = useState("")
    const [company, setCompany] = useState("")
    const [department, setDepartment] = useState("")
    const [email, setEmail] = useState("")
    const [tel, setTel] = useState("")
    const [message, setMessage] = useState("")

    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(addStep())

        //自動メール送信
        emailjs.sendForm('gmail', 'template_3kb3a5n',  e.target, 'user_UdjsOUw7AlzPu7723mXQb')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        console.log(e.target)

        //firebase に追加
        db.collection('contacts')
        .add({ 
            lastName: lastName,
            firstName: firstName,
            company: company,
            department: department,
            email: email,
            tel: tel,
            message: message,
        })
        .then(() => {
            alert("message has been submitted ")
        })
        .catch(error => {
            alert(error.message)
        })

        e.target.reset()
    }
    console.log(step)
        switch(step) {
            case 1 : 
                return  <ContactFormInput   lastName={lastName} setLastName={setLastName}
                                            firstName={firstName} setFirstName={setFirstName}
                                            company={company} setCompany={setCompany}
                                            department={department} setDepartment={setDepartment}
                                            email={email} setEmail={setEmail}
                                            tel={tel} setTel={setTel}
                                            message={message} setMessage={setMessage}
                                            step={step} 
                        /> ;
            case 2 :
                return <ContactFormConfirm handleOnSubmit={handleOnSubmit} 
                                            lastName={lastName} setLastName={setLastName}
                                            firstName={firstName} setFirstName={setFirstName}
                                            company={company} setCompany={setCompany}
                                            department={department} setDepartment={setDepartment}
                                            email={email} setEmail={setEmail}
                                            tel={tel} setTel={setTel}
                                            message={message} setMessage={setMessage}
                                            step={step} 
                        /> ;
            case 3 :
                return <ContactFormSubmit 
                    step={step} 
                />
            default : 
                return <ContactFormInput    lastName={lastName} setLastName={setLastName}
                                            firstName={firstName} setFirstName={setFirstName}
                                            company={company} setCompany={setCompany}
                                            department={department} setDepartment={setDepartment}
                                            email={email} setEmail={setEmail}
                                            tel={tel} setTel={setTel}
                                            message={message} setMessage={setMessage}
                                            step={step} 
                        /> ;
        }


 
}

export default ContactForm
