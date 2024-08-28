import { CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  display: "block",
  borderColor: "red",
};

export default function Loading() {
  return (
    <div className="flex flex-row justify-center align-center h-full w-full">
      <ClipLoader
        color="red"
        loading={true}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
