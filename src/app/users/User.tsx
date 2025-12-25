import { getUser } from '../actions';

export default async function User({ id }: { id: string }) {
    const user = await getUser(id);
    return (
        <div>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
        </div>
    );
};
