import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  //local State variable => Super powerful variable
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  console.log("listofRestuants", listOfRestaurants);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4260456&lng=78.3244821&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    // console.log(
    //   "resList",
    //   resList.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    // );
    setlistOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  if (listOfRestaurants?.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filtered = listOfRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4
            );
            setlistOfRestaurants(filtered);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="restaurant-list">
        {listOfRestaurants?.map((restaurant, index) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
