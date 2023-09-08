import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Triangle from './Triangle';

describe('Unit test of triangle',()=>{
    test('Cal area of triangle:',()=>{
      const height = 10;
      const width = 15;
      const result = (height*width) /2;
      render(<Triangle height={height} width={width}/>)
      expect(screen.getByText(`Area: ${result}`)).toBeInTheDocument()
    })
})