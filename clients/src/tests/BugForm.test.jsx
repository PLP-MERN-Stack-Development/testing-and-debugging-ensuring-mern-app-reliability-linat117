import { render, screen, fireEvent } from "@testing-library/react";
import BugForm from "../components/BugForm";

test("shows validation error for short title", () => {
  const mock = jest.fn();
  render(<BugForm onCreate={mock} />);
  fireEvent.change(screen.getByLabelText(/title/i), {
    target: { value: "ab" },
  });
  fireEvent.click(screen.getByText(/report bug/i));
  expect(screen.getByRole("alert")).toHaveTextContent(/at least 3 characters/i);
  expect(mock).not.toHaveBeenCalled();
});
