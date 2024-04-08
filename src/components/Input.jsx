import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
// import speech from "react-speech"

const Input = () => {
  const [title, setTitle] = useState("");
    const [selectLanguage, setSelectLanguage] = useState(null)

    let languages = []

  useEffect(() => {
    languages  = window.speechSynthesis.getVoices();
  }, []);

  const onClick = () => {
    if (!title) {
      toast.error("Please Provide name");
      return;
    }
    if (!selectLanguage) {
      toast.error("Please Select A language");
      return;
    }
    const msg = new SpeechSynthesisUtterance();
    msg.text = title;
    msg.lang = "hi-IN";
    // msg.voice = "Google हिन्दी"
    window.speechSynthesis.speak(msg);
  };

  return (
    <div className="bg-gray-600 h-[100vh] w-[100vw] flex justify-center items-center flex-col">
      <div>
        <h1 className="text-white text-5xl mb-5 font-bold text-center">
          Text-to speech for diabled individuals
        </h1>
      </div>
      <div className="flex justify-center items-center flex-col h-full">
        <textarea
          cols={"50"}
          rows={"4"}
          type="text"
          value={title}
          className="outline-none px-2 py-2.5 border text-white bg-transparent"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          id="title"
        />
        <h1 className="text-white text-5xl my-5 font-bold text-center">
          Available Languages
        </h1>
        <div className="grid grid-cols-6 grid-rows-2">
          {languages &&
            languages.map((item, index) => (
              <div
                className="bg-transparent text-white border border-purple-400 px-3 h-[12vh]  mx-2 my-2 cursor-pointer flex flex-col justify-center items-center"
                key={index}
                onClick={()=>{
                    setSelectLanguage(item);
                }}
              >
                <p>Name - {item.name}</p>
                <p>Language Code - {item.lang}</p>
              </div>
            ))}
        </div>
        <button
          className="mt-4 bg-purple-700 border border-purple-700 rounded-xl px-7 py-3 outline-none text-white hover:bg-gray-200 hover:text-purple-700"
          onClick={onClick}
        >
          Speak
        </button>
      </div>
    </div>
  );
};

export default Input;
