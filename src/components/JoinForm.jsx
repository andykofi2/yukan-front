import { countries } from "../data/siteContent";

export default function JoinForm() {
  return (
    <form
      className="capture-form"
      name="fan-capture"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="fan-capture" />
      <input type="hidden" name="bot-field" />

      <label>
        <span>Email address</span>
        <input type="email" name="email" placeholder="you@example.com" required />
      </label>

      <div className="inline-fields">
        <label>
          <span>Country</span>
          <select name="country" defaultValue="" required>
            <option value="" disabled>
              Select country
            </option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span>City</span>
          <input type="text" name="city" placeholder="Optional" />
        </label>
      </div>

      <label className="checkbox-row">
        <input type="checkbox" name="updates" defaultChecked />
        <span>Send me unreleased music, early drop alerts, and private links.</span>
      </label>

      <button type="submit" className="submit-button">
        Join the list
      </button>
    </form>
  );
}
