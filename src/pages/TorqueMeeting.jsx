export default function TorqueMeeting() {
  const checkMeeting = () => {
    // If today is monday thursday or saturday then yes
    const today = new Date();
    const day = today.getDay();
    if (day === 1 || day === 4 || day === 6) {
      return "Yes";
    }
    return "No";
  };

  return (
    <>
      <h1 style={{ fontWeight: "900" }}>Is there a Torque meeting today?</h1>
      <h2 style={{ fontSize: "100pt", fontWeight: "1000" }}>
        {checkMeeting()}
      </h2>
    </>
  );
}
