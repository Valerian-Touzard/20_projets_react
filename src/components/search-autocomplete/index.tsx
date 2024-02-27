import React, { useEffect, useState } from "react";

const SearchAutoComplete = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  const fetchListOfUsers = async () => {
    try {
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();

      if (data && data.users && data.users.length) {
        setUsers(data);
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
