import React from 'react';
import Slider from '../components/Slider.jsx';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe(' <Slider/> testing', () =>{


    it('should render a slider',() =>{
        const slider = shallow(<Slider SelectedLoanAmount={1000} Min={100} Max={2000} Step={100}/>);
        expect(slider).toMatchSnapshot();
    });

    it('should contain a input type range',() =>{
        const slider = shallow(<Slider/>);
        expect(slider.find('input[type="range"]').length).toEqual(1);
    });

    it('input range should have the same value as passed in the prop "SelectedLoanAmount=1000" ',() =>{
        const slider = shallow(<Slider SelectedLoanAmount={1000}/>);
        slider.find('input[type="range"]').get(0).value=="1000";
    });
});


