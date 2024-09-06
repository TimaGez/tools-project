import '../App.css'
import React, { useState } from 'react'

export default function EquationBalancer() {
    return (
        <>
            <h1 className='title' id='title1'>Chemical Equations Balancer</h1>
            <div className='element'>
                <input id='massNum' type="text" className="mass-num" />
                <input id='element' type="text" className="element" />
                <input id='atomicNum' type="text" className="atomic-num" />
            </div>
            <div className='element'>
                <input id='massNum1' type="text" className="mass-num" />
                <input id='element1' type="text" className="element" />
                <input id='atomicNum1' type="text" className="atomic-num" />
            </div>
            <div className='element'>
                <input id='massNum' type="text" className="mass-num" />
                <input id='element' type="text" className="element" />
                <input id='atomicNum' type="text" className="atomic-num" />
            </div>
        </>
    )
}