// import React from "react";

// const TableMatch = ({ selectedMatches, setMatchesSelected }) => {
//   const tableHeaderStyle = { textAlign: "center" };
//   const tableCellStyle = { textAlign: "center" };

//   const handleMatchSelection = (match) => {
//     const matchIndex = selectedMatches.findIndex(
//       (selectedMatch) => selectedMatch.id === match.id
//     );

//     if (matchIndex === -1) {
//       setMatchesSelected([...selectedMatches, match]);
//     } else {
//       const updatedSelectedMatches = [...selectedMatches];
//       updatedSelectedMatches.splice(matchIndex, 1);
//       setMatchesSelected(updatedSelectedMatches);
//     }
//   };

//   return (
//     <div>
//       <h2 style={tableHeaderStyle}>Selected Matches</h2>
//       <table>
//         <thead>
//           <tr>
//             <th style={tableHeaderStyle}>Match</th>
//             <th style={tableHeaderStyle}>Date</th>
//             <th style={tableHeaderStyle}>Price</th>
//             <th style={tableHeaderStyle}>Compet</th>
//             <th style={tableHeaderStyle}>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {selectedMatches.map((selectedMatch) => (
//             <tr key={selectedMatch.id}>
//               <td style={tableCellStyle}>
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
//               <td style={tableCellStyle}>
//                 {new Date(selectedMatch.utcDate).toLocaleString()}
//               </td>
//               <td style={tableCellStyle}>10</td>
//               <td style={tableCellStyle}>
//                 <img
//                   src={selectedMatch.competition.emblem}
//                   alt={`Team scorer Logo: ${selectedMatch.competition.name}`}
//                   style={{ height: "30px" }}
//                 />
//               </td>
//               <td style={tableCellStyle}>
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
//     </div>
//   );
// };

// export default TableMatch;

// TableMatch.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeSelectedMatch,
  selectSelectedMatches,
} from "../redux/slice/matchesSlice";

const tableHeaderStyle = { textAlign: "center" };
const tableCellStyle = { textAlign: "center" };

const TableMatch = () => {
  const dispatch = useDispatch();
  const selectedMatches = useSelector(selectSelectedMatches);

  const handleMatchSelection = (match) => {
    dispatch(removeSelectedMatch(match));
  };

  return (
    <div>
      <h2 style={tableHeaderStyle}>Selected Matches</h2>
      <table>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Match</th>
            <th style={tableHeaderStyle}>Date</th>
            <th style={tableHeaderStyle}>Price</th>
            <th style={tableHeaderStyle}>Compet</th>
            <th style={tableHeaderStyle}>Action</th>
          </tr>
        </thead>
        <tbody>
          {selectedMatches.map((selectedMatch) => (
            <tr key={selectedMatch.id}>
              <td style={tableCellStyle}>
                <img
                  src={selectedMatch.homeTeam.crest}
                  alt={`Home Team Logo: ${selectedMatch.homeTeam.name}`}
                  style={{ height: "30px", marginRight: "10px" }}
                />
                vs{" "}
                <img
                  src={selectedMatch.awayTeam.crest}
                  alt={`Away Team Logo: ${selectedMatch.awayTeam.name}`}
                  style={{ height: "30px", marginRight: "10px" }}
                />
              </td>
              <td style={tableCellStyle}>
                {new Date(selectedMatch.utcDate).toLocaleString()}
              </td>
              <td style={tableCellStyle}>10</td>
              <td style={tableCellStyle}>
                <img
                  src={selectedMatch.competition.emblem}
                  alt={`Team scorer Logo: ${selectedMatch.competition.name}`}
                  style={{ height: "30px" }}
                />
              </td>
              <td style={tableCellStyle}>
                <button
                  style={{ backgroundColor: "red", color: "#fff" }}
                  onClick={() => handleMatchSelection(selectedMatch)}
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableMatch;
