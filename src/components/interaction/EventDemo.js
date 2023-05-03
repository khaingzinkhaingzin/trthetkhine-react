export function ParentEvent()
{
    let clickHandler = () => {
        console.log('Click handler');
    };

    return <EventDemo handler={clickHandler} />;
}

export default function EventDemo({handler})
{
    return (<div>
        <button 
            className={"btn btn-primary"}
            onClick={handler}>
            Click me
        </button>
    </div>);
}