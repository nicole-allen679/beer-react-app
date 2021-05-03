import React, { useState, useEffect } from 'react'

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
    const elem = Math.floor(Math.random()*beers.length)
    setRandomBeer(beers[elem].name)
  }
  return (
    <>
      <h2>Beers:</h2>
      <button onClick={() => setType('ale')}>ALE</button>
      <button onClick={() => setType('stouts')}>STOUTS</button>
      <button onClick={() => setType('red-ale')}>RED-ALE</button>
      <button onClick={() => getRandomBeer()}>RANDOM</button>
      {randomBeer && <h2>{randomBeer}<hr /></h2>}
      {!beers ? (
        <p>Loading...</p>
      ) : (
        beers.map((beer) => {
            return <p key={beer.id}>{beer.name}</p>
        })
      )}
    </>
  )
}

export default Beers
