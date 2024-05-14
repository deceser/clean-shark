import { useState } from 'react';
import Banner from './banner';
import Button from '../ui/PrimaryBtn';

import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone } from 'react-icons/fa';

// import all animation
import { motion } from 'framer-motion';
import { container, item, set } from '../../utils/motion.js';

const faq = () => {
  return (
    <motion.section
      variants={container}
      {...set}
      id="KONTAKT"
      className="grid place-items-center px-4 my-[7rem]">
      <motion.h1
        variants={item(0.5)}
        className="heading text-center">
        SKONTAKTUJ SIĘ Z NAMI
      </motion.h1>
      <motion.p
        variants={item(0.9)}
        className="paraf text-center">
        <div className="flex-col">
          <a
            href="tel:+48787830865"
            target="_blank"
            className=" flex justify-center">
            <FaPhone size={25} />
          </a>
          Zadzwoń do nas
          <a
            href="tel:+48787830865"
            target="_blank"
            className=" flex text-body">
            +48787830865
          </a>
        </div>
      </motion.p>
      <motion.p
        variants={item(0.9)}
        className="paraf text-center">
        <div className="flex-col">
          <a
            href="https://wa.me/+48787830865"
            target="_blank"
            className="flex justify-center">
            <FaWhatsapp size={25} />
          </a>
          Whats-App
          <a
            href="https://wa.me/+48787830865"
            target="_blank"
            className=" flex text-body">
            +48787830865
          </a>
        </div>
      </motion.p>
      <motion.p
        variants={item(0.9)}
        className="paraf text-center">
        <div className="flex-col">
          <a
            href="https://www.instagram.com/akula_chistotypl?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            className="flex justify-center">
            <FaInstagram size={30} />
          </a>
          <a
            href="https://wa.me/+48787830865"
            target="_blank"
            className=" flex text-body">
            Instagram
          </a>
        </div>
      </motion.p>

      <motion.p
        variants={item(0.9)}
        className="paraf text-center">
        <div className="flex-col">
          <a
            href="https://www.facebook.com/profile.php?id=100090053456809&mibextid=LQQJ4d&rdid=7GBoQhXqVgm0L4Uf&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1sQKu1u1iB8QaAJW%2F%3Fmibextid%3DLQQJ4d"
            target="_blank"
            className="flex justify-center">
            <FaFacebook size={30} />
          </a>
          <a
            href="https://wa.me/+48787830865"
            target="_blank"
            className=" flex text-body">
            Facebook
          </a>
        </div>
      </motion.p>
    </motion.section>
  );
};

export default faq;
