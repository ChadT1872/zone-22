
export async function getUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    return res.json();
}

export async function getUser(id: string) {
    console.log('Fetching user with id:', id);
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    return res.json();
}