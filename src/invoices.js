import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import { getInvoices } from "./data";

export default () => {
  const invoicces = getInvoices();
  const [searchParams, setSearchParms] = useSearchParams();
  return (
    <main>
      <h2>Invoicces</h2>
      <nav>
        <input value={searchParams.get("filter")} onChange={() => 1} />
        {invoicces.map((item) => (
          <NavLink
            key={item.number}
            style={({ isActive }) => {
              return { display: "block", color: isActive ? "red" : "" };
            }}
            to={"/invoices/" + item.number}
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </main>
  );
};
