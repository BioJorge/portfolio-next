"use client"; //error compoenents must be only be used in client side components
export default function ErrorScreen(
  //error is a prop that is passed to the component in the error.tsx file, of Error type
  {
    error,
    //reset is a function that is passed to the component in the error.tsx file, of type function
    reset,
  }: { error: Error; reset: () => void }
) {
  return (
    <div className="flex flex-col justify-center align-center h-full w-full">
      <h1 className="text-2xl font-bold text-red-500">Caught an error! 😢</h1>
      <p>{error.message}</p>
      <button onClick={reset}>try again</button>
    </div>
  );
}
/*
  error.tsx can be put in whichever folder you want, but it will swap the rendering of the page with the error screen
  In the case of nested routes, the error screen will be rendered in the place of the component that threw the error
  all the pages that are children of the page that threw the error will be unmounted
*/
