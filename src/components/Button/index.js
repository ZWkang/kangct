import React from 'react';
import './index.scss'

/**
 * you can write some in here you know?
 * 
 * @example ../../../docs/button.md
 */
export default function Button ({name, children}){
    return <div className = "kbutton">
        content : here is my name { name }
        <hr />
        <button>{ children }</button>
        
    </div>
}