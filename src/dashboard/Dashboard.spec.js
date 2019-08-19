// Test away

import React from "react";
import ReactDOM from 'react-dom';
import { render, fireEvent, act } from "@testing-library/react";
import Dashboard from "./Dashboard";     

it('dashboard renders controls and display', () => {
    const { container } = render(<Dashboard />);
    const controls = container.querySelector('.controls.panel');
    expect(controls).toBeTruthy();
});