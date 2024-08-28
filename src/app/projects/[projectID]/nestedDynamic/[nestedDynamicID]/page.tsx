"use client"; //hooks can only be used in client side components
import { notFound } from "next/navigation";
import { useRouter } from "next/navigation";

export default function NestedDynamicIDInfoFromProject({
  //passing the nestedDynamicID through the url as parameter
  params,
}: {
  params: {
    projectID: string;
    nestedDynamicID: string;
  };
}) {
  /*
    Next.js treats folding brackets as a dynamic route. 
    Passing the identifier of the project to the page. through the url
  */
  if (!params.projectID || !params.nestedDynamicID) {
    return notFound();
  }
  if (parseInt(params.projectID) < 0 || parseInt(params.nestedDynamicID) < 0) {
    return notFound();
  }

  const router = useRouter();
  const handleClick = () => {
    console.log("button clicked. Routing to /projects");
    router.push("/projects");
  };

  return (
    <main className="flex flex-col items-center justify-start">
      <h1>
        Projects details {params.projectID} has the nested dynamic route ID of{" "}
        {params.nestedDynamicID}
      </h1>
      <button
        onClick={handleClick}
        className="bg-amber-400 text-black p-2 rounded-2"
      >
        press here to go back with router
      </button>
    </main>
  );
}
