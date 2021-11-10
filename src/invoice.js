import { useParams } from "react-router-dom";
import { getInvoice } from "./data";

export default () => {
  const params = useParams();
  const invoice = getInvoice(parseInt(params.invoiceid, 10));
  return (
    <main>
      <h1>Invoice</h1>
      <h3>{invoice.name}</h3>
      <h3>{invoice.number}</h3>
      <h3>{invoice.amount}</h3>
      <h3>{invoice.due}</h3>
    </main>
  );
};
