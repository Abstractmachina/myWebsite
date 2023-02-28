import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
import userEvent from "@testing-library/user-event";
import ProjectPage from "../components/ProjectPage";
import { MemoryRouter } from "react-router";
// import TestComponent from "path-to-test-component";

describe("ProjectPage Component", () => {
    it('renders correctly', () => {
    
        const fetchContentMock = jest.fn();
    
        render(
            <MemoryRouter>
                
            </MemoryRouter>
        
        <ProjectPage fetchProjectContent={fetchContentMock}/>);
        const main = screen.getByTestId('mainComponent');
        expect(main).toBeInTheDocument();
      });



})