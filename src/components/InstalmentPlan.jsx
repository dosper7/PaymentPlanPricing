import React from 'react';

const InstalmentPlan = (props) => {

        return(
            <tr>
                <td>
                    {props.loanTerm}
                </td>
                <td className="text-primary">
                    {props.amount}
                </td>
                <td>
                    {props.interest}
                </td>
                <td>
                    {props.monthlyInstalment}
                </td>
                <td>
                    {props.totalInterest}
                </td>
                <td>
                    {props.totalPrice}
                </td>
                <td>
                    <button className="mr-2 btn btn-outline-info btn-sm" onClick={props.onSowPaymentPlanDetail}>Sow Plan Detail</button>
                </td>
            </tr>);
}

export default InstalmentPlan;