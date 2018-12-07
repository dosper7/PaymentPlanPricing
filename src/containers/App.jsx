import React, { Component } from 'react';
import Slider from '../components/Slider'
import { connect } from 'react-redux';
import actionTypes from '../store/actions.js';
import WithCard from '../hoc/WithCard';
import InstalmentPlanTable from '../components/InstalmentPlanTable';
import InstalmentPlanDetail from '../components/InstalmentPlanDetail';
import InstallmentService from '../Services/InstalmentService'

class App extends Component {

    render() {
        return (
            <div className="container mt-4">
                <WithCard title={"Mash.com Loans :)"}>
                    <Slider SelectedLoanAmount={this.props.SelectedLoanAmount} Min={this.props.MinLoanAmount} Max={this.props.MaxLoanAmount} Step={this.props.Step} OnSliderChange={this.props.onSelectedLoanAmountChange} >
                        <div className="form-group col-sm-6">
                            <label>Interest:</label>
                            <input type="number" className="form-control" value={this.props.Interest} onChange={(e) => this.props.onChangeInterest(e.target.value)} />
                        </div>
                        <div className="form-group col-sm-6">
                            <label>Amount:</label>
                            <input type="number" Max={this.props.MaxLoanAmount} className="form-control" value={this.props.SelectedLoanAmount} onChange={(e) => this.props.onSelectedLoanAmountChange(e.target.value)} />
                        </div>
                    </Slider>
                </WithCard>
                <WithCard>
                    <InstalmentPlanTable
                        LoanTerms={this.props.LoanTerms}
                        Amount={this.props.SelectedLoanAmount}
                        Interest={this.props.Interest}
                        onShowPaymentPlanDetail={this.props.onShowPlaymentPlanDetail}
                        MinInstalmentAmount={this.props.MinInstalmentAmount} />
                </WithCard>

                {this.props.SelectedPaymentPlan &&
                    <WithCard title={"Payment info for " + this.props.SelectedPaymentPlan.length + " Months"}>
                        <InstalmentPlanDetail PaymentPlan={this.props.SelectedPaymentPlan} />
                    </WithCard>
                }
            </div>
        );
    }
}


//Redux bindings
const mapStateToProps = state => {
    return {
        MinLoanAmount: state.MinLoanAmount,
        MaxLoanAmount: state.MaxLoanAmount,
        LoanStep: state.Step,
        LoanTerms: state.LoanTerms,
        SelectedLoanAmount: state.SelectedLoanAmount,
        Interest: state.Interest,
        Step: state.Step,
        SelectedPaymentPlan: state.SelectedPaymentPlan,
        MinInstalmentAmount: state.MinLoanInstalmentAmount,
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onSelectedLoanAmountChange: (amount) => dispatch({ type: actionTypes.CALCULATE_PAYMENT_PLAN, amount: amount }),
        onShowPlaymentPlanDetail: (paymentPlan) => dispatch({ type: actionTypes.SHOW_PAYMENT_PLAN, paymentPlan: paymentPlan }),
        onChangeInterest: (interest) => dispatch({ type: actionTypes.CHANGE_INTEREST, interest: interest }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
