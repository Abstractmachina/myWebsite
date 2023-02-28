import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
import userEvent from "@testing-library/user-event";
import CategoryCheckbox from "../components/CategoryCheckBox";
import { CategoryCheckboxState } from "../components/ProjectFilterGroup";
// import TestComponent from "path-to-test-component";


describe("CategoryCheckBox Component", () =>{
    test('renders correctly', () => {
        let state:CategoryCheckboxState = {id: '0', checkIsOn: false}
        const toggleCheck: (id?:string) => void = () => {};

        render(<CategoryCheckbox  state = {state} toggleCheckHandler={toggleCheck}/>);
        const cbox = screen.getByRole('checkbox');
        expect(cbox).toBeInTheDocument();

      });
});