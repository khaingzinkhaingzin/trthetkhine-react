function HomeComponent()
{
    return (<div>
        <h1>Home</h1>
    </div>);
}

function LoginComponent()
{
    return (<div>
        <h1>Login</h1>
    </div>);
}

export default function ()
{
    let loggedIn = true;

    /*
    return (<div>
        {
            login ? <h1>Home</h1> : <h1>Login</h1>
        }
    </div>);
    */

    /*
    let page;
    if (loggedIn)
    {
        page = <HomeComponent/>;
    }
    else
    {
        page = <LoginComponent/>;
    }

    return page;
    */

    return loggedIn ? <HomeComponent/> : <LoginComponent/>;
}