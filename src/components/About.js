import React from 'react'

export default function About(props) {
  return (
    <>
    <div className='container my-3' style={{background: props.mode ==='dark'?'rgb(44,54,57)':'white',color :props.mode==='dark'?'white':'black'}}>
        <h2 className='my-3 mx-3'>About</h2>
        <div className="accordion" id="accordionExample" >
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{background: props.mode ==='dark'?'#3F4E4F':'white',color :props.mode==='dark'?'white':'black'}}>
                    TextUtils Info
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" style={{background: props.mode ==='dark'?'#3F4E4F':'white',color :props.mode==='dark'?'white':'black'}} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" >
                        <strong>TextUtils</strong> is a utility which provides basic functions that can be used to manipulate your text in the way you want.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"style={{background: props.mode ==='dark'?'#3F4E4F':'white',color :props.mode==='dark'?'white':'black'}}>
                    Functions Available
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" style={{background: props.mode ==='dark'?'#3F4E4F':'white',color :props.mode==='dark'?'white':'black'}} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <ul>
                            <li>To UpperCase</li>
                            <li>To LowerCase</li>
                            <li>Clear</li>
                            <li>capitalize Word</li>
                            <li>Copy Text</li>
                            <li>Remove Extra Spaces</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
