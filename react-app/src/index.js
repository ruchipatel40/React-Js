import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import './App.css';
// import App from './App';
import Header from './Comonents/Car';
import Eventhandler from './Comonents/Eventhandler';
import Garage from './Comonents/listandkey';
import MadeGoal from './Comonents/condition';
import Goal from './Comonents/condition'
import LogicalControl from './Comonents/condition';
import MailBox from './Comonents/condition';
import Listandkey from './Comonents/listandkey'
import Blog from './Comonents/listandkey';
import Myform from './Comonents/form';
import OrderComponent from './Comonents/Shifing';
import A from './Comonents/Shifing';
import Calculator from './Comonents/Shifing';
import WelcomeDialog from './Comonents/composition';
// import App from './Comonents/composition'
import FilterableProductTable from './Comonents/product';
import Card from './Comonents/darkcard';
import {Formvalidation} from './Comonents/Formvalidation';
import ExampleofHook from './Comonents/Hooks';
import Useeffect from './Comonents/Useeffect';
import UseeffectAPI from './Comonents/UseeffectAPI';
import Uncontrolled from './Comonents/UseReducer';
import UseReducer from './Comonents/UseReducer';
import ContextA from './Comonents/Usecontext.js/ContextA';
import App from './Comonents/Usecontxt';
import Main from './Comonents/Usecontxt';
import Usecallback from './Comonents/Usecallback';
import ToDolist from './Comonents/ToDolist';
import UseMemo from './Comonents/UseMemo';
import UseRef from './Comonents/UseRef';
import ParentComponent from './Comonents/Parent';
import Example from './Comonents/Inheritance';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
// const myelement = (
//   <table>
//     <tr>
//       <th>Name</th>
//     </tr>
//     <tr>
//       <td>John</td>
//     </tr>
//     <tr>
//       <td>Elsa</td>
//     </tr>
//   </table>
// );

// ReactDOM.render(myelement, document.getElementById('root'));
// const myimg = (
//   <a href='https://www.google.co.in/'>google</a>
// );
// ReactDOM.render(myimg, document.getElementById('root'));
// 

// const myelement = <h1>hello React JS {5 + 8} times..</h1>;

// const myelement = (
//   <ul class='ul'>
//     <li>Apples</li>
//     <li>Banana</li>
//     <li>Grapes</li>
//   </ul>
  
// );
// const x = 5;
// let test = "hello react";
// if(x < 10){
//   test ='hello ruchi';
// }
// const myelement = <h1>{test}</h1>

// const x = 5;
// const myelement = <h1>{x < 10 ? 'hello react1':'hello ruchi'}</h1>

//  const myelement = <img src={logo} className="img" alt='Logo'/>


// function time(){
// const myelement = (
//   <div >
//     <h2>Hello this time is :{new Date().toLocaleTimeString()}</h2>
//   </div>
// );

// ReactDOM.render(myelement, document.getElementById('root'))
// }

// setInterval(time,1000);

// function Car(){
//   return(
//     <h1>This is car function</h1>
//   );
// }

// function Car(props){
//   return(
//     <h1>This is car. Color is {props.color}</h1>
//   );
// }

// function Hello(){
//   return <h1>hello</h1>
// }
// function Sayhello(){
//   return (
//    <> 
//       <h1>Sayhello</h1>
//       <Hello />
//   </>
//   );
// }
//ReactDOM.render(<Car name='Shift' color='White'/>,document.getElementById('root'));




// function tick() {
//   ReactDOM.render(
//     <Clock date={new Date()} />,
//     document.getElementById('root')
//   );
// }
// setInterval(tick,1000)
// ReactDOM.render(<Counter fcolor='blue '/>,document.getElementById('root'));

// ReactDOM.render(<Header />,document.getElementById('root'));

// ReactDOM.render(<Eventhandler />,document.getElementById('root'))
// const cars =['BMW','Ford']
// const cars =[]
// ReactDOM.render(<Garage cars={cars}/>,document.getElementById('root'))
// ReactDOM.render(<Goal isGoal={true}/>,document.getElementById('root'));
// const msg = ['react','re:react','re:re:react','ruchi','ruchi1']
// ReactDOM.render(<MailBox unreadmsg={msg}/>,document.getElementById('root'));

// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map((number) => number * 2);
// console.log(doubled);
// ReactDOM.render(doubled, document.getElementById('root'))

// const numbers = [11,22,33,44,55];
// const listitems = numbers.map((number)=><li>{number}</li>)
// ReactDOM.render(<ul>{listitems}</ul>, document.getElementById('root'))
// const posts = [
//     {
//     id:1,
//     title:'hello world',
//     content:'welcome to react js tutorial'
//     },
//     {
//         id:2,
//         title:'hello world1',
//         content:'welcome to react js tutorial1'
//     }
// ]
// ReactDOM.render(<Blog posts = {posts} />, document.getElementById('root'));
// ReactDOM.render(<Myform />, document.getElementById('root'));
// const PRODUCTS = [
//     {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
//     {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
//     {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
//     {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
//     {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
//     {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
//   ];
// ReactDOM.render(<FilterableProductTable products={PRODUCTS}/>, document.getElementById('root'))
// ReactDOM.render(<Card/>, document.getElementById('root'))
// ReactDOM.render(<Formvalidation />,document.getElementById('root'))
// ReactDOM.render(<ExampleofHook/>,document.getElementById('root'))
// ReactDOM.render(<Useeffect />,document.getElementById('root'))
// ReactDOM.render(<UseeffectAPI />,document.getElementById('root'))
// ReactDOM.render(<UseReducer />,document.getElementById('root'))
// ReactDOM.render(<ContextA />,document.getElementById('root'))
// ReactDOM.render(<App/>,document.getElementById('root'))
// ReactDOM.render(<UseReducer/>,document.getElementById('root'))
// ReactDOM.render(<Usecallback/>,document.getElementById('root'))
// ReactDOM.render(<ToDolist/>,document.getElementById('root'))
// ReactDOM.render(<UseMemo/>,document.getElementById('root'))
// ReactDOM.render(<UseRef/>,document.getElementById('root'))
// ReactDOM.render(<ParentComponent/>,document.getElementById('root'))
ReactDOM.render(<Example/>,document.getElementById('root'))