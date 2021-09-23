import { fireEvent, render, waitFor } from "@testing-library/react";
import Input from "./input";

test("input renders alone", async () => {
  const { container } = render(<Input />);
  const inputElement = container.querySelector("input");
  expect(inputElement).toBeInTheDocument();
});

test("input renders whit ID assigned", async () => {
  const inputID = "input-id-ex";
  const { container } = render(<Input id={inputID} />);
  const inputElement = container.querySelector(`#${inputID}`);
  expect(inputElement).toBeInTheDocument();
});

test("input should change the value when you type", () => {
  const inputID = "input-id-ex";
  const { container } = render(<Input id={inputID} />);
  const inputElement = container.querySelector(`#${inputID}`);
  expect(inputElement.value).toBe(""); // empieza vacio
  fireEvent.change(inputElement, { target: { value: "hello" } });
  expect(inputElement.value).toBe("hello");
});

test("input should return the value", async () => {
  const inputID = "input-id-ex";
  const inputHandler = jest.fn();
  const { container } = render(<Input id={inputID} handler={inputHandler} />);
  const inputElement = container.querySelector(`#${inputID}`);
  fireEvent.change(inputElement, { target: { value: "hello" } });
  expect(inputElement.value).toBe("hello");
  await waitFor(() => {
    expect(inputHandler).toHaveBeenCalledWith("hello");
  });
});
