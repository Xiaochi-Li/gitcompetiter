var React = require("react");
var PropTypes = require("prop-types");
var api = require("../utils/api");

function SelectedLanguate(props) {
  var languages = ["All", "Javascript", "Ruby", "Java", "CSS", "Python"];

  return (
    <ul className="languages">
      {languages.map((lang, index) => {
        return (
          <li
            style={
              lang === props.selectedLanguate ? { color: "#d0021b" } : null
            }
            key={index}
            onClick={() => props.onSelect(lang)}
          >
            {lang}
          </li>
        );
      })}
    </ul>
  );
}

SelectedLanguate.propTypes = {
  selectedLanguate: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

function RepoGrid(props) {
  console.log(props);
  return (
    <ul className="popular-list">
      {props.repos.map((repo, index) => (
        <li className="popular-item" key={index}>
          <div className="popular-rank">#{index + 1}</div>
          <ul className="space-list-items">
            <li>
              <img className="avatar" src={repo.owner.avatar_url} />
            </li>
            <li>
              <a href={repo.html_url} />
              {repo.name}
            </li>
          </ul>
        </li>
      ))}
    </ul>
  );
}

class Polular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguate: "All",
      repos: null
    };
    this.updateLanguate = this.updateLanguate.bind(this);
  }

  updateLanguate(lang) {
    this.setState({
      selectedLanguate: lang,
      repos: null
    });
    api.feachPopularRepos(lang).then(repos => this.setState({ repos: repos }));
    console.log(this.state.repos);
  }

  componentDidMount() {
    this.updateLanguate(this.state.selectedLanguate);
  }

  render() {
    return (
      <div>
        <SelectedLanguate
          selectedLanguate={this.state.selectedLanguate}
          onSelect={this.updateLanguate}
        />
        {!this.state.repos ? (
          <p>LOADING</p>
        ) : (
          <RepoGrid repos={this.state.repos} />
        )}
      </div>
    );
  }
}

module.exports = Polular;
