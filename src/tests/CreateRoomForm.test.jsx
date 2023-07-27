import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CreateRoomForm from "../features/rooms/CreateRoomForm";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

/**
 * @vitest-environment jsdom
 */

// this test needs to be wrapped in QueryClientProvider because of the custom hook
describe("CreateRoomForm", () => {

  const queryClient = new QueryClient();
    
  it("renders the entire form", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <CreateRoomForm />
      </QueryClientProvider>
    );
    expect(screen.getByLabelText("Room number"));
    expect(screen.getByLabelText("Maximum capacity"));
    expect(screen.getByLabelText("Regular price"));
    expect(screen.getByLabelText("Discount"));
    expect(screen.getByLabelText("Description of room"));
    expect(screen.getByLabelText("Upload Image"));
  });
    //screen.debug();

  it("should fill out the form without throwing errors", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <CreateRoomForm />
      </QueryClientProvider>
    );
    const roomNumberInput = screen.getByLabelText("Room number");
    const maxCapacityInput = screen.getByLabelText("Maximum capacity");
    const priceInput = screen.getByLabelText("Regular price");
    const discountInput = screen.getByLabelText("Discount");
    const descriptionInput = screen.getByLabelText("Description of room");
    fireEvent.change(roomNumberInput, { target: { value: "008" }});
    fireEvent.change(maxCapacityInput, { target: { value: "15" }});
    fireEvent.change(priceInput, { target: { value: "350" }});
    fireEvent.change(discountInput, { target: { value: "25" }});
    fireEvent.change(descriptionInput, { target: { value: "Test description" }});
    expect(roomNumberInput.value).toBe("008");
    expect(maxCapacityInput.value).toBe("15");
    expect(priceInput.value).toBe("350");
    expect(discountInput.value).toBe("25");
    expect(descriptionInput.value).toBe("Test description");

  });
});
