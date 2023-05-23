import { render, screen } from "@testing-library/react";
import Advisor from "./Advisor";
import "@testing-library/jest-dom";

describe("Testing Advisor component", () => {
  const data = {
    name: "Jeanette Farrell",
    id: "33a78045-df16-414d-855a-3d1e479ff16a",
    jobTitle: "Human Division Planner",
    badge: "https://avatars.githubusercontent.com/u/58219056",
    desciption: "philosopher, educator, entrepreneur",
    status: "Offline",
    review: 2,
    languages: ["French", "Spanish", "German", "English"],
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1050.jpg",
  };

  test("should render Advisor with given data", () => {
    render(<Advisor advisor={data} />);
    expect(screen.getByTestId("advisor")).toBeInTheDocument();
  });

  test("should render Advisor name with title", () => {
    render(<Advisor advisor={data} />);
    expect(screen.getByTestId("title")).toHaveProperty("title");
  });

  test("should render Advisor with mentioned jon title in props", () => {
    render(<Advisor advisor={data} />);
    expect(screen.getByTestId("jobTitle")).toHaveTextContent(
      "Human Division Planner"
    );
  });
});
