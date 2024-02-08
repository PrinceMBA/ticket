import React, { useEffect, useState } from "react";

export default function Scorer() {
  const [scorers, setScorers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchScorers = async () => {
    try {
      const apiKey = "05408f819a084d409bfa16bdbba87ddb"; // Replace with a secure way to handle API keys
      const scorersUrl =
        "https://api.football-data.org/v4/competitions/PL/scorers";

      const headers = {
        "X-Auth-Token": apiKey,
      };

      const response = await fetch(scorersUrl, {
        method: "GET",
        headers: headers,
        mode: "cors",
      });

      if (!response.ok) {
        throw new Error(
          `Scorers API request failed with status ${response.status}`
        );
      }

      const responseData = await response.json();
      setScorers(responseData.scorers);
      setLoading(false);
      setError(null);
    } catch (error) {
      console.error("Error fetching scorers:", error);
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchScorers();
  }, []); // If you have dependencies, add them to the dependency array

  if (loading) {
    return <div style={{ textAlign: "center" }}>Loading...</div>;
  }

  if (error) {
    return (
      <div style={{ textAlign: "center", color: "red" }}>
        Error: {error}. Please try again later.
      </div>
    );
  }

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Top Scorers</h2>
      <table
        style={{
          width: "900px",
          borderCollapse: "collapse",
          marginTop: "10px",
          textAlign: "center",
        }}
      >
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd" }}>Player</th>
            <th style={{ border: "1px solid #ddd" }}>Team</th>
            <th style={{ border: "1px solid #ddd" }}>Goals</th>
          </tr>
        </thead>
        <tbody>
          {scorers.map((scorer) => (
            <tr key={scorer.player.id}>
              <td style={{ border: "1px solid #ddd" }}>{scorer.player.name}</td>
              <td
                style={{
                  border: "1px solid #ddd",

                  textAlign: "center",
                }}
              >
                <img
                  src={scorer.team.crest}
                  alt={`Team Logo: ${scorer.team.name}`}
                  style={{ height: "30px" }}
                />
              </td>
              <td style={{ border: "1px solid #ddd" }}>{scorer.goals}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
