import React, { useState } from 'react'

const Form = ({ addComment }) => {
  const [text, settext] = useState("");
  return (
    <div>
      <input value={text} type="text" name="" id="" onChange={(e) => settext(e.target.value)} />
      <button onClick={()=>{
        addComment(text)
      }}>Add</button>
    </div>
  );
};

export default Form