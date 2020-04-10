import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});


//keep commented out and only use when you need to see what other functions you can use
// const result = render(<App/>);
// console.log(result)



//Arrange, Act, Assert



//Arrange
test("see if there is a text - My App text for test", () => {
  //This renders components in virtual DOM
  const { getByText } = render(<App/>);  

  //Act
  //grab the element you want to test and check if it has the text by 
  const header = getByText(/My App text for test/i); 
  // i means case insesitive which basically means it looks for the
  // text regardless and it doesn't care about whether or not they are capitalized

  //Assertion
  expect(header).toBeInTheDocument();
  expect(header).toBeTruthy();
  expect(header).not.toBeFalsy();
})




