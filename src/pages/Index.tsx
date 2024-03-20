import { useState } from "react";
import { ITodoCardProps } from "../components/index/TodoCard";
import TodoForm from "../components/index/TodoForm";
import TodoContainer from "../components/index/TodoContainer";

const Index:React.FC = () => {

    const [todos, setTodos] = useState<ITodoCardProps[]>([]);

    return (
        <div>
            <TodoForm setTodo={setTodos} />
            <TodoContainer todos={todos} />
        </div>
    )
}

export default Index;