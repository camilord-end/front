//const JSX = <h1>Hello JSX!</h1>; 
/*const JSX = 
  <div>
    <h1></h1>
    <p></p>
    <ul>
        <li></li>
        <li></li>
        <li></li>
    </ul>
  </div>; */

//const JSX = (
//    <div>
//      <h1>This is a block of JSX</h1>
//      <p>Here's a subtitle</p>
//      {/* this is a comment */}
//    </div>
//);
const JSX = (
    <div className="myDiv">
      <h1>Hello World</h1>
      <p>Lets render this to the DOM</p>
    </div>
);
// Change code below this line
ReactDOM.render(JSX,document.getElementById("challenge-node"))
