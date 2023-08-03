import logo from "./images/Quick Food (6).png";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  return (
    <div className="card" style={{ background: "white" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fundrz2tguru4dkbl8wn"
      />
      <h3>{ props.resName}</h3>
      <p>{ props.cuisine}</p>
      <p>4.3 ratings</p>
      <p>20 minuts</p>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-list">
        <RestaurantCard
          resName="Tiffen Depot"
          cuisine="South Indian, South Indian,Nanakramguda"
        />
        <RestaurantCard resName="KFC" cuisine="Berger, Fast Foods" />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

export default App;
