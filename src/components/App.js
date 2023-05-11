import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

/*
When the app starts, I can see all listings.
I can "favorite" and "unfavorite" a listing on the frontend by clicking the star icon. This feature doesn't need backend persistence.
I can remove a listing from the page by clicking the trash can icon. This change should be persisted in the backend.
I can search for listings by their name.
*/

function App() {

  const [listings, setListings] = useState([])

  useEffect(() => {
    getListings()
  }, [])
  
    function getListings() {
      fetch('http://localhost:6001/listings')
      .then((resp) => resp.json())
      .then((data) => setListings(data))
    }

    const [search, setSearch] = useState('')

    function handleSearch(e) {
      setSearch(e.target.value)
    }
    
    const filteredListings = [...listings].filter((el) => {
      return (
        el.description.toLowerCase().includes(search.toLowerCase()
        )
      )})
      
      function deleteListing(listing) {
        setListings(
          [...listings].filter((el) => 
            listing.id === el.id ? false : true
          )
        )
      }

  return (
    <div className="app">
      <Header search={search} handleSearch={handleSearch}/>
      <ListingsContainer deleteListing={deleteListing} filteredListings={filteredListings}/>
    </div>
  );
}

export default App;
