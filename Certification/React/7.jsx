class Fruits extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h2>Fruits:</h2>
            <Citrus />
            <NonCitrus />
        </div>
      );
    }
};
  
class TypesOfFood extends React.Component {
    constructor(props) {
       super(props);
    }
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          <Fruits />
          <Vegetables />
        </div>
      );
    }
};

const Citrus = () => {
  return (
    <div>
      <ul>
        <li>Lemon</li>
        <li>Lime</li>
        <li>Orange</li>
        <li>GrapeFruit</li>
      </ul>
    </div>
  );
};

const NonCitrus = () => {
  return (
    <div>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};