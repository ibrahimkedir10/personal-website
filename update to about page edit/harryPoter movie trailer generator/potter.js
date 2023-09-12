// note the name of the class must be capitalized 
class MyFilmDisplay extends React.Component {
    constructor(props) {
       super(props)
       // bookIndex is the only part of the state that will be changed by the user 
       // the property calls books which is an array of book objects which will come from reading a json file
       // the isLoading property lets one know when the file has been read
       this.state = {
          filmIndex: 0,
          films: [],
          isLoading: true
       }
    }
 
    handleChange = e => {
       // setState() is async
       this.setState({ filmIndex: event.target.value });
       /*
          that means don't do anything here that requires an updated bookIndex
          because of the way the cover image and author are handled (see below) 
          they will change when setState has finished
       */
    }
 
    componentDidMount() {
       //this.setState({ isLoading: true });
       fetch('Potter.json')
          .then(response => response.json())
          .then(data => this.setState({ films: data, isLoading: false }));
       /*
          the JSON file holds an array, there might be changes if
          the JSON file holds an object with a property that is an array 
       */
    }
 
    render() {
       // The following code use React Fragment
       // Recall .map() is a way to loop over an array 
       // React requires you to pass in the key={} prop
       // https://reactjs.org/docs/lists-and-keys.html 
 
       /*
          we cannot do the real rendering until the data file is read (asynchronously) 
          hence the introduction of the isLoading attribute of the state 
       */
       if (this.state.isLoading) {
          return (<p>Loading ....</p>)
       } else {
          return (
             <> {/* React Fragment instead of a div to meet the single parent criterion */}
                <h1>Harry Potter Movie Collection</h1>
                <select value={this.state.movieIndex} onChange={this.handleChange}>
                   {
                      this.state.films.map((film, i) =>
                      (
                         <option key={i} value={i}>
                            {film.title}
                         </option>
                      )
                      )
                   }
                </select>
                <br />
                {/*	THIS IS A JSX COMMENT WITHIN REACT -- note curly braces around JS comment
                             this.state.books is an array of objects
                             we want the element with an index this.state.bookIndex 
                             we want the book_cover property of that object	
                     */}
                {/* 
                             https://www.youtube.com/watch?v=Jh47pOXwGq0 
                             youtube video about React wanted the key property seen above
                     */}
                <img src={this.state.films[this.state.filmIndex].image} height="300" />
                <br />
                <span>director: </span>{this.state.films[this.state.filmIndex].director}
                <br />
                <span>writer: </span>{this.state.films[this.state.filmIndex].writer}
                <br />
                <span>Producer: </span>{this.state.films[this.state.filmIndex].producer}
                <br />
                <span>music: </span>{this.state.films[this.state.filmIndex].music}
                <br />
                <iframe height="300" src= {this.state.films[this.state.filmIndex].youtubecode}></iframe>
                
                <br />
             </>
          ) //match return
       } // match else of if 
    } //match render
 } //end MyBookDisplay class
 
 ReactDOM.render(<MyFilmDisplay />, document.querySelector('#divFilmDisplay'))



