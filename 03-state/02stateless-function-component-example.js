class InstructorItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <h3>{this.props.name}</h3>
        <h4>{this.props.hobbies.join(", ")}</h4>
      </li>
    );
  }
}


//===================== TO ==============>>>>>>

const InstructorItem = props => {
  return (
    <li>
      <h3>{props.name}</h3>
      <h4>{props.hobbies.join(", ")}</h4>
    </li>
  );
}

InstructorItem.propTypes = {
  name: PropTypes.string,
  hobbies: PropTypes.arrayOf(PropTypes.string)
};
