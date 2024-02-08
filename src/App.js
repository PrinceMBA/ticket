// import React, { useState, useEffect } from "react";
// import "./App.css";

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

// function App() {
//   const [matches, setMatches] = useState([]);
//   const [selectedMatches, setSelectedMatches] = useState([]);
//   const [scorers, setScorers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchMatches = async () => {
//     try {
//       const apiKey = "05408f819a084d409bfa16bdbba87ddb";
//       const matchesUrl = "https://api.football-data.org/v4/matches";

//       const headers = {
//         "X-Auth-Token": apiKey,
//       };

//       const response = await fetch(matchesUrl, {
//         method: "GET",
//         headers: headers,
//         mode: "cors",
//       });

//       if (!response.ok) {
//         throw new Error(
//           `Matches API request failed with status ${response.status}`
//         );
//       }

//       const responseData = await response.json();
//       setMatches(responseData.matches);
//       setLoading(false);
//       setError(null);
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   const fetchScorers = async () => {
//     try {
//       const apiKey = "05408f819a084d409bfa16bdbba87ddb";
//       const scorersUrl =
//         "https://api.football-data.org/v4/competitions/PL/scorers";

//       const headers = {
//         "X-Auth-Token": apiKey,
//       };

//       const response = await fetch(scorersUrl, {
//         method: "GET",
//         headers: headers,
//         mode: "cors",
//       });

//       if (!response.ok) {
//         throw new Error(
//           `Scorers API request failed with status ${response.status}`
//         );
//       }

//       const responseData = await response.json();
//       setScorers(responseData.scorers);
//       setLoading(false);
//       setError(null);
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   useEffect(() => {
//     fetchMatches();
//     fetchScorers();
//   }, []);

//   const handleMatchSelection = (match) => {
//     const matchIndex = selectedMatches.findIndex(
//       (selectedMatch) => selectedMatch.id === match.id
//     );

//     if (matchIndex === -1) {
//       setSelectedMatches([...selectedMatches, match]);
//     } else {
//       const updatedSelectedMatches = [...selectedMatches];
//       updatedSelectedMatches.splice(matchIndex, 1);
//       setSelectedMatches(updatedSelectedMatches);
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
//       <h2 style={{ textAlign: "center" }}>Selected Matches</h2>
//       <table>
//         <thead>
//           <tr>
//             <th style={{ textAlign: "center" }}>Match</th>
//             <th style={{ textAlign: "center" }}>Date</th>
//             <th style={{ textAlign: "center" }}>Price</th>
//             <th style={{ textAlign: "center" }}>Compet</th>
//             <th style={{ textAlign: "center" }}>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {selectedMatches.map((selectedMatch) => (
//             <tr key={selectedMatch.id}>
//               <td style={{ textAlign: "center" }}>
//                 <img
//                   src={selectedMatch.homeTeam.crest}
//                   alt={`Home Team Logo: ${selectedMatch.homeTeam.name}`}
//                   style={{ height: "30px", marginRight: "10px" }}
//                 />
//                 vs{" "}
//                 <img
//                   src={selectedMatch.awayTeam.crest}
//                   alt={`Away Team Logo: ${selectedMatch.awayTeam.name}`}
//                   style={{ height: "30px", marginRight: "10px" }}
//                 />
//               </td>
//               <td style={{ textAlign: "center" }}>
//                 {new Date(selectedMatch.utcDate).toLocaleString()}
//               </td>
//               <td style={{ textAlign: "center" }}>10</td>
//               <td style={{ textAlign: "center" }}>
//                 <img
//                   src={selectedMatch.competition.emblem}
//                   alt={`Team scorer Logo: ${selectedMatch.competition.name}`}
//                   style={{
//                     height: "30px",
//                   }}
//                 />
//               </td>
//               <td style={{ textAlign: "center" }}>
//                 <button
//                   style={{ backgroundColor: "red", color: "#fff" }}
//                   onClick={() => handleMatchSelection(selectedMatch)}
//                 >
//                   Cancel
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <h2 style={{ textAlign: "center" }}>Top Scorers</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Player</th>
//             <th>Team</th>
//             <th>Goals</th>
//           </tr>
//         </thead>
//         <tbody>
//           {scorers.map((scorer) => (
//             <tr key={scorer.player.id}>
//               <td>{scorer.player.name}</td>
//               <td style={{ textAlign: "center" }}>
//                 <img
//                   src={scorer.team.crest}
//                   alt={`Team Logo: ${scorer.team.name}`}
//                   style={{ height: "30px" }}
//                 />
//               </td>
//               <td>{scorer.goals}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
// import Home from "./components/Home";
// import TableMatch from "./components/TableMatch";
// import Scorer from "./components/Scorer";
// import Navbar from "./components/Navbar";

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/tableMatch" element={<TableMatch />} />
//         <Route path="/services" element={<Scorer />} />
//         {/* Uncomment and customize the following routes as needed */}
//         {/* <Route path="/item" element={<Item />} />
//         <Route path="/item/:id" element={<Details />} /> */}
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
// import Home from "./components/Home";
// import TableMatch from "./components/TableMatch";
// import Scorer from "./components/Scorer";
// import Navbar from "./components/Navbar";

// function App() {
//   // const [selectedMatches, setSelectedMatches] = useState([]);
//     const [MatchesSelected, setMatchesSelected] = useState([]);

//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route
//           path="/"
//           element={<Home setMatchesSelected={setMatchesSelected} />}
//         />
//         <Route
//           path="/tableMatch"
//           element={<TableMatch MatchesSelected={MatchesSelected} />}
//         />
//         <Route path="/scorer" element={<Scorer />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// App.js
// import React, { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
// import Home from "./components/Home";
// import TableMatch from "./components/TableMatch";
// import Scorer from "./components/Scorer";
// import Navbar from "./components/Navbar";

// function App() {
//   const [MatchesSelected, setMatchesSelected] = useState([]);

//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route
//           path="/"
//           element={<Home setMatchesSelected={setMatchesSelected} />}
//         />
//         // eslint-disable-next-line
//         <Route
//           path="/tableMatch"
//           element={<TableMatch matchesSelected={matchesSelected} />}
//         />
//         <Route path="/scorer" element={<Scorer />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import TableMatch from "./components/TableMatch";
import Scorer from "./components/Scorer";
import Navbar from "./components/Navbar";
import React, { useState } from "react";

function App() {
  const [matchesSelected, setMatchesSelected] = useState([]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              selectedMatches={matchesSelected}
              setMatchesSelected={setMatchesSelected}
            />
          }
        />
        <Route
          path="/tableMatch"
          element={
            <TableMatch
              selectedMatches={matchesSelected}
              setMatchesSelected={setMatchesSelected}
            />
          }
        />
        <Route path="/scorer" element={<Scorer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
