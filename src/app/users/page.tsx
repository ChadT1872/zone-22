import Users from "./Users";
import { getUsers } from '../actions';

export default async function UsersPage() {
    const users = await getUsers();
    return (
        <div>
            <h1>Users</h1>
            <Users users={users} />
        </div>
    );
}
