import React, { cloneElement, createContext, useContext, useState } from "react";
import {useOutsideClick } from "../hooks/useOutsideClick";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";

const ModalContext = createContext();

function Modal({ children }) {
    const[ openName, setOpenName] = useState("");
    const close = () => setOpenName("");
    const open = setOpenName;

    return(
        <ModalContext.Provider value={{ openName, close, open }}>
            { children }
        </ModalContext.Provider>
    );
}

function Open({ children, opens: opensWindowName }) {
    const { open } = useContext(ModalContext);

    return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close); 

  if(name !== openName) return null;

  return createPortal(
    <>
      <div className="fixed w-full h-screen backdrop-blur-sm contrast-50 transition-all duration-[0.5s] left-0 top-0"></div>
      <div
        className="fixed z-[1000] -translate-y-2/4 -translate-x-2/4 border-2 border-slate-400 bg-gray-700 rounded-md shadow-sm shadow-black/50 transition-all 
        duration-[0.5s] left-2/4 top-2/4"
        ref={ref}
      >
        <button
          className="p-[0.8rem] rounded-md translate-x-[0.8rem] transition-all duration-[0.2s] absolute top-[1.2rem] 
        right-[1.9rem] hover:bg-amber-600 hover:shadow-sm hover:shadow-black/50"
          onClick={close}
        >
          <HiXMark />
        </button>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </>, document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
