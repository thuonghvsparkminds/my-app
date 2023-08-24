import React from 'react';
import './index.css'; // Import SCSS file
import logo from '../../assets/img/Vector.png'

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="header">
      <img src={logo} alt="" />
    </header>
  );
}

export default Header;