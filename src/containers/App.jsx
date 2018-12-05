import React, { Component } from 'react';
import Slider from '../components/Slider'
import { connect } from 'react-redux';
import actionTypes from '../store/actions.js';
import InstalmentService from '../Services/InstalmentService.js'

class App extends Component {

    state = {
        selectedInstalment: null,
        selectedLoanAmount: 100
    }

    onSliderChange = (value) => {
        this.setState(() => ({ selectedLoanAmount: value }));
    }

    render() {
        console.log(InstalmentService.GetMonthlyInstalmentInfo(3,1000,6));
        return (
            <div className="container mt-4">
                <Slider Description={this.state.selectedLoanAmount} Min={100} Max={2000} Step={100} OnSliderChange={this.onSliderChange} />
            </div>
        );
    }
}


// //Redux bindings
// const mapStateToProps = state => {
//     return {
//         // currentPlanetContext: state.currentPlanetContext,
//         // planets: state.planets,
//         // filterText: state.filterText,
//     }
// }


// const mapDispatchToProps = (dispatch) => {
//     return {

//         // planets
//         onAddNewPlanet: (planet) => dispatch({ type: actionTypes.ADD_NEW_PLANET, newPlanet: planet }),
//         onEditPlanet: (planet) => dispatch({ type: actionTypes.EDIT_PLANET, editedPlanet: planet }),
//         onDeletePlanet: (planet) => dispatch({ type: actionTypes.DELETE_PLANET, planet }),
//         onSortPlanets: () => { dispatch({ type: actionTypes.SORT_PLANETS }); },

//         //moons
//         onAddNewMoon: (moon) => { dispatch({ type: actionTypes.ADD_NEW_MOON, newMoon: moon }); },
//         onEditMoon: (moon) => { dispatch({ type: actionTypes.EDIT_MOON, moon }); },
//         onShowMoonInfo: (planet) => { dispatch({ type: actionTypes.SHOW_MOON_INFO, planet }) },
//         onDeleteMoon: (moon) => {
//             setTimeout(() => {
//                 dispatch({ type: actionTypes.DELETE_MOON, moon: moon });
//             }, 1000);

//         },

//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
