import React from "react";
import arrow from "../../assets/icon/icon-arrow.svg"

const banner = ({ toggle, faq, index}) => {
  return (
    <div onClick={() => toggle(index)} className="cursor-pointer border-t sm:w-[33.75rem]">
    <div className="flex items-center gap-4 justify-between ">
    <h1 className="font-medium my-4 hover:text-red-400 text-xl smooth">{faq.question}</h1>
    <img src={arrow} alt="arrow" className={(faq.open ? "rotate-180" : "rotate-0") + " smooth"}/>
    </div>
      <p className={(faq.open ? "h-full" : "hidden") + " overflow-y-hidden text-grayfishblue mb-4 max-w-[47ch]"}>{faq.answer}</p>
    </div>
  );
};



export default banner;

