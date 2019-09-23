import React from 'react';
import { goFetch } from './utils.js';
import './App.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', payload: []};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(userInput) {
    this.setState({ value: userInput });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const searchWord = this.state.value;
    const url = `https://api.datamuse.com/words?rel_rhy=${searchWord}`;
    const payload = await goFetch(url);
    this.setState({ payload });
  }

  render() {
    const rhymes = this.state.payload.map(word => {
      return (
        <li key={word}>
          <p>{word.word}</p>
        </li>
      );
    });
    return (
      <div className="formContainer">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="formButtonWrapper">
            <input
              className="textarea"
              name="message"
              type="textarea"
              placeholder='message'
              value={this.state.value}
              onChange={(e) => this.handleChange(e.target.value)}
            />
            <input
              className="sendButton"
              type="submit">
            </input>
          </div>
        </form>
        <ul>{rhymes}</ul>
      </div>
    );
  }
}

export default SearchBar;
