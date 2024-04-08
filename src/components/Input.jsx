import React, { useState } from "react";
import toast from "react-hot-toast";

const Input = () => {
  const [title, setTitle] = useState("");
  const [selectLanguage, setSelectLanguage] = useState(null);
  const [languages, setLanguages] = useState([]);

  const onClick = (e) => {
    if (!title) {
      toast.error("Please Provide Text");
      return;
    }
    e.preventDefault()
    const msg = new SpeechSynthesisUtterance();
    msg.text = title;
    if (selectLanguage) {
      msg.lang = selectLanguage.lang;
    }
    window.speechSynthesis.speak(msg);
  };

  const getLanguages = () => {
    setLanguages(window.speechSynthesis.getVoices());
  };

  return (
    <div className="bg-gray-600 min-h-[100vh] max-h-full w-[100vw] flex justify-center items-center flex-col overflow-x-hidden">
      <div className="flex justify-center items-center flex-col h-full">
        <h1 className="text-white text-5xl mb-16 font-bold text-center">
          Text-to speech for disabled individuals
        </h1>
        <textarea
          cols={"50"}
          rows={"4"}
          placeholder="Enter Text"
          type="text"
          value={title}
          className="outline-none px-2 py-2.5 border text-white bg-transparent mb-4 md:w-[22rem] lg:w-[24rem] w-[18rem]"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          id="title"
          onKeyDown={(e)=>{
            if(e.code == "Enter"){
                onClick()
                return;
            }
          }}
        />
        <div className="flex justify-center items-center flex-wrap">
          <button
            className="mt-4 bg-purple-700 border border-purple-700 mx-2 rounded-xl px-7 py-3 outline-none text-white hover:bg-gray-200 hover:text-purple-700 "
            onClick={(e)=>{onClick(e)}}
          >
            Speak
          </button>
          <button
            className="mt-4 bg-purple-700 border border-purple-700 mx-2 rounded-xl px-7 py-3 outline-none text-white hover:bg-gray-200 hover:text-purple-700 "
            onClick={getLanguages}
          >
            Select A Specific Language
          </button>
        </div>
        {languages.length > 0 && (
          <h1 className="text-white text-5xl my-5 font-bold text-center">
            Available Languages
          </h1>
        )}
        <div className="w-full flex justify-center flex-wrap">
          {languages.length>0 && languages.map((item, index) => (
            <div
              className={
                `text-white min-w-[20rem] max-w-full border border-purple-400 px-3 h-[12vh]  mx-2 my-2 cursor-pointer flex flex-col justify-center items-center common ${selectLanguage && selectLanguage.name === item.name ? "bg-gray-400" : "bg-transparent"}`
              }
              key={index}
              id={item.name}
              onClick={(e) => {
                e.stopPropagation();
                setSelectLanguage(item);
                toast.success("Language Selected");
              }}
            >
              <p>
                <b>Name</b> -- {item.name}
              </p>
              <p>
                <b>Language Code</b> -- {item.lang}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Input;
