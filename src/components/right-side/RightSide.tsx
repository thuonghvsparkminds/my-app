import React from 'react';
import './index.css';
import NonLogin from './non-login/NonLogin';

const RightSide: React.FC = () => {
  return (
    <div className="right-side-cover">
        <NonLogin/>
    </div>
  );
}

export default RightSide;