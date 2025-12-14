import React, { useEffect, useState } from "react";

function Todo({
  id,
  title,
  description,
  isImportant,
  isCompleted,
  onDo,
  onRemove,
}) {
  const [product, setProduct] = useState([]);
//clear fetch ipa
  // useEffect(() => {

  //   const contoroller= new AbortController()
  //   const fetchUsers = async () => {
  //     const response = await fetch("https://fakestoreapi.com/products",{
  //       signal:contoroller.signal
  //     });
  //     const data = await response.json();
  //     console.log(data);
  //     setProduct(data);
  //   };
  //   fetchUsers()
  //   //clean up
  //   return () => {
  //    contoroller.abort()
  //   };
  // }, []);
  //clear EventLisiner
  useEffect(()=>{
    window.addEventListener("resize",()=>{})
    return()=>{
      window.removeEventListener("...")
    }
  },[])
  return (
    <div className="space-y-0.5">
      {/* <!-- done completed --> */}
      <article className="task-card done completed">
        <div className="task-content">
          <div>
            <h3>{title}</h3>
            <p className="task-desc">{description}</p>
          </div>
        </div>
        <div class="moderate">
          <div className="flex items-center **:min-w-max gap-2">
            {isCompleted && (
              <span className="status-label completed"> تکمیل شده </span>
            )}
            {isImportant && <span className="priority code-1"> مهم </span>}
          </div>
          <div class="moderate-btns">
            <button class="complete-task" onClick={() => onDo(id)}>
              <i class="fa-solid fa-circle-check"></i>
            </button>
            <button class="undone-btn" onClick={() => onRemove(id)}>
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2"></div>
      </article>
    </div>
  );
}

export default Todo;
