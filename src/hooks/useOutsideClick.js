import { useEffect, useRef } from "react";

// a universal hook that detects a click outside of a modal and closes said modal
export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  // click event handler, this basically means when the modal (target) is up and the click isn't within the target it will trigger the
  // event listener
  useEffect(
    function () {
      function handleClick(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          handler();
        }
      }

      document.addEventListener("click", handleClick, listenCapturing);

      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [handler, listenCapturing]
  );

  return ref;
}
