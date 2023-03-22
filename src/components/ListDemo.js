function ToDo({todo})
{
    let btnClickHandler = () => {
        console.log('Btn clicked', todo);
    };

    return (<div>
        {todo.title}
        <button 
            className={"btn btn-primary"}
            onClick={btnClickHandler}>
                Click me
        </button>
    </div>);
}

export default function ListDemo()
{
    let todos = [
        {
            id: 1,
            title: 'Task 1',
        },
        {
            id: 2,
            title: 'Task 2',
        },
    ];

    return (<div>
        To Do List
        {
            todos.map(todo => 
                        <ToDo 
                            key={todo.id} 
                            todo={todo} 
                        />)
        }
    </div>);
}