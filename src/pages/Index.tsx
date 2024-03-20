import { useState } from "react";
import { ITodoCardProps } from "../components/index/TodoCard";
import TodoForm from "../components/index/TodoForm";

const Index:React.FC = () => {

    const [todos, setTodos] = useState<ITodoCardProps[]>([]);

    return (
        <div>
            <TodoForm setTodo={setTodos} />
        </div>
    )
}

export default Index;