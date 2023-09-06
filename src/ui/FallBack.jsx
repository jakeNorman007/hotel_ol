import React from "react";

function FallBack({ error, resetErrorBoundary }) {
  return (
    <>
      <div className="bg-gray-700 h-screen flex items-center justify-center">
        <div className="grid gap-5 text-white font-semibold">
          <p className="text-6xl">Something went wrong</p>
          <p className="text-xl">{error.message}</p>
          <button onClick={resetErrorBoundary} className="bg-amber-600 py-3 rounded-md hover:bg-amber-700 shadow-lg shadow-black/50">Try again</button>
        </div>
      </div>
    </>
  );
}

export default FallBack;
