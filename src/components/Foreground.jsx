import React from "react";
import Card from "./Card";

const Foreground = () => {

    const ref = React.useRef(null);
  const data = [
    {
      description: "I am doing fine with the project",
      filesize: ".7mb",
      close: true,
      tag: { isopen: true, tagTitle: "Download Now" ,tagColor:"bg-green-600"},
    },
    {
        description: "Its a great day to start the project",
        filesize: ".7mb",
        close: false,
        tag: { isopen: false, tagTitle: "Download Now" ,tagColor:"bg-sky-200"},
      },
      {
        description: "I will become a founder of a company",
        filesize: ".7mb",
        close: true,
        tag: { isopen: true, tagTitle: "Download Now" ,tagColor:"bg-sky-600"},
      },
  ];

  return (
    <>
      <div>
        <div ref={ref} className="fixed w-full h-full z-[3] top-0 left-0 flex gap-10 flex-wrap p-5">

        {
            data.map((item,index)=>(
              <Card data={item} reference={ref}/>
            ))
        }

          
        </div>
      </div>
    </>
  );
};

export default Foreground;
