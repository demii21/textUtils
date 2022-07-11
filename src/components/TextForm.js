import React, {useState} from 'react'



export default function TextForm(props) {
  const handleUpClick = () =>{
   
    setText((text.toUpperCase()));
    props.showAlert(": UpperCase! ","success ");
  }
  const handleOnChange = (event) => {
  
    setText(event.target.value);
  }
  const handleLowClick = () => {
    setText((text.toLowerCase()));
    props.showAlert(": LowerCase! ","success ");

  }
  const handleClearClick = () => {
    setText("");
    props.showAlert(": Cleared! ","success ");

  }
  const handleCapWordClick = () => {
    let newText = text.split(" ")
    const newArray = newText.map((word)=>(
      word.charAt(0).toUpperCase()+word.substring(1).toLowerCase()
    ))
    newText = newArray.join(" ");
    setText(newText);
    props.showAlert(": Capatilized first letter of each word! ","success ");

  }
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert(": Coppied text to clipboard ","success ");

  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert(": Extra Spaces Removed! ","success ");

  }

  const [text,setText] = useState('Enter text here');
  return (
    <>
    
    <div className='container' style={{color :props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{background: props.mode ==='dark'?'#3F4E4F':'white',color :props.mode==='dark'?'white':'black'}} id="myBox" rows="6"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCapWordClick}>Capitalize  Words</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>


    </div>
    <div className="container my-3" style={{color :props.mode==='dark'?'white':'black'}}>
      <h2>Your Text Summary</h2>
      <p>{text.toString().split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters </p>
      <p>{0.008 * text.toString().split("").filter((element)=>{return element.length!==0}).length} mins read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Nothing to preview'}</p>
    </div>
    </>
  )
}
