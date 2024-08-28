import { notFound } from "next/navigation";
import Link from "next/link";
export default function ProjectsDetailsPage({
  //passing the projectID through the url as parameter
  params,
}: {
  params: { projectID: string };
}) {
  const projectID = params.projectID;
  /*
    Next.js treats folding brackets as a dynamic route. 
    Passing the identifier of the project to the page. through the url
  */
  if (!projectID || parseInt(projectID) < 0) {
    return notFound();
  }

  return (
    <main className="flex flex-col items-center justify-start p-2">
      <h1>Projects details from {projectID}</h1>
      {/* Links is the next.js best practice to navigate between opages*/}
      {/* replace sets the url history to the home page*/}
      <Link href={`/projects/${projectID}/nestedDynamic/1`} replace>
        1
      </Link>
      <Link href={`/projects/${projectID}/nestedDynamic/2`}>2</Link>
      <Link href={`/projects/${projectID}/nestedDynamic/3`}>3</Link>
      <Link href={`/projects/${projectID}/nestedDynamic/4`}>4</Link>
      <Link href={`/projects/${projectID}/nestedDynamic/5`}>5</Link>
    </main>
  );
}
