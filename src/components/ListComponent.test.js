import { render } from "@testing-library/react";
import ListComponent from "./ListComponent";
import * as uuid from "uuid";
jest.mock("uuid", () => ({ v4: () => "00000000-0000-0000-0000-000000000000" }));

describe("should render the List Component element", () => {
  test("should render the ul tag", () => {
    const { container } = render(<ListComponent />);
    const listElement = container.querySelector("ul");
    expect(listElement).toBeInTheDocument();
  });
  test("should render the li element", () => {
    const { container } = render(<ListComponent />);
    const listElement = container.querySelector("li");
    expect(listElement).toBeInTheDocument();
  });
});
describe("should render a list of elements", () => {
  test("should show the list", () => {
    const taskList = [
      {
        id: "00000000-0000-0000-0000-000000000000",
        description: "elemento1",
      },
      {
        id: "00000000-0000-0000-0000-000000000001",
        description: "elemento2",
      },
    ];
    const { container } = render(<ListComponent handlerList={taskList} />);
    const elements = container.querySelector("li");

    elements.forEach((name, index) => {
      expect(name.textContent).toBe([index]);
    });
  });
});
