import React from 'react';
import Slider from '../components/Slider.jsx';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe(' <Slider/> testing', () =>{
    it('should render a slider',() =>{
        const slider = shallow(<Slider SelectedLoanAmount={1000} Min={100} Max={2000} Step={100}/>);
        expect(slider.find('input[type="range"]').length).toEqual(1);
    });
});


