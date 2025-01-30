import React, { useState, useRef } from "react";
import { motion } from "framer-motion"; 
import Card from "./Card";

const Foreground = () => {
  const ref = useRef(null);

  const initialData = [
    {
      description: "I am doing fine with the project",
      filesize: ".7mb",
      close: true,
      tag: { isopen: true, tagTitle: "Download Now", tagColor: "bg-green-600" },
    },
    {
      description: "Its a great day to start the project",
      filesize: ".7mb",
      close: false,
      tag: { isopen: false, tagTitle: "Download Now", tagColor: "bg-sky-200" },
    },
    {
      description: "I will become a founder of a company",
      filesize: ".7mb",
      close: true,
      tag: { isopen: true, tagTitle: "Download Now", tagColor: "bg-sky-600" },
    },
  ];

  const [data, setData] = useState(initialData);

  const randomColor = () => {
    const colors = [
      "bg-red-500", "bg-blue-500", "bg-yellow-500", "bg-green-500",
      "bg-purple-500", "bg-pink-500", "bg-indigo-500", "bg-teal-500"
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const handleAddMore = () => {
    const newItem = {
      description: "New description added",
      filesize: ".7mb",
      close: true,
      tag: { isopen: true, tagTitle: "Download Now", tagColor: randomColor() },
    };
    setData((prevData) => [...prevData, newItem]);
  };

  const handleRemoveOne = () => {
    setData((prevData) => prevData.slice(0, -1));
  };

  return (
    <div
      ref={ref}
      className="fixed w-full h-full z-[3] top-0 left-0 flex gap-10 flex-wrap p-5"
    >
      {data.map((item, index) => (
        <motion.div
          key={index}
          drag
          dragConstraints={{ top: 0, left: 0, right: window.innerWidth, bottom: window.innerHeight }}
          className="cursor-pointer"
        >
          <Card data={item} reference={ref} />
        </motion.div>
      ))}

      <motion.button drag
        onClick={handleAddMore}
        className="p-2 bg-blue-500 text-white rounded-md mt-2 h-20 w-20"
        whileHover={{ scale: 1.1 }}
        
      >
        Add More
      </motion.button>

      <motion.button drag
      
        onClick={handleRemoveOne}
        className="p-2 bg-red-500 text-white rounded-md mt-2 h-20 w-20"
        whileHover={{ scale: 1.1 }}
      >
        Remove One
      </motion.button>
    </div>
  );
};

export default Foreground;
