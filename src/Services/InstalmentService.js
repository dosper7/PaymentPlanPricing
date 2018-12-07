
const GetMonthlyInstalmentInfo = (monthsLoanTerm, amount, interest) => {

    const realInterest = (interest * 360 / 365) / 12 / 100;
    const monthInstalment = (amount * realInterest) / [1 - Math.pow(1 + realInterest, monthsLoanTerm * -1)];
    const loanTermInfo = GetLoanTermPaymentPlan(monthsLoanTerm, amount, interest, Math.round(monthInstalment * 100) / 100);

    return {
        MonthInstalment: monthInstalment.toFixed(2),
        CapitalPaid: (amount + loanTermInfo.comulativeInterest).toFixed(2),
        TotalInterest: loanTermInfo.comulativeInterest.toFixed(2),
        PaymentPlan: loanTermInfo.paymentPlan,
        MinInstalmentAmount: loanTermInfo.minInstalment
    }
};

const GetLoanTermPaymentPlan = (monthsLoanTerm, amount, interest, monthInstalment) => {

    let paymentPlan = [];
    let minInstalment = 0, comulativeInterest = 0;

    for (let index = 0; index < monthsLoanTerm; index++) {
        let monthInterest = 0, instalment = 0, capital = 0;

        if (index === 0) {
            capital = amount;
            monthInterest = CalculateInterest(capital, interest);
            minInstalment = instalment = monthInstalment;
            comulativeInterest = monthInterest;
        }
        else {
            const prevMonth = paymentPlan[index - 1];
            capital = prevMonth.Capital - (monthInstalment - prevMonth.Interest);
            monthInterest = CalculateInterest(capital, interest);
            instalment = (index === monthsLoanTerm - 1) ? (monthInterest + capital) : (monthInstalment)
            comulativeInterest = prevMonth.ComulativeInterest + monthInterest;
        }

        if (instalment < minInstalment)
            minInstalment = instalment;

        paymentPlan.push({
            Month: index + 1,
            Interest: monthInterest,
            Instalment: instalment.toFixed(2),
            Capital: capital.toFixed(2),
            ComulativeInterest: comulativeInterest,
            TotalMonths: monthsLoanTerm
        });
    }

    return {
        paymentPlan,
        minInstalment,
        comulativeInterest
    }
};

const CalculateInterest = (amount, interest) => {
    return amount * (interest / 100) / 365 * 30;
};

export default {
    GetMonthlyInstalmentInfo,
    GetLoanTermPaymentPlan,
    CalculateInterest
}

