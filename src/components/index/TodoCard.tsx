export interface ITodoCardProps {
    id: string,
    task: string,
    done: boolean
}

const TodoCard:React.FC<ITodoCardProps> = ({
    task,
    done
}) => {
    return (
        <div>
            <p>{task}</p>

            <input type="radio" checked={done}  />
        </div>
    )
}

export default TodoCard;