import {View} from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const DUMMY_EXPENSES = [
    {
        id: "e1",
        description: "A pair of shoes",
        amount: 59.99,
        date: new Date('2022-12-19'),
    },
    {
        id: "e2",
        description: "A pair of pants",
        amount: 199.99,
        date: new Date('2023-01-19'),
    },
    {
        id: "e3",
        description: "A pair of trousers",
        amount: 9.99,
        date: new Date('2023-03-25'),
    },
    {
        id: "e4",
        description: "Phone",
        amount: 509.99,
        date: new Date('2023-04-25'),
    }
]

function ExpensesOutput({expenses, expensesPeriod}) {
    return <View>
        <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod}/>
        <ExpensesList />
    </View>
}

export default ExpensesOutput;