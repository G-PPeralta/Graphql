import { gql, useQuery } from "@apollo/client";
import { NewUserForm } from "./components/NewUserForm";

type User = {
  id: string;
  name: string;
};

const GET_USERS = gql`
  query {
    users {
      id
      name
    }
  }
`;

function App() {
  const { data, loading } = useQuery<{ users: User[] }>(GET_USERS);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <NewUserForm />
      <ul>
        {data?.users.map((user: User) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
