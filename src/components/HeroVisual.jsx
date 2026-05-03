import { useState } from "react";
import { floatingPlatforms } from "../data/siteContent";

export default function HeroVisual() {
  const [photoLoaded, setPhotoLoaded] = useState(false);

  return (
    <div className="hero-visual">
      <div className="visual-stage">
        {floatingPlatforms.map((platform) => (
          <div key={platform.label} className={`platform-badge ${platform.className}`}>
            {platform.label}
          </div>
        ))}

        <div className="artist-card">
          <div className="artist-photo-shell">
            <img
              className="artist-photo"
              src="/assets/pic1.png"
              alt="Yukan promo visual"
              onLoad={() => setPhotoLoaded(true)}
              onError={() => setPhotoLoaded(false)}
            />
            <div className={`artist-photo-fallback${photoLoaded ? " is-hidden" : ""}`}>
              <span>Drop `pic1.png` into `public/assets`</span>
            </div>
          </div>

          <div className="overlay-ticket">
            <p>private access</p>
            <div className="ticket-list">
              <span>unreleased track</span>
              <span>drop alert first</span>
              <span>visuals + updates</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
