class HackerPost extends React.Component {
  constructor(props) {
    super(props);;
  }


  render() {

    return (
      <div className="component-container">
        <a className="post-name" href={this.props.url} target="_blank" rel="noopener noreferrer">{this.props.postName}</a>
        <div className="post-info">
          <p className="post-stat">{this.props.points} points | </p>
          <p className="post-stat"> {this.props.author} | </p>
          <p className="post-stat"> {this.props.date} ago | </p>
          <a className="post-stat" href={'https://news.ycombinator.com/item?id=' + this.props.postID} target="_blank" rel="noopener noreferrer"> {this.props.comments} comments | </a>
        </div>
      </div>
    );
  };
};

class HackerNews extends ReactDOM {
  constructor(props) {
    super(props);
    this.state = {
      inputText : '',
      searches: [{}]
    };
  }

  //Makes a GET call to the APi to fill up the page on the first load.
  componentDidMount() {
    console.log(this.state.inputText);
    this.searchTerm();
  }


  //Searches for the term everytime the word in the textbox is changed.
  searchTerm = () => {
    let searchUrl = 'https://hn.algolia.com/api/v1/search?query=' + this.state.inputText + '&hitsPerPage=30';
    let req = new XMLHttpRequest();
    req.open("GET", searchUrl, true)
    req.send()
    req.onload = () => {
      let json = JSON.parse(req.responseText);
      this.setState({
        searches: json.hits
        
      })
    }
  };

  //Changes the inputText state based on the search text and calls the search function.
  handleChange = (event) => {
    this.setState({
      inputText: event.target.value
    }, () => {
      this.searchTerm();
    });
  };

  render() {
    const posts = this.state.searches.map((x) => {
      if (x.title) {
        return (<HackerPost key={x.objectID} postName={x.title} points={x.points} author={x.author} date="a year" comments={x.num_comments} url={x.url} postID={x.objectID}/>)
      }
    });
    return (
      <div id="hacker-app">
        <div id="hacker-header-mobile">
          <img src="https://hn.algolia.com/assets/logo-hn-search.png" alt="hacker news logo" id="hacker-logo"/>
          <input type="text" id="hacker-textbox" onChange={this.handleChange.bind(this)} placeholder="Search stories by title, url or author"/>
        </div>
        <div id="hacker-header">
          <img src="https://hn.algolia.com/assets/logo-hn-search.png" alt="hacker news logo" id="hacker-logo"/>
          <div id="search-hacker-news">
            <p>Search</p>
            <p>Hacker News</p>
          </div>
          <input type="text" id="hacker-textbox" onChange={this.handleChange.bind(this)} placeholder="Search stories by title, url or author"/>
        </div>
        <div id="post-container">
          {posts}
        </div>
      </div>
    );
  };
};

ReactDOM.render(<HackerNews/>, document.getElementById('root'));

