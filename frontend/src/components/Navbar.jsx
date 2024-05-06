import { AppBar, Toolbar, styled } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Header = styled(AppBar)`
  background: #111111;
`;

const Tabs = styled(NavLink)`
  font-size: 20px;
  margin-right: 20px;
  color: inherit;
  text-decoration: none;
`;

const NavBar = ({ isAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        alert("Signed out successfully");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Header position="static">
      <Toolbar>
        <Tabs to="/">Home</Tabs>

        {isAuthenticated && (
          <>
            <Tabs to="/Voting">Voting</Tabs>
            <Tabs to="/AdminHomePage">AdminHomePage</Tabs>
            <button onClick={handleLogout}>SignOut</button>
          </>
        )
        }
      </Toolbar>
    </Header>
  );
};

export default NavBar;
