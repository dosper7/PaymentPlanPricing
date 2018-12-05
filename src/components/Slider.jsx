import React from 'react';

const Slider = (props) => {

    const OnValueChange = (evt) =>{
        props.OnSliderChange(evt.target.value);
    }

    let label = (props.Description ? <label>{props.Description}</label>:<label>{props.Min}</label>)

    return (
        <div>
           {label}
            <input type="range" min={props.Min} max={props.Max} step={props.Step} onChange={OnValueChange}></input>
        </div>
    );
}

export default Slider;