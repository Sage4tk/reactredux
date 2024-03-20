import { useState } from "react"
import { ITodoCardProps } from "./TodoCard"
import { v4 } from "uuid"

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

        // check if there is a text otherwiser alse
        if (todoText) {
            setTodo((state) => [
                ...state,
                {
                    id: v4(),
                    task: todoText,
                    done: false
                }
            ])
        }

        if (!todoText) {
            alert("Empty input")
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