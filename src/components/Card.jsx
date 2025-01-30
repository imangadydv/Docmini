import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { IoDownloadOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

const Card = ({data,reference}) => {
  return (
    <>
        <motion.div drag dragConstraints={reference} whileDrag={{scale:1.3}} className="relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden">
          <FaRegFileAlt />
          <p className="text-sm leading-tight mt-5 font-semibold ">
            {data.description}
          </p>
          <div className="footer absolute bottom-0  w-full    left-0 ">
            <div className="flex justify-between py-3 px-8 items-center mb-3">
            <h5>{data.filesize}</h5>
            <span className="w-7 h-5 bg-zinc-200 rounded-full flex justify-center items-center">
                {data.close ? <IoClose /> : <IoDownloadOutline size=".7em" color="#ffff"/>}
            </span>
            </div>
            {
                data.tag.isopen && <div className={`tag w-full py-4 flex justify-center items-center ${data.tag.tagColor}`}>
                <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
                </div>
            }   
          </div>
        </motion.div>
    </>
  );
};

export default Card;
