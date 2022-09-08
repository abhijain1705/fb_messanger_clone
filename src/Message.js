import React, { forwardRef } from 'react';
import './App.css';

const Message = forwardRef(({ userName, message }, ref) => {

  const isUser = userName === message.username;

  return (
    <div ref={ref} className={`bg-[#CFD2CF] !text-left mr-auto shadow-md my-[10px] w-fit p-[10px] ${isUser && 'chatBox'} rounded-[8px] shadow-lg shadow-gray-500/50`}>
      <div className=''>
        <h5 className=''>{isUser ? '' : message.username + ' : '} {message.message}</h5>
      </div>
    </div>
  )
})

export default Message;