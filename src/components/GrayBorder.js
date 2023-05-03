import './GrayBorder.css';

// Higher order component HOC coz component receive component as property 
export default function GrayBorder(props)
{
    return (<div className={"gray-border"}>
        {props.children}
    </div>);
}