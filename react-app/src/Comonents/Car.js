import React from "react";

// function Greet(){
//     return <h1>hello Ruchi how are you</h1>
// }

// const Greet = () =>  <h1>hello how are you?</h1>; //arrow function

// const Hello = () => {
//     return React.createElement('div',{class:'hello'},React.createElement('h1',null,'hello ruchi'));
// }
// export default Hello;
// function Separated(){
//     return <h2>Car Comonents in Separated file</h2>
// }
// function Car(){
//     return (
//         <>
//             <h1>hello this is car Comonents </h1>
//             <Separated />
//         </>
//     )
// }

// function Car(props){
//     return (
//         <>
//             <h1>hello this is car. Car name is {props.name}. Car color is {props.color}</h1>
            
//         </>
//     )
// }

// function Name(props){
//     return <h1>hello ,{props.name}</h1>;
//   }
//   function Car(){
//     return (
//         <div>
//           <Name name='Ruchi'/>
//           <Name name='Khushbu'/>
//           <Name name='Dhruti'/>
//         </div>
//     );
//   }

// function Clock(props) {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {props.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
  
//   export default Clock;

// class Car extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         brand: "Ford",
//         model: "Mustang",
//         color: "red",
//         year: 1964
//       };
//     }
//     changecolor = () => {
//         this.setState({color:'blue'})
//     }
//     render() {
//       return (
//         <div>
//           <h1>My {this.state.brand}</h1>
//           <p>
//             It is a {this.state.color} 
//             {this.state.model}
//             from {this.state.year}.
//           </p>
//           <button type="button" onClick={this.changecolor}>
//               changecolor
//           </button>
          
//         </div>
//       );
//     }
//   }
// export default Car;  

// class Clock extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = { date: new Date()};
//     }
//     render(){
//         return(
//             <div>
//                 <h1 >It is {this.state.date.toLocaleTimeString()}</h1>
//             </div>
//         )
//     }
// }
// export default Clock;

// class First extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             color:'red',
//             brand:'bajaj',
//             year:2022
//         }
        
//     }
//     changecolor = () => {
//         this.setState({color:'blue'});
//     }
//     render(){
//         return(
//             <div>
//             <h1>Hello this is color name: {this.state.color}</h1>
//             <Second color={this.state.color}/>
//             <button type="button" onClick={this.changecolor}>Changecolor</button>
//             </div>
//         );
//     }
// }
// class Second extends React.Component{
//     render(){
//         return(
//         <h2>hello color name is :{this.props.color}</h2>
//         );
//     }
// }

// function First(){
//     const msg = 'hello ruchi ,welcome on react js tutorial';
//     return(
//         <div>
//             <h1>message is:{msg}</h1>
//             <Second value={msg}/>
//         </div>
//     )
// }
// function Second(props){
//     return(
//         <h2>second message is :{props.value}</h2>
//     )
// }
// class Counter extends React.Component{
//     constructor(props){
        
//         super(props)

//         this.state = {
//             counter : 0,
//             color: 'red'
//         }
//         this.increment = () => this.setState({counter: this.state.counter + 1})
//         this.decrement = () => this.setState({counter: this.state.counter - 1})
//     }
 
//     componentDidMount(){
//         setTimeout(() => {
//             console.log('color is blue')
//             this.setState({color:'blue'})
//         }, 1000);
       
//     }

//     // static getDerivedStateFromProps(props, state) {
//     //     console.log('color changes blue')
//     //     return {color: props.fcolor };
       
//     //   }
//     render(){
       
//         return(
//             <div>
//             <button type="button" onClick={this.increment}>increment counter</button>
//             <h1 className="counter">Counter :{this.state.counter}</h1>
//             <button type="button" onClick={this.decrement}>decrement counter</button>
//             <h3>color :{this.state.color}</h3>

//             <h2>Get Drived states from props {this.state.counter}</h2>
//             <button onClick={() => {this.setState({counter:this.state.counter + 1})}}>make ++</button>
//             </div>
//         )
//     }
// }

// export default Counter;

// class Counter extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {date : new Date()}
//     }
//     tick(){
//         this.setState({date:new Date()})
//     }
//     componentDidMount(){
//        this.timeid = setInterval(() => this.tick(),1000);
//     }
//     render(){
//         return(
//             <div>
//                 <h1>hello world</h1>
//                 <h2> It is {this.state.date.toLocaleTimeString()}</h2>
//             </div>
//         )
//     }
// }
// export default Counter;

// class Header extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {favoritecolor: "red"};
//     }
//     shouldComponentUpdate() {
//         console.log('not update');
//       return false;
//     }
//     changeColor = () => {
//       this.setState({favoritecolor: "blue"});
//     }
//     render() {
//       return (
//         <div>
//         <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//         <button type="button" onClick={this.changeColor}>Change color</button>
//         </div>
//       );
//     }
//   }
// class Header extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {name:'Ruchi Patel'}
//     }
//     componentDidMount(){
//         setTimeout(() => {
//             this.setState({name:'RUCHI PATEL'})
//         }, 2000);
//     }
//     getSnapshotBeforeUpdate(prevProp,prevState){
//         document.getElementById('div1').innerHTML = 'Before update, name was ' + prevState.name;   

//     return null;
//     }
//     componentDidUpdate(){
//         document.getElementById('div2').innerHTML = 'Updated Name is' + this.state.name;
//     }
//     render(){
//         return(
//             <div>
//                 <h1>My Favorite color is: {this.state.name}</h1>
//                 <div id="div1"></div>
//                 <div id="div2"></div>
//             </div>
//         )
//     }
// }

// class Header extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {show: true};
//     }
   

//     delHeader = () => {
//         this.setState({show: false})
//     }
//     render(){
//         let myheader ;
//         if(this.state.show){
//             myheader = <Child />
//         }
//         return(
//             <div>
//             {myheader}
//             <button type="buton" onClick={this.delHeader}>Delete header</button>
//             </div>
//         )
//     }
// }
// class Child extends React.Component{

//     componentWillUnmount(){
//         alert("The componet will be unmounted...");
//     }
//     render(){
//         return(
//             <h1>hello header</h1>
//         )
//     }
// }
// class Header extends React.Component{
//     state = {
//         books: []
//     }
    
//     componentDidMount() {
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then((response) => response.json())
//         .then(booksList => {
//             this.setState({ books: booksList });
//         });
//     }
//     render(){
//         return(
//             <>
//             <button onClick={this.fetchBooks}>Load Books</button>
//             {this.books.length > 0 && (
//                 <ul>
//                     {this.state.books.map((book) => (
//                         <li key={book.id}>{book.name}</li>
//                     ))}
//                 </ul>
//             )}
            
//         </>
//         )
//     }
// }
function Header() {
    function handleSubmit(e) {
      e.preventDefault();
      console.log('You clicked submit.');
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
    );
  }
 export default Header;
