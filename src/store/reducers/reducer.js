import actionTypes from '../actions.js';
import { produce } from 'immer';

const initialtSate = {
    LoanTerms: [3, 6, 12],
    MinLoanAmount: 100,
    MaxLoanAmount: 2000,
    Step: 100,
    MinLoanInstalmentAmount: 5,
    SelectedLoanAmount: 1000,
    Interest: 6,
    SelectedPaymentPlan: null
};

const reducer = (state = initialtSate, action) => {
    switch (action.type) {

        case actionTypes.CALCULATE_PAYMENT_PLAN:
            return produce(state, draft => {
                draft.SelectedLoanAmount = action.amount;
                draft.SelectedPaymentPlan = null;
            });

        case actionTypes.SHOW_PAYMENT_PLAN:
            return produce(state, draft => {
               draft.SelectedPaymentPlan = action.paymentPlan;
            });
            case actionTypes.CHANGE_INTEREST:
            return produce(state, draft => {
                draft.Interest = action.interest;
                draft.SelectedPaymentPlan = null;
             });
        default:
            return state;
    }
}

export default reducer;
