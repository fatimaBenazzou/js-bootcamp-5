import UserCard from "./UserCard";

const users = [
  {
    name: "Fatima",
    job: "Web dev",
    location: "GMC, alger, Algeria",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Melissa",
    job: "Web dev",
    location: "GMC, alger, Algeria",
    avatar: "https://i.pravatar.cc/150?img=4",
  },
  {
    name: "Meissa",
    job: "Web dev",
    location: "GMC, alger, Algeria",
    avatar: "https://i.pravatar.cc/150?img=7",
  },
  {
    name: "Mohamed",
    job: "Web dev",
    location: "GMC, alger, Algeria",
    avatar: "https://i.pravatar.cc/150?img=25",
  },
  {
    name: "Walid",
    job: "Web dev",
    location: "GMC, alger, Algeria",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Amine",
    job: "Web dev",
    location: "GMC, alger, Algeria",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Said",
    job: "Web dev",
    location: "GMC, alger, Algeria",
    avatar: "https://i.pravatar.cc/150?img=15",
  },
  {
    name: "Zakaria",
    job: "Web dev",
    location: "GMC, alger, Algeria",
    avatar: "https://i.pravatar.cc/150?img=9",
  },
  {
    name: "Nassim",
    job: "Web dev",
    location: "GMC, alger, Algeria",
    avatar: "https://i.pravatar.cc/150?img=10",
  },
];

export default function UserList() {
  return (
    <ul>
      {users.map((user, i) => (
        <UserCard key={"user " + i} user={user} />
      ))}
    </ul>
  );
}
