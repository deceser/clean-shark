import React from 'react';
import facebook from '../../assets/icon/icon-facebook.svg';

import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone } from 'react-icons/fa';

const social = ({ hidden }) => {
  return (
    <div className={hidden + ' flex items-center gap-8'}>
      <a
        href="https://www.instagram.com/akula_chistotypl?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
        target="_blank">
        <FaInstagram size={30} />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100090053456809&mibextid=LQQJ4d&rdid=7GBoQhXqVgm0L4Uf&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1sQKu1u1iB8QaAJW%2F%3Fmibextid%3DLQQJ4d"
        target="_blank">
        <FaFacebook size={30} />
      </a>
      <a
        href="https://wa.me/+48787830865"
        target="_blank">
        <FaWhatsapp size={30} />
      </a>

      <a href="tel:+48787830865">
        <FaPhone size={30} />
      </a>
    </div>
  );
};

export default social;
