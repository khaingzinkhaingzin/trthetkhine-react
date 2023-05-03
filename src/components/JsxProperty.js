function toUpper(str)
{
    return str.toUpperCase();
}

function Sample({data})
{
    return (<div style={{backgroundColor: 'blue', color: 'white'}}>
        {toUpper(data.title)}
    </div>);
}

function AnotherSample({title, message})
{
    return (<div>
        {title}
        {message}
    </div>);
}

export default function JsxProperty()
{
    let avatar = {
        title: 'Something',
        message: 'Message'
    };

    return (<div>
        Demo
        {/* <Sample data={avatar} /> */}
        <AnotherSample {...avatar} />
    </div>);
}