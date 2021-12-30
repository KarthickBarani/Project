type expensesType = {
    ExpenseId: number,
    InvoiceId: number,
    Amount: number,
    Memo: null | string,
    AddedDateTime: null | string
}[]


export const ExpensesComp = (props: {
    expenses: expensesType
    setExpenses: Function
}) => {
    return (
        <>
            {props.expenses.map(expense => {
                return (
                    <tr>
                        <td></td>
                        <td>{expense.Amount.toFixed(2)}</td>
                        <td>{expense.Memo}</td>
                        <td></td>
                    </tr>
                )
            })}
        </>
    )
}