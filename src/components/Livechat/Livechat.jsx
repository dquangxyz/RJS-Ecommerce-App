import React, { useState } from 'react'

import './Livechat.css'

const Livechat = () => {
    // local state
    const [showChat, setShowChat] = useState(false)

    //handler functions
    const handlerClickIcon = () => {
        setShowChat(prevState => !prevState)
    }
    
  return (
    <div className='livechat-container'>
        <div className='livechat-button' onClick={handlerClickIcon}>
            <i class="fab fa-facebook-messenger"></i>
        </div>

        { showChat && 
        <div className='livechat-window'>
            <div className='livechat-window-header'>
                <div className='livechat-head'>Customer Support</div>
                <div className='livechat-chatapp'>Let's Chat App</div>
            </div>
            <div className='livechat-window-body'>
                <p className='livechat-message-line'>
                    <p className='livechat-from-user'>Hi</p>
                </p>
                <p className='livechat-message-line'>
                    <p className='livechat-from-user'>How to view products?</p>
                </p>
                <p className='livechat-message-line'>
                    <i class="fas fa-user-circle"></i><p className='livechat-from-admin'>ADMIN: Hello</p>
                </p>
                <p className='livechat-message-line'>
                    <i class="fas fa-user-circle"></i><p className='livechat-from-admin'>ADMIN: You can click on Shop to view our products</p>
                </p>
            </div>
            <div className='livechat-window-footer'>
                <span className='livechat-ava'><i class="fas fa-user-circle"></i></span>
                <span className='livechat-input'><input placeholder='Enter Message!' /></span>
                <span className='livechat-icon'><i class="fas fa-paperclip"></i></span>
                <span className='livechat-icon'><i class="fas fa-smile"></i></span>
                <span className='livechat-icon send'><i class="fab fa-telegram"></i></span>
            </div>
        </div>
        }   

    </div>
  )
}

export default Livechat