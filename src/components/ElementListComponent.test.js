import { render,screen,fireEvent,waitFor } from "@testing-library/react";
import ElementListComponent from "./ElementListTComponent";

describe("should render the list task component element",()=>{
    test("sould render the li tag",()=>{
        const {container} = render(<ElementListComponent/>);
        const listTaskElement = container.querySelector("li");
        expect(listTaskElement).toBeInTheDocument();
    })
    test("sould render the button Edit",()=>{
        render(<ElementListComponent/>);
       // fireEvent.click(screen.queryByText(/edit/i))
        const listTaskElement = screen.getByLabelText("Edit");
        expect(listTaskElement).toBeInTheDocument();
    })
    test("sould render the button Delete",()=>{
        render(<ElementListComponent/>);
        const listTaskElement = screen.queryByLabelText("Delete");
        expect(listTaskElement).toBeInTheDocument();
    })

})

    test("should print the props", async()=>{
        const mockDescription= "description";
        const mockId= "mockId";
        const mockSetInputValue= "setInputValue";
        const mockHandlerUpdate= "handlerUpdate";
        const renderScreen = render(<ElementListComponent  
        description={mockDescription} 
        id= {mockId} 
        setInputValue = {mockSetInputValue} 
        handlerUpdate = {mockHandlerUpdate}
         />);
        const listTaskDescription = await renderScreen.findByText(mockDescription);
        const listTaskId = await renderScreen.findByText(mockId);
        const listTaskSetInputValue = await renderScreen.findByText(mockSetInputValue);
        const listTaskHandlerUpdate = await renderScreen.findByText(mockHandlerUpdate);

        expect(listTaskDescription).toBeInTheDocument();
        expect(listTaskId).toBeInTheDocument();
        expect(listTaskSetInputValue).toBeInTheDocument();
        expect(listTaskHandlerUpdate).toBeInTheDocument();
       
    })
describe("should test all the functions",()=>{
    test("should print the prop value and onchange", async()=>{
        const mockValue = "value";
        const mockOnchange = "onChange";
        const renderScreen = render(<ElementListComponent />)
        const inputEdit = await renderScreen.findByText(mockValue)
        const onChangeElement = await renderScreen.findByText(mockOnchange)
      
        fireEvent.submit(inputEdit);
        await waitFor(()=> 
            expect(inputEdit).toHaveBeenCalledTimes(1))
        fireEvent.submit(onChangeElement);
        await waitFor(()=> 
            expect(onChangeElement).toHaveBeenCalledTimes(1))
        

        })
})
