

import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../../firebase";

const Adminhomepage = () => {
  const history = useHistory();
  const [voteCounts, setVoteCounts] = useState({});
  
  useEffect(() => {
    const Data = {
      candidate1: 100,
      candidate2: 150,
      candidate3: 75,
    };
    setVoteCounts(Data);
  }, []);

  

  const handleLogout = () => {
    auth.signOut().then(() => {
      sessionStorage.removeItem("adminToken"); 
      history.push("/login"); 
    }).catch((error) => {
      console.error("Error signing out:", error);
    });
  };

  return (
    <div>
      <h1>Admin Home Page</h1>
      <button onClick={handleLogout}>Logout</button>
      <div>
        <h2>Vote Counts</h2>
        <ul>
          {Object.entries(voteCounts).map(([candidate, count]) => (
            <li key={candidate}>{`${candidate}: ${count}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Adminhomepage;
