import { render, screen, fireEvent } from "@testing-library/react";
import BugForm from "../components/BugForm";

test("shows validation error if title too short", () => {
  const mockCreate = vi.fn();
  render(<BugForm onCreate={mockCreate} />);

  const titleInput = screen.getByLabelText(/title/i);
  fireEvent.change(titleInput, { target: { value: "ab" } });
  fireEvent.click(screen.getByText(/report bug/i));

  expect(screen.getByRole("alert")).toHaveTextContent(/at least 3 characters/i);
  expect(mockCreate).not.toHaveBeenCalled();
});
