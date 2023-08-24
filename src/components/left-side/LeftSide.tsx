import React from 'react';
import './index.css';
import Search from './search/Search';

const LeftSide: React.FC = () => {
  return (
    <div className="left-side-cover">
        <Search/>
    </div>
  );
}

export default LeftSide;