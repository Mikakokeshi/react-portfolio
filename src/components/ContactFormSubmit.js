import React from 'react'

const ContactFormSubmit = () => {
    return (
        <>
        <ul className="form_step">
            <li className="step1">入力</li>
            <li className="step2">確認</li>
            <li className="step3 active">完了</li>
        </ul>
        <div className="confirm_txt">
            <h3>送信が完了いたしました。</h3>
            <p>お問い合わせいただきありがとうございました。<br/><br/>確認のため、お客様に自動返信メールをお送りしております。<br/>もしメールが到着しなかった場合は、入力していただいたメールアドレスが<br/>間違っている可能性があります。<br/><br/>お問い合わせいただいた内容につきましては、近日中にお返事させていただきます。</p>
        </div>
        <a href="./" className="backToTop">TOPページへ戻る</a>

        </>
    )
}

export default ContactFormSubmit
