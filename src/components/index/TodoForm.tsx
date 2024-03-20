import { useState } from "react"
import { ITodoCardProps } from "./TodoCard"

interface ITodoFormProps {
    setTodo: React.Dispatch<React.SetStateAction<ITodoCardProps[]>>
}

const TodoForm:React.FC<ITodoFormProps> = ({
    setTodo
}) => {

    const [todoText, setTodoText] = useState<string>("");

    // submit text
    const submit_todo = (event:React.FormEvent<HTMLFormElement>):void => {
        // prevent default of form
        event.preventDefault();

        // check if there is a text
        console.log("HIT")

        if (!/^\s+$/.test(todoText)) {
            // empty text when done
            console.log("GASD")
            setTodoText(""); 
        }
    }

    return (
        <form onSubmit={submit_todo}>
            <input value={todoText} onChange={event => setTodoText(event.target.value)} type="text" />
            <input type="submit" value="Add" />
        </form>
    )
}

export default TodoForm;