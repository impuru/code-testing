import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';


describe("Display Logic Test",()=>{
  test('Display Number & Output',()=>{
    render(<App/>)   
    expect(screen.getByTestId('number')).toBeInTheDocument()
    expect(screen.getByTestId('output')).toBeInTheDocument()
  })
  test('Display Triangle',()=>{
    render(<App/>)   
    expect(screen.getByText('Triangle Area:')).toBeInTheDocument()
  })
  
})
describe('Business Logic of triangle',()=>{
  test('Cal area of triangle:',()=>{
    const height = 10;
    const width = 15;
    const result = (height*width) /2;
    render(<App/>)

    const heightInput = screen.getByLabelText('Height:');
    const widthInput = screen.getByLabelText('Width:');

    fireEvent.change(heightInput,{
      target:{value:height}
    })
    fireEvent.change(widthInput,{
      target:{value:width}
    })
    
    expect(screen.getByText(`Area: ${result}`)).toBeInTheDocument()

  })
  test('Display Number',()=>{
    const number  = 9;
    render(<App/>)   
     const numberInput = screen.getByTestId('number')
     fireEvent.change(numberInput,{
      target:{value:number}
    })
    expect(screen.getByTestId('output')).toHaveTextContent(`1,2,3,4,5,6,7,8,9`)
  })
})

