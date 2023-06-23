import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import {useContext} from "react";
import {ExpensesContext} from "../store/expenses-context";

function AllExpenses() {
    const expensesCnt = useContext(ExpensesContext);
    return <ExpensesOutput
        expenses={expensesCnt.expenses}
        expensesPeriod="Total"
        fallbackText="No registered expenses found"
    />
}

export default AllExpenses