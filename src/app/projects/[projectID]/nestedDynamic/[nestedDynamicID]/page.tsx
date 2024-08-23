import { notFound } from "next/navigation";
import { parse } from "path";

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

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <h1>
        Projects details {params.projectID} has the nested dynamic route ID of{" "}
        {params.nestedDynamicID}
      </h1>
    </main>
  );
}
