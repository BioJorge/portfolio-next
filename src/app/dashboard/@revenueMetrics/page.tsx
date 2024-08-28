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
export default function RevenueMetrics() {
  // const { data, error } = useQuery('revenueMetrics', fetchRevenueMetrics);

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  // if (!data) {
  //   return <div>Loading...</div>;
  // }

  const data = [
    { id: 1, name: "Total Revenue", value: "$100,000" },
    { id: 2, name: "Total Expenses", value: "$50,000" },
    { id: 3, name: "Net Income", value: "$50,000" },
  ];
  const value = Math.random();
  console.log(value);
  const isError = value > 0.5;
  if (isError) throw new Error("Not implemented");
  return (
    <Card>
      <h2>Revenue Metrics</h2>
      <ul>
        {data.map((metric) => (
          <li key={metric.id}>
            {metric.name}: {metric.value}
          </li>
        ))}
      </ul>
    </Card>
  );
}
