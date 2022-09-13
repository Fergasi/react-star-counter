import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const Header = () => {
  return (
    <div className='card-header'>
      <div>
        <img src='https://static.vecteezy.com/system/resources/previews/005/484/042/original/dog-logo-illustration-free-vector.jpg' />
      </div>
      <div className='menu'>
        <FontAwesomeIcon icon={solid("bars")} />
      </div>
    </div>
  );
};

export default Header;
