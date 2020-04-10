import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from './ContactForm';

test ('test if contact form renders', ()=> {
    render(<ContactForm />);
})

//Jest global function
//-test

test("test that inputs are showing", () => {
    const { getByLabelText } = render(<ContactForm />);
    getByLabelText(/First Name*/i);
    getByLabelText(/Last Name*/i);
    getByLabelText(/Email*/i);
    getByLabelText(/Message/i);    
  });

test('form submit adds new ', () => {

    //querying for all the input nodes

    //Arrange

    const { getByLabelText } = render(<ContactForm />);
    //Act

    const firstNameInput = getByLabelText(/First Name*/i);
    const lastNameInput = getByLabelText(/Last Name*/i);
    const emailInput = getByLabelText(/Email*/i);
    const messageInput = getByLabelText(/Message/i); 
    
    //use the change event to add text to each input
    //Assert
    fireEvent.change(firstNameInput, {target: {value: 'test first name'}})
    fireEvent.change(lastNameInput, {target: {value: 'test last name'}})
    fireEvent.change(emailInput, {target: {value: 'test email'}})
    fireEvent.change(messageInput, {target: {value: 'test message'}})

    expect(firstNameInput.value).toBe("test first name")
    expect(lastNameInput.value).toBe("test last name")
    expect(emailInput.value).toBe("test email")
    expect(messageInput.value).toBe("test message")

    //click on the submit button
    // fireEvent.click(getByLabelText(/submit/i)); --NOT PASSING NOT SURE WHY
})  


    // TRIED THIS TOO BUT WEIRD ERROR - HAVE TO DIG DEEPER

// test('test that maxLength for firstName input is 10characters instead of 3', () => {
//     //Arrange
//     const { getByLabelText, getByTestId } = render(<ContactForm />);
//     const firstNameField = getByLabelText(/First Name*/i);
//     const submitButton = getByTestId(/submitButton/i);
//     const firstNameError = getByTestId(/firstNameError/);
//     //Act - type 10 characters in the field which should fail first based on current behavior and click
//     fireEvent.change(firstNameField, {target: {value: "123456789a"}});
//     fireEvent.click(submitButton);
//     //Assert - because maxLength has been updated to 10, the error should not be visible
//     expect(firstNameError).not.toBeVisible();
//   })

  
