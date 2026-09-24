import "./App.css";

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


      {/* HERO SECTION */}

      <section className="hero">

        <div className="hero-content">

          <div className="tagline">
            YOUR LOCAL CRICKET COMMUNITY
          </div>

          <h1>
            Find Players.
            <br />
            <span>Build Your Team.</span>
          </h1>

          <p>
            CrickSetu helps you discover cricket players
            near you, create matches and build your team
            in minutes.
          </p>


          <div className="buttons">

            <button className="primary-btn">
              Find Players →
            </button>

            <button className="secondary-btn">
              Create Match
            </button>

          </div>

        </div>


        {/* RIGHT CARD */}

        <div className="hero-card">

          <div className="cricket-icon">
            🏏
          </div>

          <h2>
            Cricket Starts Here
          </h2>

          <p>
            No team?
            <br />
            No problem.
          </p>


          <div className="stats">

            <div>
              <strong>50+</strong>
              <small>Players</small>
            </div>

            <div>
              <strong>10+</strong>
              <small>Matches</small>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default App;