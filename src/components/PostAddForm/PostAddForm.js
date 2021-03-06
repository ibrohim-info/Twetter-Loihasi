import React from 'react';
import './PocstAddForm.css';

export default class PostAddForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text: ''
    }
    this.onValuechange = this.onValuechange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onValuechange(e){
    this.setState({
      text: e.target.value
    })
  }
  onSubmit(e){
    e.preventDefault();
    this.props.onAdd(this.state.text)
    this.setState({
      text: ''
    })
  }
  render(){
    return(
      <form className="bottom-panel  d-flex" onSubmit={this.onSubmit}>
        <input 
        type="text" 
        placeholder="What  are you thinking about?"
        className="form-control new-post-label"
        onChange={this.onValuechange}
        value={this.state.text}
        />
        <button 
        type="submit" 
        className="btn btn-outline-secondary">
          Add Posts
        </button>
      </form>
    )
  }
  

}

