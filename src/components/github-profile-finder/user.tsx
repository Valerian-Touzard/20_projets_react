import React from "react";
import { UserData } from ".";

type Props = {
  user: UserData;
};

const User = ({ user }: Props) => {
  const createdDate = new Date(user.created_at);

  return (
    <div className="user">
      <div>
        <img src={user.avatar_url} className="avatar" alt="User" />
      </div>
      <div>
        <a href={`https://github.com/${user.login}`}>
          {user.name || user.login}
        </a>
        <p>
          User joined on{" "}
          {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
            month: "short",
          })} ${createdDate.getFullYear()}`}
        </p>
      </div>
      <div>
        <div>
          <p>Public Repos</p>
          <p>{user.public_repos}</p>
        </div>
        <div>
          <p>Followers</p>
          <p>{user.followers}</p>
        </div>
        <div>
          <p>Following</p>
          <p>{user.following}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
