import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const CREATE_USER = gql`
  mutation ($name: String!) {
    createUser(name: $name) {
      id
      name
    }
  }
`;

export function NewUserForm() {
  const [name, setName] = useState("");
  const [createUser, { data, loading, error }] = useMutation(CREATE_USER);

  async function handleCreateUser(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name) return;

    await createUser({ variables: { name } });

    console.log(data);
  }

  return (
    <form onSubmit={handleCreateUser}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Create User</button>
    </form>
  );
}
