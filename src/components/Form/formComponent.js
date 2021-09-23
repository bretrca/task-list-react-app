import React, {useState} from 'react';
import Input from '../input';
import { v4 as uuidv4 } from 'uuid';



function FormComponent({formHandler}) {
    const [inputValue,setInputValue] = useState("");


    function handleInput(event){
        event.preventDefault();
        const {value }= event.target;
        setInputValue(value);
    }

    function handleclick(event){
        event.preventDefault();
       if(inputValue!==""){
        formHandler((prevState)=>[
            ...prevState,
            {
                id: uuidv4(),
                description: inputValue
            }
        ]);
       }
        setInputValue("");
       
    }


    return (
        <>
        <form className ="Form" onSubmit = {handleclick}>
            <Input 
            id="task-input" 
            onChange = {handleInput} 
            value={inputValue}
            />
            <button className= "AddButton" onClick = {handleclick}>Add</button>
        </form>
        </>
    )
}

export default FormComponent
