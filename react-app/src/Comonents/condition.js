import { render } from "@testing-library/react";
import React from "react";

// function Garage(props){

//         const cars = props.cars;
//         return(
//             <>
//                 <h1>Garage</h1>
//                 {cars.length > 0 &&
//                 <h2>You have {cars.length} cars in garage.</h2>
//                 }
//             </>
//         )
// }
// export default Garage 

// function MadeGoal(){
//     return <h1> Goal is made</h1>
// }
// function MissGoal(){
//     return <h2>MissGoal</h2>
// }
// function Goal(props){
//     const isGoal = props.isGoal;
//     return(
//         <>
//        { isGoal ? <MadeGoal /> : <MissGoal />}
//        </>
//     )
// }
// export default Goal;
// function Greeting(props){
//     const isLoggedIn = props.isLoggedIn;
//     if(isLoggedIn){
//         return <UserGreeting />
//     }
//     else{
//         return <GuestGreeting />
//     }
// }
// function UserGreeting(props){
//     return <h1>Welcome Back</h1>
// }
// function GuestGreeting(props){
//     return <h1>Please sign in.</h1>
// }
// function LoginButton(props){
//     return(
//         <button onClick={props.onClick}>Login</button>
//     )
// }
// function LogoutButton(props){
//     return(
//         <button onClick={props.onClick}>Logout</button>
//     )
// }
// class LogicalControl extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {isLoggedIn : false}
//     }
//     handleloginclick = () => {
//         this.setState({isLoggedIn:true})
//     }
//     handlelogoutclick = () => {
//         this.setState({isLoggedIn:false})
//     }
   
//     render() {
//         const isLoggedIn = this.state.isLoggedIn;
//         let button;
//         if(isLoggedIn){
//             button = <LogoutButton onClick = {this.handlelogoutclick} ></LogoutButton>
//         }
//         else{
//             button = <LoginButton onClick = {this.handleloginclick} ></LoginButton>
//         }
//         return(
//             <div>
//                 <h1>hello</h1>
//                 <Greeting isLoggedIn={isLoggedIn} />
//                 {button}
//             </div>
//         )

// }
// }
// export default LogicalControl;

// function MailBox(props){
//     const unreadmsg = props.unreadmsg
//     return(
//         <div>
//             <h1>Hello ,Ruchi!!</h1>
//             {unreadmsg.length > 0 && 
//             <h2>You have {unreadmsg.length} unread message.</h2>} 

            
//         </div>
//     )
// }
// function WarnningBanner(props){
//     if (!props.warn) {
//         return null;
//       }
//     return(
//         <div className="warning">
//             Warning
//         </div>
//     )
// }
// class MailBox extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {showwarning : true}
//     }
//     handletoggleclick = () =>{
//         this.setState(prevState =>({showwarning:!prevState.showwarning}))
//     }
//     render(){
//         return(
//             <div >
//             <WarnningBanner warn={this.state.showwarning}/>
//             <button onClick={this.handletoggleclick}>{this.state.showwarning ? 'hide' : 'show'}</button>
//             </div>
//         )
//     }
// }
// export default MailBox;