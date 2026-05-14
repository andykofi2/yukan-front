import { NavLink } from "react-router-dom";
import HeroVisual from "../components/HeroVisual";
import JoinForm from "../components/JoinForm";
import { perks, socials } from "../data/siteContent";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Yukan Music</p>
          <h1>
            Private drops,
            <br />
            early access.
          </h1>
          <p className="hero-text">
            Join the list for unreleased music, private streaming links, and first access to the
            next Yukan release before the public rollout.
          </p>

          <div className="hero-actions">
            <NavLink className="primary-link" to="/join">
              Get early access
            </NavLink>
            <NavLink className="secondary-link" to="/music">
              Hear the latest
            </NavLink>
          </div>

          <div className="perk-row">
            {perks.map((perk) => (
              <div key={perk} className="perk-pill">
                <span className="perk-dot" />
                <span>{perk}</span>
              </div>
            ))}
          </div>
        </div>

        <HeroVisual />
      </section>

      <section className="trust-strip">
        <p>Built for listeners who want the link before release day.</p>
      </section>

      <section className="content-grid">
        <article className="capture-card">
          <div className="section-heading">
            <p className="eyebrow">Get Access</p>
            <h3>Unlock the private link</h3>
          </div>

          <p className="section-copy">
            Leave your details for early access to new music, unreleased previews, and direct
            updates based on where you are.
          </p>

          <JoinForm />

          <div className="offer-card">
            <p className="offer-label">What you get</p>
            <ul>
              <li>Exclusive unreleased track access</li>
              <li>Private streaming links before release day</li>
              <li>Priority notice for drops, visuals, and announcements</li>
            </ul>
          </div>
        </article>

        <aside className="listen-card">
          <div className="section-heading">
            <p className="eyebrow">Listen</p>
            <h3>Start with the sound</h3>
          </div>

          <div className="player-shell">
            <img
              src="/assets/yukan1.png"
              alt="Yukan cover art"
              className="player-image"
            />
          </div>

          <p className="player-note">
            Swap this embed for the live release whenever needed. The page is already structured
            for Netlify hosting.
          </p>

          <div className="social-stack">
            {socials.map((item) => (
              <a
                key={item.label}
                className="social-card"
                href={item.href}
                target="_blank"
                rel="noreferrer"
              >
                <span>{item.label}</span>
                <span className="arrow">↗</span>
              </a>
            ))}
          </div>
        </aside>
      </section>
    </>
  );
}
