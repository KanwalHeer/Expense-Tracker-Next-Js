export type expenseType={
    amount:number
    catagory:string
    note:string
    date:string
    id:string


}

export type ExpenseModelProps={
    onClose():void
    isOpen:boolean
    expense:expenseType
    onAddExpense(expense:expenseType):void
    UpdateExpense(updateExpense:expenseType):void
    
}

export type onChangeEventType={
    target:{value:string ,name:string}
}