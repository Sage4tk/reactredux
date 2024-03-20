import TodoCard, { ITodoCardProps } from "./TodoCard"

interface ITodoContainerProps {
    todos: Array<ITodoCardProps>,
    setTodos: React.Dispatch<React.SetStateAction<ITodoCardProps[]>>
}

const TodoContainer:React.FC<ITodoContainerProps> = ({
    todos,
    setTodos
}) => {
    return (
        <div className="w-1/4">
            <ul>
                {
                    todos.map((props) => <TodoCard key={props.id} {...props} setTodos={setTodos} />)
                }
            </ul>
        </div>
    )
}

export default TodoContainer;