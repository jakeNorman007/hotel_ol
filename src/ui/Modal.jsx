import React from "react";
import CreateRoomForm from "../features/rooms/CreateRoomForm";
import { HiXMark } from "react-icons/hi2";


function Modal({ children, onClose }) {

  return (
    <>
      <div className="fixed w-full h-screen backdrop-blur-sm contrast-50 transition-all duration-[0.5s] left-0 top-0"></div>
      <div
        className="fixed z-[1000] -translate-y-2/4 -translate-x-2/4 border-2 border-blue-300 bg-slate-50 rounded-md shadow-sm shadow-black/50 transition-all 
        duration-[0.5s] left-2/4 top-2/4"
      >
      <button className="p-[0.8rem] rounded-md translate-x-[0.8rem] transition-all duration-[0.2s] absolute top-[1.2rem] 
        right-[1.9rem] hover:bg-blue-400 hover:shadow-sm hover:shadow-black/50" onClick={onClose}><HiXMark /></button>
      <div>{ children }</div>
      </div>
    </>
  );
}

export default Modal;
