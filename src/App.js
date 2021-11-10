import { Outlet, Link } from "react-router-dom";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <nav style={{ borderBottom: "1px solid", paddingBottom: "1em" }}>
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link> | <Link to="/bad">bad</Link>
      </nav>
      <Outlet />
    </div>
  );
}
