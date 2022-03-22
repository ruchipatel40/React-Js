// import React from 'react'

// function Eventhandler() {
//     function clickhandler(){
//         console.log('button clicked..')
//     }
//   return (
//     <div>
//          <h1>hello</h1>
//         <button onClick={clickhandler()}>Click Me!</button>
//     </div>
//   )
// }

// export default Eventhandler;

import React from 'react'

// export class Eventhandler extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             message : 'Hello Ruchi ,Welcome on react js tutorial'
//         }
//     }
//     // clickhandler(){
//     //     console.log('button was clicked..')
//     //     this.setState({message:"Hello ruchi"})
//     // }
//     clickhandler = () =>{
//         this.setState({
//             message :'hello ruchi how are you?'
//         })
//     }
//   render() {
//     return (
//       <div>
//           <h1>{this.state.message}</h1>
//           {/* <button onClick={this.clickhandler.bind(this)}>Click Me!!</button> */}
//           {/* <button onClick={() => this.clickhandler()}>Click Me!</button> */}
//           <button onClick={this.clickhandler}>Click Me !</button>
//       </div>
//     )
//   }
// }

// function Eventhandler() {
//   const shoot = (a) => {
//         alert(a);
//     }
//     return(
//         <button onClick={()=> shoot("goals")}>Click Me!</button>
//     )
// }

// class Eventhandler extends React.Component{
//     // shoot = (a) => {
//     //     alert(a);
//     // }
//     // render(){
//     //     return(
//     //         <button onClick={() => this.shoot('goals')}>Click me</button>
//     //     )
//     // }

//     shoot = (a,b) => {
//         alert(a, b.type);
//     }
//     render(){
//         return(
            
//             <div>
//                 <nav class="navbar navbar-expand-lg navbar-light bg-light">
//                     <div class="container-fluid">
//                         <a class="navbar-brand" href="#">Navbar</a>
//                         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                             <span class="navbar-toggler-icon"></span>
//                         </button>
//                         <div class="collapse navbar-collapse" id="navbarSupportedContent">
//                             <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//                                 <li class="nav-item">
//                                     <a class="nav-link active" aria-current="page" href="#">Home</a>
//                                 </li>
//                                 <li class="nav-item">
//                                     <a class="nav-link" href="#">Link</a>
//                                 </li>
//                                 <li class="nav-item dropdown">
//                                     <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                         Dropdown
//                                     </a>
//                                     <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
//                                         <li><a class="dropdown-item" href="#">Action</a></li>
//                                         <li><a class="dropdown-item" href="#">Another action</a></li>

//                                         <li><a class="dropdown-item" href="#">Something else here</a></li>
//                                     </ul>
//                                 </li>
//                                 <li class="nav-item">
//                                     <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
//                                 </li>
//                             </ul>
//                             <form class="d-flex">
//                                 <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//                                 <button class="btn btn-outline-success" type="submit">Search</button>
//                             </form>
//                         </div>
//                     </div>
//                 </nav>
//                 <div className='container'>
//                     <div class="mb-3">
//                         <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
//                         <textarea class="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
//                     </div>
//                 </div>

//                 {/* <div className='mt-5 fw-bold  display-1'>hello</div>
//                 <button onClick={(event)=>this.shoot('Never give up',event)}>Click me</button> */}
//             </div>
//         )
//     }
// }
function MadeGoal(){
    return <h1>Made Goal</h1>
}
function MissGoal(){
    return <h1>Miss Goal</h1>
}
function Eventhandler(props){
    const isGoal = props.isGoal;
    if(isGoal){
        return <MadeGoal />
    }
    else{
        return <MissGoal />
    }
}
export default Eventhandler;