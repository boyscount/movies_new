import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow.js'
import $ from 'jquery'
import { Button } from 'reactstrap';


class App extends Component {
  constructor(props) {
    super(props);
this.state = {}
  this.performSearch("marvel")
}



performSearch(searchTerm){
   const urlString = "https://api.themoviedb.org/3/search/movie?api_key=59b01031a4150874876447925c72f6e8&query=" + searchTerm
     $.ajax({
          url: urlString,
          success: (searchResults) => {
            console.log("complete")
            console.log(searchResults)
            const results = searchResults.results

            var movieRows = []
            results.forEach((movie) =>{

              movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
              console.log(movie.poster_path)
              const movieRow = <MovieRow key={movie.id} movie={movie}/>
              movieRows.push(movieRow)
            })

            this.setState({rows: movieRows})
          },
          error: (xhr, status, err) => {

            console.error("fail")
          }
     })
}

searchChangeHandler(event)    {
  const boundObject = this
  const searchTerm = event.target.value
  boundObject.performSearch(searchTerm)
}
  render() {
    return (
      <div >
        <table style={{
            backgroundColor: '#000',
            display: 'block',
            color: '#fff',
            fontSize: 24 ,
            paddingLeft: 16

        }}>
         <tbody>
          <tr>
             <td>
             <img width="50" src="v.png"/>
             </td>
             <td>
                 <h1> Movies New </h1>
             </td>
          </tr>
        </tbody>
        </table>
          
        
        <input style={{
          fontSize:24,
          display:'block',
          width: "99%",
          paddingTop: 8,
          paddingBottom:8,
          paddingLeft:16
        }} onChange= {this.searchChangeHandler.bind(this)} placeholder="Enter search movie"/>

          {this.state.rows}

      </div>
      
    );
  }
  
}

export default App;
