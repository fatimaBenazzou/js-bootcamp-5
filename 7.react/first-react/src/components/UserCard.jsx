import UserInfo from "./UserInfo";

export default function UserCard({ user }) {
  return (
    <li>
      <UserInfo name={user.name} avatar={user.avatar} />
      <p>Job: {user.job}</p>
      <p>City: {user.location}</p>
    </li>
  );
}
