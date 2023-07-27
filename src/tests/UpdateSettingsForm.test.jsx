import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import UpdateSettingsForm from "../features/settings/UpdateSettingsForm";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

/**
 * @vitest-environment jsdom
 */

// this test needs to be wrapped in QueryClientProvider because of the custom hook
describe("UpdateSettingsForm", () => {

  const queryClient = new QueryClient();
    
  it("renders form", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <UpdateSettingsForm />
      </QueryClientProvider>
    );
    //screen.debug();
    await(waitFor( () => expect(screen.getByLabelText("Minimum nights/booking"))));
    await(waitFor( () => expect(screen.getByLabelText("Maximum nights/booking"))));
    await(waitFor( () => expect(screen.getByLabelText("Maximum guests/booking"))));
    await(waitFor( () => expect(screen.getByLabelText("Breakfast price"))));
    });
});
