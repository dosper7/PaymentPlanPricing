import React, { Component } from 'react';
import InstalmentPlan from './InstalmentPlan.jsx'

class InstalmentPlanTable extends Component {

    getInstalmentPlans = () => {
        return this.props.LoanTerms && this.props.LoanTerms.map(term => <InstalmentPlan Term={term} />);
    }
    render() {

        let instalmentPlanInfo = this.getInstalmentPlans();
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
                        </tr>
                    </thead>
                    <tbody>
                        {instalmentPlanInfo}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default InstalmentPlanTable;