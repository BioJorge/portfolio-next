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
export default function UserAnalytics() {
  // const [user, setUser] = useState<User | null>(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetchUser().then((user) => {
  //     setUser(user);
  //     setLoading(false);
  //   });
  // }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (!user) {
  //   return <div>User not found</div>;
  // }
  const user = {
    name: "Alice",
    email: "test@gmail.com",
    age: 30,
  };

  const value = Math.random();
  console.log(value);
  const isError = value > 0.5;
  if (isError) throw new Error("Not implemented");

  return (
    <Card>
      <h1>{user.name}</h1>
      <h2>{user.email}</h2>
      <h3>{user.age}</h3>
    </Card>
  );
}
