import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import App from "../App";

/**
 * @vitest-environment jsdom
 */

describe("App", () => {
  it("should render the app without crashing", () => {
    render(<App title="Rose of Shannon" />);

    //screen.debug();

    // check if App components renders headline
  });
});
