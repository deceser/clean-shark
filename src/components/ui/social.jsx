import React from 'react';
import facebook from '../../assets/icon/icon-facebook.svg';

import { FaFacebook, FaInstagram, FaTelegram } from 'react-icons/fa';

const social = ({ hidden }) => {
  return (
    <div className={hidden + ' flex items-center gap-8'}>
      <a
        href="https://facebook.com"
        target="_blank"></a>
      <a
        href="https://www.instagram.com/"
        target="_blank">
        <FaInstagram size={30} />
      </a>
      <a
        href="https://t.me/"
        target="_blank">
        <FaTelegram size={30} />
      </a>
      <a
        href="https://www.facebook.com/"
        target="_blank">
        <FaFacebook size={30} />
      </a>
    </div>
  );
};

export default social;
