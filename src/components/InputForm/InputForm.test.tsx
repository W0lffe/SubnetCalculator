import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest"
import InputForm from "./InputForm";

describe("Testing InputForm component", () => {

    const renderInputForm = () => {
        return render(<InputForm />);
    };

    test("renders the form with submit button", () => {
        renderInputForm();

        expect(screen.getByRole("button", { name: /calculate/i })).toBeInTheDocument();
    })

    test("renders correct number of FormInputItem components", () => {
        renderInputForm();
        const formItems = screen.getAllByRole("textbox"); 
        const selects = screen.getAllByRole("combobox"); 

        expect(formItems.length + selects.length).toBe(2); 
    });
    
})