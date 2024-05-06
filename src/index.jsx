import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { DataProvider } from "./data/"
import { PageLayout } from "./global/PageLayout"

import { Wallet } from "./components/Wallet"
import { Budget } from "./components/Budget"
import { Transactions } from "./components/Transactions"

const ComponentWithPageLayout = ({ Component }) => (
  <PageLayout>
    <Component />
  </PageLayout>
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <DataProvider>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<ComponentWithPageLayout Component={Wallet} />}
        />
        <Route
          path="/budget"
          element={<ComponentWithPageLayout Component={Budget} />}
        />
        <Route
          path="/transactions"
          element={<ComponentWithPageLayout Component={Transactions} />}
        />
      </Routes>
    </BrowserRouter>
  </DataProvider>
)
