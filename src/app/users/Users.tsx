"use client";

import { useState, useTransition } from 'react';
import Link from 'next/link';


export default function Users({ users }: { users: any[] }) {
    const [isPending, startTransition] = useTransition();
    const [filter, setFilter] = useState('');
    
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(filter.toLowerCase())
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        startTransition(() => {
            setFilter(e.target.value);
        });
    }

    return (
        <div>
            <input type="text" value={filter} onChange={handleChange} />
            {isPending && <div>Loading...</div>}
            <ul>
                {filteredUsers.map(user =>
                    <li key={user.id}>
                        <Link href={`/users/${user.id}`}>{user.name}</Link>
                    </li>
                )}
            </ul>
        </div>
    );
}