import React, { useEffect, useState } from "react";


const GithubProfileFinder = () => {
  const [username, setUsername] = useState("vtouzard");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  /**
   * Permet de récuperer les informations des profiles des utilisateurs de github
   */
  const fetchGithubUserData = async () => {
    const res = await fetch(`https://api.github.com/users/${username}`);

    const data = await res.json();
    if(data) {
        setUserData(data);
        setLoading(false);
    }
  };

  const handleSubmit = () => {};


  if(loading) {
        return <h1>Loading Data! Please wait</h1>
  }
  
  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          type="text"
          name="search-by-username"
          placeholder="Search Github Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
    </div>
  );
};

export default GithubProfileFinder;
