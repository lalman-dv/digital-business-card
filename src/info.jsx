function Info() {
  return (
    <>
      <header>
        <img
          className="profile-pic"
          src="./src/assets/profile.jpg"
          alt="profile pic"
        />
        <h1>Lalman</h1>
        <h4>Frontend Developer(React)</h4>
        <button className="btn email-btn" title="Send Email">
          {" "}
          <img src="./src/assets/email.svg" alt="email" />
        </button>
        <button className="btn linkedin-btn">
          {" "}
          <img src="./src/assets/linkedin.svg" alt="linkedin" />
        </button>
      </header>
    </>
  );
}
export default Info;
