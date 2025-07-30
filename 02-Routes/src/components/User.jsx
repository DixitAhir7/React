import { useParams } from 'react-router';

export default function User() {

    const { username } = useParams();

    return (
        <div> <h1>Username is {username}</h1></div>
    )
}
