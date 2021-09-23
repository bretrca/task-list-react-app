import { render, fireEvent, waitFor } from "@testing-library/react";
import FormComponent from "./formComponent";
//import * as uuid from 'uuid';
//import Input from "../input";
jest.mock("uuid", () => ({ v4: () => "00000000-0000-0000-0000-000000000000" }));

describe("should render the form element", () => {
  test("should render the form tag", async () => {
    const { container } = render(<FormComponent />);
    const formElement = container.querySelector("form");
    expect(formElement).toBeInTheDocument();
  });
  test("should render the form className", async () => {
    const { container } = render(<FormComponent />);
    const formElement = container.querySelector("form");
    expect(formElement).toBeInTheDocument();
  });
  test("should render the input element", () => {
    const { container } = render(<FormComponent />);
    const inputElement = container.querySelector("input");
    expect(inputElement).toBeInTheDocument();
  });
  test("should render the submit button", () => {
    const { container } = render(<FormComponent />);
    const buttonElement = container.querySelector("button");
    expect(buttonElement).toBeInTheDocument();
  });
});

describe("should send the form information", () => {
  test("should call form handler on submit with task information", async () => {
    const formHandler = jest.fn();
    const { container } = render(<FormComponent formHandler={formHandler} />);
    const inputElement = container.querySelector("input");
    const buttonElement = container.querySelector("button");
    fireEvent.change(inputElement, { target: { value: "this is my task" } });
    fireEvent.click(buttonElement);
    await waitFor(() =>
      expect(formHandler).toHaveBeenCalledWith({
        id: "00000000-0000-0000-0000-000000000000",
        description: "this is my task",
      })
    );
  });

  test("should send input information on enter", async () => {
    const formHandler = jest.fn();
    const { container } = render(<FormComponent formHandler={formHandler} />);
    const inputElement = container.querySelector("input");

    fireEvent.submit(inputElement);
    await waitFor(() => expect(formHandler).toHaveBeenCalledTimes(1));
  });

  test("should send input information on click submit button", async () => {
    const formHandler = jest.fn();
    const { container } = render(<FormComponent formHandler={formHandler} />);
    const buttonElement = container.querySelector("button");

    fireEvent.submit(buttonElement);
    await waitFor(() => expect(formHandler).toHaveBeenCalledTimes(1));
  });
});
