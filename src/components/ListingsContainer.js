import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({filteredListings, deleteListing}) {

  const mappedListings = filteredListings.map((listing) => {
    return (
      <ListingCard
      deleteListing={deleteListing}
      key={listing.id}
      listing={listing}
      />
    )
  })

  return (
    <main>
      <ul className="cards">
        {mappedListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
