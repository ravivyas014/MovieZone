import React, { useState } from 'react'
import { movies } from './data'

export const Movies = () => {
  const [movieList, setMovieList] = useState(movies);


  const filterByCatogory = (cat)=>{
    setMovieList(movies.filter((data)=>data.category == cat)) 
  }

  return (
    <>
    <div className='my-3' style={{width:'1000px', margin:'auto'}}>
      <div className='mx-auto text-center'>
    <button onclick={()=> setMovieList(movies)} type="button" className="btn btn-outline-primary mx-3">All</button>
<button onClick={()=> filterByCatogory("Action")} type="button" className="btn btn-outline-primary mx-3">Action</button>
<button onClick={()=> filterByCatogory("Thriller")} type="button" className="btn btn-outline-light mx-3">Thriller</button>
<button onClick={()=> filterByCatogory("Animation")} type="button" className="btn btn-outline-info mx-3">Animation</button>
<button onClick={()=> filterByCatogory("Horror")} type="button" className="btn btn-outline-warning mx-3">Horror</button>
<button onClick={()=> filterByCatogory("Drama")} type="button" className="btn btn-outline-info mx-3">Drama</button>
<button onClick={()=> filterByCatogory("Sci-Fi")} type="button" className="btn btn-outline-light mx-3">Sci-Fi</button>
</div>
</div>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      // gap: '2rem',
      textAlign: 'center',
      width: '1300px',
      // backgroundColor: 'yellow',
      margin: 'auto',
      marginTop: '1.5rem'

    }}>
      {movieList.map((data) => (
        <div key={data.id} style={{ maxWidth: '280px', textAlign:'center' }}>
          <div style={{ padding: '10px' }} className="hover_effect">
            <img src={data.poster_path} alt="" style={{ width: '200px', height:'280px', borderRadius: '10PX', border: '1px solid yellow' }} />
          </div>
          <h5>{data.title}</h5>
          <p>{data.release_date}</p>
        </div>
      ))}
    </div>
    </>
  )
}
