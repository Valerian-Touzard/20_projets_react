import React, { useEffect, useState } from "react";
import User from "./user";


export type UserData = {
    avatar_url: string,
    followers: number,
    following: number,
    public_repos: number,
    name?: string,
    login: string,
    created_at: string;
}

const GithubProfileFinder = () => {
  const [username, setUsername] = useState("vtouzard");
  const [userData, setUserData] = useState<UserData>();
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
        setUsername('')
    }
  };

  /**
   * Fonction appeller au clique sur le bouton 'Search'
   */
  const handleSubmit = () => {
    fetchGithubUserData()
  };


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
      {
        userData !== undefined && <User user={userData} />
      }
    </div>
  );
};

export default GithubProfileFinder;
