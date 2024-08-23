/*
  Additional notes:
  - This is a catch-all route that will catch any url that is not defined in the pages directory
  - The catch-all route is defined in the pages directory as a folder with the name of the route
  - The slugs are passed as an array, so we can join them with "/" to get the full path
  - by using [[...name]], we can pass multiple slugs in the url as well as none, 
    thus not creating the error when no additional slugs are passed
   

*/
export default function CatchAllSegments({
  //passing the slugs through the url as parameter
  params,
}: {
  params: { slugs: string[] };
}) {
  /*
  The slugs are passed as an array, so we can join them with "/" to get the full path
  when [[...name]], one otta check for udefined slugs, since no slugs can be passed
  */
  if (params.slugs?.length === 2) {
    return (
      <h1>
        Viewing {params.slugs[0]} and {params.slugs[1]}
      </h1>
    );
  } else if (params.slugs) {
    return (
      <main className="flex flex-col items-center justify-start">
        {params.slugs?.map((slug, index) => (
          <div key={index}>
            <h1>{slug}</h1>
          </div>
        ))}
      </main>
    );
  } else {
    return (
      <main className="flex flex-col items-center justify-start">
        <h1>Default catch all segments page</h1>
      </main>
    );
  }
}
