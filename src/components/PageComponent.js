import './PageComponent.css';

export function Profile({image})
{
    return (<div>
        <img
            className={"avatar"}
            src={image}
            alt="Katherine Johnson"
        />
    </div>);
}

export function Header({profile}) // property is for just read only
{
    return (<div>
        <h1>{profile.title}</h1>
        <Profile image={profile.image} />
    </div>);
}

// Named Export 
export function Body()
{
    return (<div>
        <h1>Body</h1>
    </div>);
}

export function Footer({message='Footer'}) // default property
{
    return (<div>
        <h1>{message}</h1>
    </div>);
}

// Compose smaller components into bigger component 
// Default Export 
export default function PageComponent()
{
    let profile = {
        name: 'Katherine Johnson',
        image: 'https://i.imgur.com/MK3eW3As.jpg'
    };

    return (<div>
        <Header profile={profile} />
        <Body/>
        <Footer message={'Some footer displayed at bottom.'} />
    </div>);
}