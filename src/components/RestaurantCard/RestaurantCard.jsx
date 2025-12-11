"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import "./RestaurantCard.css";

export default function RestaurantCard({ restaurant }) {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <article className="restaurant-card">
      <Link href={`restaurant/${restaurant.slug}`} className="img-container">
        <img src={restaurant.image} alt={`Image de ${restaurant.name}`} />
        {restaurant.isNew && <span className="new-label">Nouveau</span>}
      </Link>

      <div className="title-heart-container">
        <div className="title-container">
          <h2>{restaurant.name}</h2>
          <p>{restaurant.location}</p>
        </div>
        <button className="heart-logo" onClick={toggleLike}>
          <FontAwesomeIcon
            icon={isLiked ? faHeartSolid : faHeartRegular}
            className={isLiked ? "liked" : ""}
          />
        </button>
      </div>
    </article>
  );
}
