import React, {useState} from 'react'



export default function TextForm(props) {
  const handleUpClick = () =>{
    // console.log("Uppercase was clicked" +text);
    setText((text.toUpperCase()));
  }
  const handleOnChange = (event) => {
    // console.log("Handle on change");
    setText(event.target.value);
  }
  const handleLowClick = () => {
    setText((text.toLowerCase()));
  }
  const handleClearClick = () => {
    setText("");
  }
  const handleCapWordClick = () => {
    let newText = text.split(" ")
    const newArray = newText.map((word)=>(
      word.charAt(0).toUpperCase()+word.substring(1).toLowerCase()
    ))
    newText = newArray.join(" ")
    setText(newText)
  }
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  const [text,setText] = useState('Enter text here');
  return (
    <>
    
    <div className='container' style={{color :props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{background: props.mode ==='dark'?'#3F4E4F':'white',color :props.mode==='dark'?'white':'black'}} id="myBox" rows="6"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
        <button className="btn btn-primary mx-1" onClick={handleCapWordClick}>Capatilize Words</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>


    </div>
    <div className="container my-3" style={{color :props.mode==='dark'?'white':'black'}}>
      <h2>Your Text Summary</h2>
      <p>{text.toString().split(" ").length} words and {text.length} characters </p>
      <p>{0.008 * text.toString().split("").length} mins read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Enter the text above to preview here'}</p>
    </div>
    </>
  )
}
