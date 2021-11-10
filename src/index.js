import { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Invoices from "./invoices";
import Invoice from "./invoice";
import Expenses from "./expenses";

import App from "./App";

const rootElement = document.getElementById("root");
render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="invoices" element={<Invoices />}>
            <Route path=":invoiceid" element={<Invoice />} />
            <Route index element={<h1>Please select invoice below</h1>} />
          </Route>
          <Route path="expenses" element={<Expenses />} />
          <Route path="*" element={<p>bad link</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
