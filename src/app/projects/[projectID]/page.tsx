import { notFound } from "next/navigation";
export default function ProjectsDetailsPage({
  //passing the projectID through the url as parameter
  params,
}: {
  params: { projectID: string };
}) {
  /*
    Next.js treats folding brackets as a dynamic route. 
    Passing the identifier of the project to the page. through the url
  */
  if (!params.projectID || parseInt(params.projectID) < 0) {
    return notFound();
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <h1>Projects details from {params.projectID}</h1>
      <a href={`/projects/${params.projectID}/nestedDynamic/1`}>1</a>
      <a href={`/projects/${params.projectID}/nestedDynamic/2`}>2</a>
      <a href={`/projects/${params.projectID}/nestedDynamic/3`}>3</a>
      <a href={`/projects/${params.projectID}/nestedDynamic/4`}>4</a>
      <a href={`/projects/${params.projectID}/nestedDynamic/5`}>5</a>
    </main>
  );
}
