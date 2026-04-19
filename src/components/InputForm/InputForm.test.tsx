import { render, screen } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest"
import InputForm from "./InputForm";

const setCalculationResult = vi.fn();

describe("Testing InputForm component", () => {

    const renderInputForm = () => {
        return render(<InputForm setCalculationResult={setCalculationResult} isBasic={true} />);
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