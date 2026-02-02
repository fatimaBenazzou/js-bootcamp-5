// app/users/[id]/page.tsx

interface User {
  id: number;
  name: string;
  email: string;
  company: { name: string };
}

export default async function UserPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  //   const { id } = useParams<{ id: string }>();
  const { id } = await params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user: User = await res.json();
  //   const [user, setUser] = useState<User | null>(null);

  //   useEffect(() => {
  //     const fetchUser = async () => {
  //       const res = await fetch(
  //         `https://jsonplaceholder.typicode.com/users/${id}`,
  //       );
  //       const data = await res.json();
  //       setUser(data);
  //     };

  //     if (id) fetchUser();
  //   }, [id]);

  if (!user) return <p>User not found.</p>;

  return (
    <div className="p-6">
      <h1>👤 {user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Company: {user.company.name}</p>
    </div>
  );
}
