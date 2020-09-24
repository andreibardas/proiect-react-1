import React, {Component} from 'react';
import './App.css';

import Navbar from './Components/Header/navbar.component';
import Post from './Components/Post/post.component';

import CustomButton from './Components/CustomButton/custom-button.component';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      title: "",
      description: "",

      posts: [
        {
          title: "PRIMA",
          description: "descriere"
        },
        {
          title: "A 2 A postare",
          description: "descriere postare 2"
        }
      ]
    }
  }

  handleTitleChange = (event) => {
    this.setState({title: event.target.value})
  }

  handleDescriptionChange = event => {
    this.setState({description: event.target.value})
  }

  addNewPost = () => {
    this.setState( prevState => ({ 
      posts: [...prevState.posts, 
              {
                title: this.state.title, 
                description: this.state.description
              }
             ]
    }) )
  }


  render() {

  return (
    <div className="App">
      <Navbar/>
      <div className="posts">
      <Post title="ceva" description="altceva"/>
      <Post title="post 2" description="content"></Post>
      
      {
        this.state.posts.map( (item, index) => (

          <Post
          key = {index}  
          title={item.title} 
          description={item.description}>
          </Post>
    ))
      
      }

      
      </div>

      <div style={{display: "flex", flexDirection: "column", height: "600px", justifyContent: "space-around"}}>
      {/* Title input */}
      <label style={{height: "100px", width: "300px", display: "flex", flexDirection: "column"}}>
        Titlu:
        <input type="text" name="title" value={this.state.title} onChange={this.handleTitleChange}></input>
      </label>
​
       {/* Content input */}
      <label style={{height: "300px", width: "300px", display: "flex", flexDirection: "column"}}>
        Descriere:
        <textarea cols="10" rows="3" name="description" style={{resize: "none"}} value={this.state.description} onChange={this.handleDescriptionChange}></textarea>
      </label>
    
      <CustomButton onClick={this.addNewPost} name="ADD A NEW POST"/>
      
      <h1>Post Preview:</h1>
      <Post title={this.state.title} description={this.state.description}/>
      </div>

    </div>
  );
  }
}

export default App;
