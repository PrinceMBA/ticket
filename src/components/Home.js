// import React, { useState, useEffect } from "react";

// const headerStyle = {
//   fontSize: "24px",
//   margin: "20px 0",
//   textAlign: "center",
// };

// const loadingStyle = {
//   fontSize: "18px",
//   color: "#888",
// };

// const errorStyle = {
//   fontSize: "18px",
//   color: "red",
// };

// const listStyle = {
//   listStyleType: "none",
//   padding: 0,
// };

// const listItemStyle = {
//   display: "flex",
//   justifyContent: "space-between",
//   borderBottom: "1px solid #ccc",
//   padding: "10px 0",
//   margin: "0px 200px 0px 200px",
// };

// const buttonStyle = {
//   backgroundColor: "#0074D9",
//   color: "#fff",
//   border: "none",
//   padding: "5px 10px",
//   cursor: "pointer",
// };

// export default function Home({ selectedMatches, setMatchesSelected }) {
//   const [matches, setMatches] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

// const fetchMatches = async () => {
//   try {
//     const apiKey = "05408f819a084d409bfa16bdbba87ddb";
//     // const matchesUrl = "https://api.football-data.org/v4/matches";
//     const matchesUrl =
//       "https://api.football-data.org/v4/competitions/CL/matches";

//     const headers = {
//       "X-Auth-Token": apiKey,
//     };

//     const response = await fetch(matchesUrl, {
//       method: "GET",
//       headers: headers,
//       mode: "cors",
//     });

//     if (!response.ok) {
//       throw new Error(
//         `Matches API request failed with status ${response.status}`
//       );
//     }

//     const responseData = await response.json();
//     setMatches(responseData.matches);
//     setLoading(false);
//     setError(null);
//   } catch (error) {
//     setError(error.message);
//   }
// };

//   useEffect(() => {
//     fetchMatches();
//   }, []);

//   const handleMatchSelection = (match) => {
//     const matchIndex = selectedMatches.findIndex(
//       (selectedMatch) => selectedMatch.id === match.id
//     );

//     if (matchIndex === -1) {
//       setMatchesSelected([...selectedMatches, match]);
//     } else {
//       const updatedMatchesSelected = [...selectedMatches];
//       updatedMatchesSelected.splice(matchIndex, 1);
//       setMatchesSelected(updatedMatchesSelected);
//     }
//   };

//   return (
//     <div>
//       <h1 style={headerStyle}>Football Matches</h1>
//       {loading && <p style={loadingStyle}>Loading data...</p>}
//       {error && <p style={errorStyle}>Error: {error}</p>}
//       <ul style={listStyle}>
//         {matches.map((match) => (
//           <li key={match.id} style={listItemStyle}>
//             <div>
//               <img
//                 src={match.homeTeam.crest}
//                 alt={`${match.homeTeam.shortName} Logo`}
//                 style={{ height: "30px", marginRight: "10px" }}
//               />
//               {match.homeTeam.name} vs{" "}
//               <img
//                 src={match.awayTeam.crest}
//                 alt={`${match.awayTeam.shortName} Logo`}
//                 style={{ height: "30px", marginRight: "10px" }}
//               />
//               {match.awayTeam.name}
//             </div>
//             <button
//               style={buttonStyle}
//               onClick={() => handleMatchSelection(match)}
//             >
//               {selectedMatches.some(
//                 (selectedMatch) => selectedMatch.id === match.id
//               )
//                 ? "Deselect"
//                 : "Select"}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// Home.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addSelectedMatch,
  removeSelectedMatch,
  selectSelectedMatches,
} from "../redux/slice/matchesSlice";

const headerStyle = {
  fontSize: "24px",
  margin: "20px 0",
  textAlign: "center",
};

const loadingStyle = {
  fontSize: "18px",
  color: "#888",
};

const errorStyle = {
  fontSize: "18px",
  color: "red",
};

const listStyle = {
  listStyleType: "none",
  padding: 0,
};

const listItemStyle = {
  display: "flex",
  justifyContent: "space-between",
  borderBottom: "1px solid #ccc",
  padding: "10px 0",
  margin: "0px 200px 0px 200px",
};

const buttonStyle = {
  backgroundColor: "#0074D9",
  color: "#fff",
  border: "none",
  padding: "5px 10px",
  cursor: "pointer",
};

const Home = () => {
  const dispatch = useDispatch();
  const selectedMatches = useSelector(selectSelectedMatches);
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // const fetchMatches = async () => {
  //   // ... (your existing fetchMatches logic)
  // };

  const fetchMatches = async () => {
    try {
      const apiKey = "05408f819a084d409bfa16bdbba87ddb";
      // const matchesUrl = "https://api.football-data.org/v4/matches";
      const matchesUrl =
        "https://api.football-data.org/v4/competitions/CL/matches";

      const headers = {
        "X-Auth-Token": apiKey,
      };

      const response = await fetch(matchesUrl, {
        method: "GET",
        headers: headers,
        mode: "cors",
      });

      if (!response.ok) {
        throw new Error(
          `Matches API request failed with status ${response.status}`
        );
      }

      const responseData = await response.json();
      setMatches(responseData.matches);
      setLoading(false);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchMatches();
  }, []);

  const handleMatchSelection = (match) => {
    if (
      selectedMatches.some((selectedMatch) => selectedMatch.id === match.id)
    ) {
      dispatch(removeSelectedMatch(match));
    } else {
      dispatch(addSelectedMatch(match));
    }
  };

  return (
    <div>
      <h1 style={headerStyle}>Football Matches</h1>
      {loading && <p style={loadingStyle}>Loading data...</p>}
      {error && <p style={errorStyle}>Error: {error}</p>}
      <ul style={listStyle}>
        {matches.map((match) => (
          <li key={match.id} style={listItemStyle}>
            <div>
              <img
                src={match.homeTeam.crest}
                alt={`${match.homeTeam.shortName} Logo`}
                style={{ height: "30px", marginRight: "10px" }}
              />
              {match.homeTeam.name} vs{" "}
              <img
                src={match.awayTeam.crest}
                alt={`${match.awayTeam.shortName} Logo`}
                style={{ height: "30px", marginRight: "10px" }}
              />
              {match.awayTeam.name}
            </div>
            <button
              style={buttonStyle}
              onClick={() => handleMatchSelection(match)}
            >
              {selectedMatches.some(
                (selectedMatch) => selectedMatch.id === match.id
              )
                ? "Deselect"
                : "Select"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
