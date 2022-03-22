import React from 'react'

// export default class OrderComponent extends React.Component {
//     constructor(props){
//         super(props);
//         this.state ={quantity:'',address:''}
//     }
//     orderinfochanges =(val) =>{
//         this.setState({quantity:val})
//     }
//     addresschanged =(val) =>{
//         this.setState({address:val})
//     }
//   render() {
//     return (
//       <div>
//           <h1>Product orderscreen</h1>
//           <ProductComponent quantity={this.state.quantity} onquantitychange={this.orderinfochanges}/>
//           <AddressComponent quantity={this.state.address} onAddresschange={this.addresschanged} />
//           <SummaryComponent quantity={this.state.quantity} address={this.state.address} onquantitychange={this.orderinfochanges}/>
//       </div>
//     )
//   }
// }
//  class ProductComponent extends React.Component {
//     constructor(props){
//         super(props);
//     }
//     handleonchange = (e) =>{
//         this.props.onquantitychange(e.target.value)
//     }
//   render() {
//     return (
//       <div>
//           <h2>Product Information</h2>
//           <p>
//               <label>Product Name:
//                   <select>
//                       <option value='product-1'>product-1</option>
//                       <option value='product-2'>product-2</option>
//                       <option value='product-3'>product-3</option>
//                       <option value='product-4'>product-4</option>
//                   </select>
//               </label>
//           </p>
//           <p>
//               <label>Enter Qunatity
//                   <input type='text' value={this.props.quantity} onChange={this.handleonchange}/>
//               </label>
//           </p>
//       </div>
//     )
//   }
// }
// class AddressComponent extends React.Component {
//     constructor(props){
//         super(props);
//     }
//     handleonchange = (e) =>{
//         this.props.onAddresschange(e.target.value)
//     }
//   render() {
//     return (
//         <div>
//         <h2>Address Information:</h2>
//         <p>
//             <label>Address :
//                 <textarea value={this.props.address} onChange={this.handleonchange}></textarea>
//             </label>
//         </p>
//     </div>
//     )
//   }
// }
// class SummaryComponent extends React.Component {
//     constructor(props){
//         super(props);
//     }
//     handleonchange = (e) =>{
//         this.props.onquantitychange(e.target.value)
//     }
//   render() {
//     return (
//       <div>
//           <h2>Summary Information</h2>
//           <p><label>Product Name:<b>Product-1</b></label></p>
//           <p>
//           <label>Enter Qunatity
//                   <input type='text' value={this.props.quantity} onChange={this.handleonchange}/>
//               </label>
//           </p>
//           <p><label>Address:<b>{this.props.address}</b></label></p>
//       </div>
//     )
//   }
// }
// class A extends React.Component {
  
//     constructor(props) {
//       super(props);
//       this.handleTextChange = this.handleTextChange.bind(this);
//       this.state = {text: ''};
//     }
    
//     handleTextChange(newText) {
//       this.setState({text: newText});
//     }
     
//     render() {
//       return (
//           <React.Fragment>
//             <B text={this.state.text} 
//                handleTextChange={this.handleTextChange}/>
//             <C text={this.state.text} />
//           </React.Fragment>
//       );
//       }
//     }
// class B extends React.Component {
  
//     constructor(props) {
//         super(props);
//         this.handleTextChange = this.handleTextChange.bind(this);
//     }
      
//     handleTextChange(e){
//         this.props.handleTextChange(e.target.value);
//     }
      
//     render() {
//         return (
//             <input value={this.props.text} 
//                    onChange={this.handleTextChange} />
//         );
//     }
//     }
// class C extends React.Component {
  
//     render() {
//         return (
//             <h3>Output: {this.props.text}</h3>
//         );
//     }
//     }

//     export default A;

function Boilverdict(props){
    if(props.celsius >= 100){
        return <h1>The water would boil.</h1>
    }
    return <h1>The water would not boil.</h1>
}
function tocelsius(fahrenhit){
    return (fahrenhit - 32) * 5 / 9;
}
function tofahrenhit(celsius){
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temp, convert){
    const input = parseFloat(temp);
    if(Number.isNaN(input)){
        return '';
    }
    const output = convert(input)
    const rounded = Math.round(output * 1000) / 1000 ;
    return rounded.toString();
}
const scalename = {
    c: 'celsius',
    f: 'fahrenhit'
}
class TempInput extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }
    handlechange = (e) =>{
        // this.setState({temp:e.target.value})
        this.props.onTempchange(e.target.value)
    }
   
    render(){
        const temp = this.props.temp;
        const scale = this.props.scale;
      
        return(
            <fieldset>
                <legend>Enter temp in {scalename[scale]}:</legend>
                <input value={temp} onChange={this.handlechange}/>
                {/* <Boilverdict celsius={parseFloat(temp)}/> */}
            </fieldset>
        )
    }
}
class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {temp:'', scale:'c'}
    }
    handlecelsiuschange = (temp) => {
        this.setState({scale:'c' , temp})
    }
    handlefahrenhitchange = (temp) => {
        this.setState({scale:'f' , temp})
    }
render(){
    const temp = this.state.temp;
    const scale = this.state.scale;
    const celsius = scale ==='f' ? tryConvert(temp, tocelsius): temp;
    const fahrenhit = scale ==='c' ? tryConvert(temp, tofahrenhit): temp;
    return(
        <div>
            <TempInput scale='c' temp={celsius} onTempchange={this.handlecelsiuschange}/>
            <TempInput scale='f' temp={fahrenhit} onTempchange={this.handlefahrenhitchange}/>
            <Boilverdict celsius={parseFloat(celsius)} />
        </div>
    )
}
} 
export default Calculator;