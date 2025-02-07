import { Link } from "react-router-dom";

export default function TorqueMeeting() {
  const checkMeeting = () => {
    // If today is monday thursday or saturday then yes
    const today = new Date();
    const day = today.getDay();
    if (day === 7) {
      return "No";
    }
    return "Yes";
  };

  return (
    <>
      <Link to="/">
        <button className="home-button">Home</button>
      </Link> 
      <h1 style={{ fontWeight: "900" }}>Is there a Torque meeting today?</h1>
      <div
        style={{ display: "flex", justifyContent: "center", alignItems: "end" }}
      >
        <h2 style={{ fontSize: "100pt", fontWeight: "1000" }}>
          {checkMeeting()}
        </h2>
        <p style={{ margin: 0, opacity: "25%" }}>(maybe)</p>
      </div>

      <p style={{ fontSize: "20pt" }}>
        Torque meetings are held on Monday, Thursday, and Saturday.
      </p>

      <p style={{ fontSize: "20pt" }}>
        The current day is{" "}
        {new Date().toLocaleDateString("en-US", { weekday: "long" })}.
      </p>

      <p style={{ fontSize: "10pt", opacity: "50%" }}>
        updated as of right now ㅇ:
      </p>
    </>
  );
}
