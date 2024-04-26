"use client";
// components/AddExpenseModal.js
import { useState } from "react";
import { expenseType } from "@/app/Types/expenseTypes";
import Expense from "@/app/expense/page";
import { ExpenseModelProps } from "@/app/Types/expenseTypes";

const AddExpenseModal = ({
  isOpen,
  onClose,
  onAddExpense,
  expense,
  UpdateExpense,
}: ExpenseModelProps) => {
  const [amount, setamount] = useState<number>(0);
  const [catagory, setcatagory] = useState<string>(" ");
  const [note, setNote] = useState<string>(" ");
  const [date, setDate] = useState<string>(" ");
  const Catagory = [
    "Groceries",
    "Rent",
    "Utilities",
    "Online Purchases",
    "Entertainment",
    "Others",
  ];

  const handleAddExpense = () => {
    const newExpense: expenseType = {
      id: `${Date.now()}`,
      date,
      amount: amount,
      catagory,
      note,
    };
    onAddExpense(newExpense);
    setcatagory("");
    setamount(0);
    setNote("");
    setDate("");
    onClose();
  };

  const onUpdateExpense = () => {
    const UpdateExpenseS: expenseType = {
      id: expense.id,
      date: date || expense.date,
      amount: amount || expense.amount,
      catagory: catagory || expense.catagory,
      note: note || expense.note,
    };
    UpdateExpense(UpdateExpenseS);
    setcatagory("");
    setamount(0);
    setNote("");
    setDate("");
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-60 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg w-96 relative">
            <button
              className="absolute top-2 right-2 text-red-500 hover:text-red-700"
              onClick={onClose}
            >
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
              </svg>
            </button>
            {/* Your modal content here */}
            <h2 className="text-2xl mb-4">Add Expense</h2>
            <form>


              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Amount
                </label>
                <input
                  id="amount"
                  type="number"
                  value={amount || expense.amount }
                  onChange={(e) => setamount(parseFloat(e.target.value))}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Enter amount"
                />
              </div>




              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Category
                </label>

                <select
                  value={catagory || expense.catagory}
                  onChange={(e) => setcatagory(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                >
                  <option value="" disabled>
                    Select
                  </option>
                  {Catagory.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Note
                </label>
                <input
                  id="note"
                  type="text"
                  value={note || expense.note}
                  onChange={(e) => setNote(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Enter note"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Date
                </label>
                <input
                  type="date"
                  value={date || expense.date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              {expense.id !== "" ? (
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  onClick={onUpdateExpense}
                >
                  update Expense
                </button>
              ) : (
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  onClick={handleAddExpense}
                >
                  Add Expense
                </button>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddExpenseModal;
