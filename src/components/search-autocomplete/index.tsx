import React, { useEffect, useState } from "react";

type User = {
    firstName: string;
}

const SearchAutoComplete = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  /**
   * Permet de récupérer les prénoms, données depuis l'API dummyJSOn
   */
  const fetchListOfUsers = async () => {
    try {
      // Appel del'API
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();

      // On vérifie qi on obtien bien des données
      if (data && data.users && data.users.length) {
        setUsers(data.users.map((user: User) => user.firstName ));
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.error(error as Error);
      setError(error as Error);
    }
  };

  if (error) {
    return <div>An error ocured: {error.message}</div>;
  }

  return (
    <div className="search-autocompete-container">
      <input
        name="search-users"
        type="text"
        placeholder="Search Users here..."
      />
    </div>
  );
};

export default SearchAutoComplete;
