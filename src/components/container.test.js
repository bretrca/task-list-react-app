import { render } from "@testing-library/react";
import Container from "./container";

describe("should render the container component", () => {
  test("should render the h1", () => {
    const { container } = render(<Container />);
    const containerElement = container.querySelector("h1");
    expect(containerElement).toBeInTheDocument();
  });
  test("should render the form", () => {
    const { container } = render(<Container />);
    const containerElement = container.querySelector("form");
    expect(containerElement).toBeInTheDocument();
  });
  test("should render the list", () => {
    const { container } = render(<Container />);
    const containerElement = container.querySelector("ul");
    expect(containerElement).toBeInTheDocument();
  });
});

describe("Should render the props", () => {
  test("should render the prop inputvalue", async () => {
    const mockInputValue = "inputValue";
    const container = render(<input inputValue={mockInputValue} />);
    const containerElement = await container.findByText(mockInputValue);
    expect(containerElement).toBeInTheDocument();
  });
});
