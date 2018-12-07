import React from 'react';

const InstalmentPlanDetail = (props) => {

    const payPlans = props.PaymentPlan.map(p =>
        <tr>
            <td>
                {p.Month}
            </td>
            <td>
                {p.Capital}
            </td>
            <td>
                {p.Interest}
            </td>
            <td>
                {p.Instalment}
            </td>
        </tr>)

    return (
        <div className="table-responsive">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Month</th>
                        <th scope="col">Capital</th>
                        <th scope="col">Interest</th>
                        <th scope="col">Installment</th>
                    </tr>
                </thead>
                <tbody>
                    {payPlans}
                </tbody>
            </table>
        </div>

    );
}

export default InstalmentPlanDetail;