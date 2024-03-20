import { useState } from "react";
import { ITodoCardProps } from "../components/index/TodoCard";
import TodoForm from "../components/index/TodoForm";
import TodoContainer from "../components/index/TodoContainer";

const Index:React.FC = () => {

    const [todos, setTodos] = useState<ITodoCardProps[]>([]);

    return (
        <div className="flex flex-col items-center py-12">

                <h1 className="font-bold text-xl mb-4">TODO LIST</h1>
           
                <TodoForm setTodo={setTodos} />
                <TodoContainer todos={todos} setTodos={setTodos} />

        </div>
    )
}

export default Index;