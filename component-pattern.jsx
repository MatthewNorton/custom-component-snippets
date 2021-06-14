/* ================================= 
[Component Pattern / Template]
Used for creating new components
 ================================= */

class jsPattern extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "Hello World",
    };
  }

  foo = (param) => {
  
  };
  componentDidMount() {
    this.foo();

    // Loads after Dom
  }
  render() {
    return null;
  }
}
manywho.component.register("js-pattern", jsPattern);
