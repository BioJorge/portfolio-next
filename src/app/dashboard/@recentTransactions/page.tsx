/*
Using slots, via paralel routing, 
to render the RevenueMetrics and UserAnalytics components.

Coulda been done with react components as well

Using slots, via paralel routing, is better cus:
- each slots can have its own loading and error files
- provides a better separation of concerns and granular control
See image (parallel route eg) inside explations folder for example
*/
"use client"; //error compoenents must be only be used in client side components
import Card from "@/components/Card";

export default function RecentTransactions() {
  // const { data, error } = useQuery('recentTransactions', fetchRecentTransactions);

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  // if (!data) {
  //   return <div>Loading...</div>;
  // }

  const data = [
    { id: 1, name: "Payment to Acme Corp", value: "$10,000" },
    { id: 2, name: "Payment to Acme Corp", value: "$10,000" },
    { id: 3, name: "Payment to Acme Corp", value: "$10,000" },
    { id: 4, name: "Payment to Acme Corp", value: "$10,000" },
    { id: 5, name: "Payment to Acme Corp", value: "$10,000" },
  ];

  const value = Math.random();
  console.log(value);
  const isError = value > 0.5;
  if (isError) throw new Error("Not implemented");

  return (
    <Card>
      <h2>Recent Transactions</h2>
      <ul>
        {data.map((transaction) => (
          <li key={transaction.id}>
            {transaction.name}: {transaction.value}
          </li>
        ))}
      </ul>
    </Card>
  );
}
