import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

export const ProfilePage = () => {
  const { user } = useAuth0();
  console.log("this is the user's info");
  if (!user) {
    return null;
  }
  return (
    <div>
      <h1>Welcome to your profile!</h1>
      <h2>Name: {user.name}</h2>
      <h2>Email: {user.email}</h2>
    </div>
  );
};
