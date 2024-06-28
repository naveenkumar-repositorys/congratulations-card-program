const element = (
  // Write your code here.
  <div className="bg-container">
    <h1 className="main-heading">congratulations</h1>
    <div className="card-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="profileImage"
      />
      <h1 className="person-name">Kiran V</h1>
      <p className="institute-name">
        Vishnu Institute of Computer Education and Technology,Bhimavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="second-picture"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
