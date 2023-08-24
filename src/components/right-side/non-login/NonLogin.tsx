import React from 'react';
import './index.css';
import notification from '../../../assets/img/notification.png'
import support from '../../../assets/img/support.png'

const NonLogin: React.FC = () => {
  return (
    <div className="non-login-cover">
        <div className="">Login</div>
        <div className="">Register</div>
        <div className="icon"><img src={notification} alt="" /></div>
        <div className="icon"><img src={support} alt="" /></div>
    </div>
  );
}

export default NonLogin;