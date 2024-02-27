import React from "react";
import { UserData } from ".";

type Props = {
  user: UserData
}

const User = ({user}: Props) => {
  return (
    <div className="user">
      <div>
        <img src={user.avatar_url} className="avatar" alt="User" />
      </div>
      <div>
        <a href={`https://github.com/${user.login}`}>
          {user.name || user.login}
        </a>
      </div>
    </div>
  );
};

export default User;
