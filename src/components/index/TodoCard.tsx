export interface ITodoCardProps {
    id: string,
    task: string,
    setTodos?: React.Dispatch<React.SetStateAction<ITodoCardProps[]>>,
    done: boolean
}

const TodoCard:React.FC<ITodoCardProps> = ({
    id,
    task,
    done,
    setTodos
}) => {

    const change_check = ():void => {

        if (setTodos) {
            // find value of id and invert
            setTodos((state) => {
                return state.map(item => {
                    if (item.id === id) return {
                        ...item,
                        done: !item.done
                    }

                    return item;
                })
            });

        }
    }

    return (
        <div className="flex flex-row items-center justify-between px-4 py-2 border-b">
            <p className="mr-4">{task}</p>

            <input onChange={change_check} type="checkbox" checked={done}  />
        </div>
    )
}

export default TodoCard;