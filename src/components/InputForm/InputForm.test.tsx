import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest"
import InputForm from "./InputForm";

describe("Testing InputForm component", () => {

    const renderInputForm = () => {
        return render(<InputForm />);
    };

    test("renders the form", () => {
        renderInputForm();

        expect(screen.getByRole("button", { name: /calculate/i })).toBeInTheDocument();
    })
})