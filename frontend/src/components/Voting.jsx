import { auth } from 'firebase-admin';
import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VotingPage = () => {
  const [voted, setVoted] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState('');
  const candidates = ['Candidate A', 'Candidate B', 'Candidate C']; // Example candidates

  const handleVote = () => {
    if (voted) {
      alert('You already voted');
    } else {
      // Perform vote submission logic here
      alert(`Vote submitted for ${selectedCandidate}`);
      setVoted(true);
    }
  };

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
    <div>
      <h2>Voting Page</h2>
      <ul>
        {candidates.map((candidate, index) => (
          <li key={index}>
            <input type="radio" name="candidate" value={candidate} checked={selectedCandidate === candidate} onChange={() => setSelectedCandidate(candidate)} />
            {candidate}
          </li>
        ))}
      </ul>
      <button onClick={handleVote}>Vote</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default VotingPage;
