import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
// import speech from "react-speech"

const Input = () => {
  const [title, setTitle] = useState("");
  const onClick = () => {
    if (!title) {
      toast.error("Please Provide name");
      return;
    }
    const msg = new SpeechSynthesisUtterance();
    msg.text = title;
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
        <h1 className="text-white text-5xl mb-5 font-bold text-center">
          Enter Text
        </h1>
        <input
          type="text"
          value={title}
          className="w-[30vw] outline-none px-2 py-2.5 border text-white bg-transparent"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          id="title"
        />
        <button
          className="mt-4 bg-purple-700 border border-purple-700 rounded-xl px-7 py-3 outline-none text-white hover:bg-gray-200 hover:text-purple-700"
          onClick={onClick}
        >
          Text
        </button>
      </div>
    </div>
  );
};

export default Input;
