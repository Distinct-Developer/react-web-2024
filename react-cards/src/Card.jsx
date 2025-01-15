import profilePic from './assets/images/profile_pic.png';
function Card() {
  return (
      <div className="card">
        <img alt="profile picture" src={profilePic} className="card-img" />
        <h2 className="card-title">Sample Card</h2>
        <p className="card-title">This is a sample card with React JS.</p>
      </div>
  );
}

export default Card;