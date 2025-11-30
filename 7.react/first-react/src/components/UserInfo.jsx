import React from "react";

export default function UserInfo({ name, avatar }) {
  return (
    <div>
      <img src={avatar} alt="" />
      <h2>{name} </h2>
    </div>
  );
}
