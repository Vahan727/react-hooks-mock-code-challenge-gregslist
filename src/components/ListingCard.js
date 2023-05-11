import React, {useState} from "react";

function ListingCard({listing, deleteListing}) {

 function handleDelete() {
  fetch(`http://localhost:6001/listings/${listing.id}`, {
    method: 'DELETE'
  })
  .then(resp => resp.json)
  .then(() => deleteListing(listing))
 }

  const [favorite, setFavorite] = useState(false)

  function handleFavorite() {
    setFavorite((prev) => !prev)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {favorite === true ? (
          <button className="emoji-button favorite active" onClick={handleFavorite}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavorite}>☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
