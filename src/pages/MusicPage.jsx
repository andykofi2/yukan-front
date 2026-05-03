import PageHero from "../components/PageHero";

export default function MusicPage() {
  return (
    <>
      <PageHero
        eyebrow="Music"
        title="Current sound, private links, and the next release window."
        body="Use this page to hold the main streaming embed, highlight the latest single, and point fans toward early-access signup."
      />

      <section className="page-grid page-grid-wide">
        <article className="info-card info-card-large">
          <div className="player-shell">
            <iframe
              title="Yukan Music Player"
              className="player-frame"
              src="https://open.spotify.com/embed/track/4cOdK2wGLETKBW3PvgPWqT?utm_source=generator"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </article>
        <article className="info-card">
          <h3>What fans get here</h3>
          <p>Current release links, rollout updates, and a clean path into the private list.</p>
        </article>
      </section>
    </>
  );
}
