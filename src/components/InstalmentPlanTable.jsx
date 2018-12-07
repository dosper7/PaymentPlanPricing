import React from 'react';
import InstalmentPlan from './InstalmentPlan.jsx'
import InstallmentService from '../Services/InstalmentService'

const InstalmentPlanTable = (props) => {


    let payPlans = [];

    for (let index = 0; index < props.LoanTerms.length; index++) {
        const term = props.LoanTerms[index];
        const paymentInfo = InstallmentService.GetMonthlyInstalmentInfo(term, props.Amount, props.Interest);

        if (paymentInfo.MinInstalmentAmount >= props.MinInstalmentAmount) {
            payPlans.push(<InstalmentPlan
                key={index}
                loanTerm={term}
                amount={props.Amount}
                interest={props.Interest}
                monthlyInstalment={paymentInfo.MonthInstalment}
                totalInterest={paymentInfo.TotalInterest}
                totalPrice={paymentInfo.CapitalPaid}
                onSowPaymentPlanDetail={() => { props.onShowPaymentPlanDetail(paymentInfo.PaymentPlan) }} />)
        }
    }

    return (
        <div className="table-responsive">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Loan Term</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Interest %</th>
                        <th scope="col">Monthly Installment</th>
                        <th scope="col">Total Interest</th>
                        <th scope="col">Total Price</th>
                        <th scope="col">#</th>
                    </tr>
                </thead>
                <tbody>
                    {payPlans}
                </tbody>
            </table>
        </div>
    );

}

export default InstalmentPlanTable;