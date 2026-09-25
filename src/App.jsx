import "./App.css";

const players = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "All-Rounder",
    level: "Intermediate",
    distance: "1.2 km",
    batting: "Right Hand",
    bowling: "Right Arm Medium",
  },
  {
    id: 2,
    name: "Aman Verma",
    role: "Fast Bowler",
    level: "Advanced",
    distance: "1.8 km",
    batting: "Right Hand",
    bowling: "Right Arm Fast",
  },
  {
    id: 3,
    name: "Arjun Singh",
    role: "Batsman",
    level: "Intermediate",
    distance: "2.1 km",
    batting: "Left Hand",
    bowling: "Right Arm Spin",
  },
  {
    id: 4,
    name: "Rohit Kumar",
    role: "Wicket Keeper",
    level: "Beginner",
    distance: "2.7 km",
    batting: "Right Hand",
    bowling: "—",
  },
];

function App() {
  return (
    <div>
      {/* NAVBAR */}

      <nav className="navbar">
        <div className="logo">
          🏏 Crick<span>Setu</span>
        </div>

        <div className="nav-links">
          <button>Home</button>
          <button>Nearby Players</button>
          <button>Create Match</button>
          <button>Profile</button>
        </div>
      </nav>

      {/* NEARBY PLAYERS */}

      <main className="players-page">
        <div className="players-header">
          <div>
            <p className="tagline">CRICKET COMMUNITY</p>

            <h1>
              Players <span>Near You</span>
            </h1>

            <p className="players-description">
              Find cricket players around your area and build your team.
            </p>
          </div>

          <button className="location-btn">
            📍 Your Location
          </button>
        </div>

        {/* PLAYER CARDS */}

        <div className="players-grid">
          {players.map((player) => (
            <div className="player-card" key={player.id}>
              
              <div className="player-top">
                <div className="player-avatar">
                  {player.name.charAt(0)}
                </div>

                <div>
                  <h2>{player.name}</h2>
                  <p>{player.role}</p>
                </div>
              </div>

              <div className="player-info">
                <div>
                  <span>Level</span>
                  <strong>{player.level}</strong>
                </div>

                <div>
                  <span>Distance</span>
                  <strong>📍 {player.distance}</strong>
                </div>
              </div>

              <div className="player-skills">
                <p>
                  🏏 {player.batting}
                </p>

                <p>
                  ⚡ {player.bowling}
                </p>
              </div>

              <button className="invite-btn">
                Invite to Team
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;