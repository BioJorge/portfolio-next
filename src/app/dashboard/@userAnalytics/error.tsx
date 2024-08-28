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
      <h1 className="text-2xl font-bold text-red-500">Error Screen</h1>
      <p>{error.message}</p>
      <button onClick={reset}>try again</button>
    </div>
  );
}
