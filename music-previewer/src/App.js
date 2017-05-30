import React, { Component } from 'react';

class App extends Component {
  render(){
    return(
      <div>
        <div classname="appTitle">Music master</div>
        <div>
          <input placeholder="search an artist..." />
          <button>button</button>
        </div>
        <div>
          <div>Artist Profile</div>
          <div>Artist Name</div>
        </div>
        <div className="gallery">
          Gallery
        </div>

      </div>

    )
  }
}

export default App;
