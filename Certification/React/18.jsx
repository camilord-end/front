class StatefulComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          name: "Julian"
      }
    }
    render() {
      return (
        <div>
          <h1>{this.state.name}</h1>
        </div>
      );
    }
};