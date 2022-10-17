import React, { useState } from 'react'
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';


function Log() {

    const [signUpModal, setSignUpModal] = useState(true);
    const [signInModal, setSignInModal] = useState(false);
    const handeModals = (e) => {
        if(e.target.id === 'register'){
            setSignInModal(false)
            setSignUpModal(true)
        } else if(e.target.id === 'login'){
            setSignInModal(true)
            setSignUpModal(false)
        }
    }

  return (
    <div className='connection-form'>
    <div className='form-container'>
        <ul className='ul-form'>
        <li onClick={handeModals} id='register'
        className={signUpModal ? "active-btn" : null }>S'inscrire</li>
        <li onClick={handeModals} id='login'
        className={signInModal ? "active-btn" : null}>Se connecter</li>
        </ul>
        {signUpModal && <SignUpForm/>}
        {signInModal && <SignInForm/>}

    </div>   
    </div>
  )
}

export default Log