import React, { useEffect, useState } from "react";
import "./AddToDoModule.css";
function AddToDoModule({onClose,addTodoHandler}) {
  const [title,setTitle]=useState("")
  const [description,setDescription]=useState("")
  const [isimportant,setisImportant]=useState(false)
  const [error,setError]=useState(true)
  useEffect(()=>{
     if(title.length>5){
      setError(false)
     }else{
      setError(true)
     }
  },[title])
  return (
    <div id="modal-screen" className="">
      <div className="modal-content">
        <header className="modal-header">
          <span className="font-IOS-Font! text-sm absolute left-0 right-0 mx-auto! max-w-max! text-[#2b2929] select-none!">
            ایجاد برنامه جدید
          </span>
          <div className="btns *:size-3.5 *:cursor-pointer *:rounded-full">
            <button id="modal-close-button" className="" onClick={()=>onClose(true)}></button>
          </div>
        </header>
        <main className="my-5 space-y-3">
          <input
          value={title}
            placeholder="عنوان تسک را وارد نمائید ..."
            className="input-element title-input"
            onChange={(event)=>setTitle(event.target.value)}
          />
           {error ? <p style={{color:'red',fontSize:"12px"}}>نام کاربری 5 کراکتر است</p>: null}
          <textarea
            value={description}
            className="input-element description-input"
            placeholder="توضیحات تسک را وارد نمائید ..."
            name="description"
            onChange={(event)=>setDescription(event.target.value)}
          ></textarea>
          <div className="my-3 flex items-center gap-2">
            <input id="is-important" type="checkbox" checked={isimportant} onChange={(event)=>setisImportant(event.target.checked)}/>
            <label for="is-important"> مهم </label>
          </div>
          <div className="info-message">
            <p className="inline-flex! items-center gap-1">
              <img
                src="./public/images/check.png"
                alt="Checked"
                className="size-4"
              />
              <span> لطفا تمامی فیلد هارا تکمیل بفرمایید </span>
            </p>
          </div>
        </main>
        <footer className="mt-5 flex items-center justify-end text-sm pb-3">
          <button id="create-button" onClick={()=> addTodoHandler(title,description,isimportant)}>ایجاد کنید</button>
        </footer>
      </div>
    </div>
  );
}

export default AddToDoModule;
