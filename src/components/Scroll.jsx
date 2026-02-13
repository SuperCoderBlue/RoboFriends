import React from "react";
import './Scroll.css'

const Scroll = (props) => {
    return (
        <div  className="scroll-style" style={{overflowY: 'scroll', borderTop: '5px solid black', borderBottom: '5px solid black', height: '500px', padding: '1rem 0'}}>
            {props.children}
        </div>
    )
}

export default Scroll