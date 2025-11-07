import { render, screen, fireEvent } from "@testing-library/react";
import BugList from "../components/BugList";

const sampleBugs = [
  { _id: "1", title: "Login bug", description: "Fix login", status: "open" },
  {
    _id: "2",
    title: "UI glitch",
    description: "Fix layout",
    status: "in-progress",
  },
];

test("renders bug list correctly", () => {
  render(<BugList bugs={sampleBugs} onDelete={() => {}} onUpdate={() => {}} />);
  expect(screen.getByText("Login bug")).toBeInTheDocument();
  expect(screen.getByText("UI glitch")).toBeInTheDocument();
});

test("calls onUpdate when resolve clicked", () => {
  const mockUpdate = vi.fn();
  render(
    <BugList bugs={sampleBugs} onDelete={() => {}} onUpdate={mockUpdate} />
  );
  fireEvent.click(screen.getAllByText(/mark resolved/i)[0]);
  expect(mockUpdate).toHaveBeenCalledWith("1", { status: "resolved" });
});
