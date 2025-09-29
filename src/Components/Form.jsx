import React,{useState} from 'react';

const Form = (props) => {
    const [text, settext] = useState("");
    const handlechange=(e)=>{
      settext(e.target.value)
    }
     const handleupchange=()=>{
         let newtext=text.toUpperCase();
      settext(newtext);
    }
       const handlelochange=()=>{
           let newtext=text.toLowerCase();
      settext(newtext);
    }
        const handleclearchange=()=>{
      let newtext='';
      settext(newtext);
    }
  return (
    <>
    <div className='container'style={{color:props.mode==='dark'?'white':'black'}} >
        <h1> {props.title}</h1>
      <form>
  <div className="mb-3">
    <textarea className="form-control"  value={text} rows="8" onChange={handlechange} style={{backgroundColor: props.mode==='dark'?'gray':'white' ,color:props.mode==='dark'?'white':'black'}} />
  </div>
  
  <button type='button' onClick={handleupchange}className="btn btn-primary mx-2">convert into upper case</button>
  <button type='button' onClick={handlelochange}className="btn btn-primary 2 mx-2">convert into lower case</button>
  <button type='button' onClick={handleclearchange}className="btn btn-primary 3 mx-2">clear text</button>
  
</form>
    </div>
<div className="container my-3 "style={{color:props.mode==='dark'?'white':'black'}}>
<h2>Text summary</h2>
<p> {text.split(" ").length} words and {text.length}characters</p>
<p> {0.008*text.split(" ").length}minutes read</p>
<h1>preview</h1>
<p> {text}</p>
</div>
    </>
  );
}

export default Form;
