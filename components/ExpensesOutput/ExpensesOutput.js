import {StyleSheet, View} from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import {GlobalStyles} from "../../constants/styles";

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
    return <View style={styles.container}>
        <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod}/>
        <ExpensesList expenses={DUMMY_EXPENSES}/>
    </View>
}

export default ExpensesOutput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0,
        backgroundColor: GlobalStyles.colors.primary700,
    }
})