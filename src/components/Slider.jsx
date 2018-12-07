import React from 'react';

const Slider = (props) => {

    const OnValueChange = (evt) => {
        props.OnSliderChange(parseInt(evt.target.value));
    }

    return (
        
            <div>
                <div className="sliderRangeLabels text-primary">
                    <span>{props.Min}</span>
                    <span>{props.Max}</span>
                </div>
                <div className="slider">
                    <input type="range" min={props.Min} max={props.Max} step={props.Step} onChange={OnValueChange} value={props.SelectedLoanAmount}></input>
                </div>
                {props.children}
            </div>


    );
}

export default Slider;