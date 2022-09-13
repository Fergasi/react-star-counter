import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className='card-header'>
      <div>
        <img src='https://static.vecteezy.com/system/resources/previews/005/484/042/original/dog-logo-illustration-free-vector.jpg' />
      </div>
      <div className='menu'>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </div>
  );
};

export default Header;
