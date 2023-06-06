import {Text, View} from "react-native";

function ExpensesSummary({periodName, expenses}) {
    const expensesSum = expenses.reduce((sum, current)=>sum+=current.amount,0);

    return <View>
        <Text>Last 7 days</Text>
        <Text>${expensesSum.toFixed(2)}</Text>
    </View>
}

export default ExpensesSummary;