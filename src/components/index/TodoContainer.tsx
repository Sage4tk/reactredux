import TodoCard, { ITodoCardProps } from "./TodoCard"

interface ITodoContainerProps {
    todos: Array<ITodoCardProps>
}

const TodoContainer:React.FC<ITodoContainerProps> = ({
    todos
}) => {
    return (
        <div>
            <ul>
                {
                    todos.map((props) => <TodoCard {...props} />)
                }
            </ul>
        </div>
    )
}

export default TodoContainer;