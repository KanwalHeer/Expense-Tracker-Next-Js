"use client"


import { useState } from "react"
import AddExpenseModal from "../displayExpenses/display"
import { expenseType } from "@/app/Types/expenseTypes";


 
//useStates start
export default function ExpenseTaracker() {
const [total ,settotal]= useState<number>(0) 
const [isOpen ,setisOpen]= useState<boolean>(false) 
const [expenses ,setExpenses]= useState<expenseType[]>([])
const [expense ,setExpense]= useState<expenseType>({
  amount:0,
  catagory:"",
  note:"",
  date:"",
  id:""
})
 
 

//functions start
const onAddExpense =(expense:expenseType)=>{
 setExpenses([...expenses,expense])
 settotal(total + expense.amount)
}

const onUpdateExpense=(expenseRecord:expenseType)=>{
  setExpenses(expenses.map((e)=>(e.id ===expenseRecord.id? expenseRecord:e)))
  settotal(total - expense.amount + expenseRecord.amount)
  setExpense({
    amount:0,
    catagory:"",
    note:"",
    date:"",
    id:""}
    )
}



const onClose =()=>{
  setisOpen(false)
  setExpense({
    amount:0,
    catagory:"",
    note:"",
    date:"",
    id:""}
  )
}

const onDeleteHandler=(expense:expenseType)=>{
  setExpenses(expenses.filter((e)=>e.id !==expense.id))
  settotal(total - expense.amount)
}

const onEditHandler=(expense:expenseType)=>{
  setExpense(expense)
  setisOpen(true)
}




    


    return(
      <>

      <div className="overflow-x-auto">

      <table className="min-w-full divide-y divide-gray-200">

        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Amount
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Catagory
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
             Note
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-200">
          
          {
          expenses.length > 0 ?
          expenses.map((expense)=>{
          return(
           <tr key={expense.id}>
           <td className="px-6 py-4 whitespace-nowrap">{expense.amount}</td>
           <td className="px-6 py-4 whitespace-nowrap">{expense.catagory}</td>
           <td className="px-6 py-4 whitespace-nowrap">{expense.note}</td>
           <td className="px-6 py-4 whitespace-nowrap">{expense.date}</td>
           <td className="flex justify-center py-2">
           <button className="text-red-500 mr-2" onClick={()=>onDeleteHandler(expense)}>Delete</button>
           <button className="text-blue-500" onClick={()=>onEditHandler(expense)}>Update</button>
           </td>
         </tr>
        
          )
          }): <tr><td>No Expense List</td></tr>
           
        }
          </tbody>

          </table>
          </div>





      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        onClick={()=>setisOpen(true)}>
        Add Expense
      </button>

      <AddExpenseModal expense={expense}  isOpen={isOpen} onClose={onClose} onAddExpense={onAddExpense} UpdateExpense={onUpdateExpense}/>
        <div className="flex justigy-end">
        <p className="text-2xl font -semibold mb-4">Total: PKR{total.toFixed(2)}</p>
        </div>

        </>
    )
}
