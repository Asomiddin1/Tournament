import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";

const CreateTouner = ({setCreate}) => {
  const [modal, setModal] = useState(false);
  return (
    <div className="flex justify-center items-center  h-[85vh] w-full   relative">
      <button onClick={()=>setModal(true)} className="btn btn-ghost text-xl shadow-2xl bg-slate-300">
        {" "}
        <CiCirclePlus className="text-[#0000ffe8]" /> Create Tournament
      </button>

      {modal && (
        <div className=" fixed top-0 left-0 flex justify-center items-center right-0 bottom-0 bg-[#000000c4] z-50 backdrop-blur">
           <div className="bg-white rounded-2xl py-2 px-4  w-[60vw] h-[50vh]">
            <h1>Tounament Settings</h1>
 
            <div className="pt-5">
                <label htmlFor="">
                    <p>Players</p>
                    <input type="number" placeholder="players"/>
                </label>
            </div>

            <div className="flex justify-end items-center">
              <button onClick={()=> setCreate(true)} className="btn btn-ghost border-slate-600 border-[1px]">OK</button>
            </div>
           </div>
        </div>
      )}
    </div>
  );
};

export default CreateTouner;
