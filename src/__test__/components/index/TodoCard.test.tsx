import { render, screen } from "@testing-library/react";
import TodoCard from "../../../components/index/TodoCard";

describe("TodoCard test" , () => {
    it("To do card has all the necessary elements", () => {

        render(<TodoCard id="123" task="off" done />);

        expect(screen.getByText(/off/))

    });

    it("Todo card has an input that is a checkbox", () => {

        render(<TodoCard id="123" task="off" done />);
        
        expect(screen.getByRole("checkbox"))
    })
})