import React, { useEffect, useState } from "react";

type User = {
  firstName: string;
};

const SearchAutoComplete = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<string[]>([]);
  const [error, setError] = useState<Error>();
  const [searchParam, setSearchParam] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState<string[]>([]);

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
        setUsers(data.users.map((user: User) => user.firstName));
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.error(error as Error);
      setError(error as Error);
    }
  };

  /**
   * Permet de filtrer les data en fonction des modifications apporter par l'uilisateur dans l'input
   * @param e HTMLInputElement
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData = users && users.length ? users.filter((user) => user.toLowerCase().indexOf(query) > -1)
      :["erreur"];
      setFilteredUsers(filteredData);
      setShowDropDown(true);
      console.log(filteredUsers, filteredData);
    } else {
      setShowDropDown(false);
    }
  };

  if (error) {
    return <div>An error ocured: {error.message}</div>;
  }

  return (
    <div className="search-autocompete-container">
      <input
        value={searchParam}
        onChange={handleChange}
        name="search-users"
        type="text"
        placeholder="Search Users here..."
      />
    </div>
  );
};

export default SearchAutoComplete;
