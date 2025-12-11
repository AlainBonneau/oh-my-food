import MenuItem from "@/components/MenuItem/MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { restaurants } from "../../../data/restaurants.json";
import { NotFound } from "@/components/NotFound/NotFound";
import "./page.css";

export default async function RestaurantPage({ params }) {
  const { slug } = await params;

  const restaurant = restaurants.find((r) => r.slug === slug);

  if (!restaurant) {
    return <NotFound />;
  }

  return (
    <div className="restaurant-page">
      <img src={restaurant.image} alt={restaurant.name} />
      <div className="contentWrapper info-container">
        <h1>
          {restaurant.name}{" "}
          <span className="heart">
            <FontAwesomeIcon className="heart" icon={faHeartSolid} />
          </span>
        </h1>
        <div className="food-container">
          <h6>Entrées</h6>
          {restaurant.menu.entrées.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </div>
        <div className="food-container">
          <h6>Plats</h6>
          {restaurant.menu.plats.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </div>
        <div className="food-container">
          <h6>Desserts</h6>
          {restaurant.menu.desserts.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </div>
        <button>Commander</button>
      </div>
    </div>
  );
}
