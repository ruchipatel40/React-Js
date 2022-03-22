// import React from "react";
// class Card extends React.Component{
//     constructor(props){
//         super(props);

//         this.state = { darkMode: true}
//     }
//     handlechange =(e) =>{
//         this.setState({darkMode:!this.state.darkMode})
//     }
//     render(){
//         const modeclass = this.state.darkMode ? 'dark-mode': 'light-mode'
//         let checked = this.state.darkMode ? 'checked' : 'unchecked'
//         return(
//             <div className={`box content ${modeclass}`}>
//                 <h1 >Example Component</h1>
//                 <p> was built with a Class component extending React.Component.</p>
//                 <label className="checkbox">
//                     <input type='checkbox' defaultChecked={checked} onChange={this.handlechange} /> Dark Mode
//                 </label>
//             </div>
//         )
//     }
// }
// export default Card
