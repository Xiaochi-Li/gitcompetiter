var React = require("react");
var PropTypes = require('prop-types')

function SelectedLanguate (props){
  var languages = ["All", "Javascript", "Ruby", "Java", "CSS", "Python"];

  return (
    <ul className="languages">
      {languages.map((lang, index) => {
        return (
          <li
            style={lang === props.selectedLanguate ? {color:'#d0021b'}: null}
            key={index}
            onClick={() => props.onSelect(lang)}>
            {lang}
          </li>
        );
      })}
    </ul>
  );
}

SelectedLanguate.propTypes={
  selectedLanguate: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

class Polular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguate: "All"
    };
    this.updateLanguate = this.updateLanguate.bind(this);
  }

  updateLanguate(lang) {
    this.setState({ selectedLanguate: lang });
  }

  render() {
    return(  <div><SelectedLanguate selectedLanguate={this.state.selectedLanguate} onSelect = {this.updateLanguate}/></div>
  )}
}

module.exports = Polular;
