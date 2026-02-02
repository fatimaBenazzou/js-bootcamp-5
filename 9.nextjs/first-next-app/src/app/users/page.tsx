// app/users/[id]/page.tsx

import Link from "next/link";

interface User {
  id: number;
  name: string;
  email: string;
  company: { name: string };
}

export default async function UsersListPage() {
  //   const [users, setUsers] = useState<User[] | null>([]);

  //   useEffect(() => {
  //     const fetchUser = async () => {
  //       const res = await fetch(`https://jsonplaceholder.typicode.com/users/`);
  //       const data = await res.json();
  //       setUsers(data);
  //     };

  //     fetchUser();
  //   }, []);

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/`);
  const users: User[] = await res.json();

  const usersList = users ? users : [];
  console.log(users);

  return (
    <ul className="p-6">
      {usersList.map((user) => (
        <li key={user.id}>
          <Link href={`/users/${user.id}`}>
            <h1>👤 {user.name}</h1>
            <p>Email: {user.email}</p>
            <p>Company: {user.company.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
