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
    const newText = text.split("");
    newText.map()
    setText(newText);
  }
  const [text,setText] = useState('Enter text here');
  return (
    <>
    
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="6"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
        <button className="btn btn-primary mx-3" onClick={handleCapWordClick}>Capatilize Words</button>
    </div>
    <div className="container my-3">
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters </p>
      <p>{0.008 * text.split(" ").length} mins read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
