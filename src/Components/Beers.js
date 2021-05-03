import React, { useState, useEffect } from 'react'
import SingleBeer from './SingleBeer'

function Beers() {
  const [beers, setBeers] = useState(null)
  const [type, setType] = useState('ale')
  const [randomBeer, setRandomBeer] = useState(null)

  useEffect(() => {
    fetch(`https://api.sampleapis.com/beers/${type}`)
      .then((response) => response.json())
      .then((data) => setBeers(data))
      .catch((err) => console.log(err))
  }, [type])

  function getRandomBeer(){

  }
  return (
    <>
      <h2>Beers:</h2>
      <button onClick={() => setType('ale')}>ALE</button>
      <button onClick={() => setType('stouts')}>STOUTS</button>
      <button onClick={() => setType('red-ale')}>RED-ALE</button>
      <button onClick={() => getRandomBeer}>RANDOM</button>
      {!beers ? (
        <p>Loading...</p>
      ) : (
        beers.map((beer) => {
            return (
                <>
                <p> {beer.name} </p>
                <p>{beer.price}</p>
                <br/>
                </>
            )
          
        })
      )}
    </>
  )
}

export default Beers
