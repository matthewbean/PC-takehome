import React, { createContext, useState } from "react"
import { transactions } from "./transactions"
import { cards } from "./cards"

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({ cards: cards, transactions: transactions })

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  )
}
