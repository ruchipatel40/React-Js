// function Listandkey(){
//     const numbers = [11,22,33,44,55];
//     const listitems = numbers.map((number) => <li key={number.toString()}>{number}</li>)
//     return(
//             <ul>{listitems}</ul>
//     )
// }
// export default Listandkey;  

function Car(props) {
    return <li>I am a { props.brand }</li>;
  }
  
//   function Garage() {
//     const cars = ['Ford', 'BMW', 'Audi'];
//     return (
//       <>
//           <h1>Who lives in my garage?</h1>
//           <ul>
//           {cars.map((car) => <Car brand={car} />)}
//         </ul>
//       </>
//     );
//   }
// function Garage(){
//     const cars = [
//         {id:1,brand:'Ford'},
//         {id:2,brand:'BMW'},
//         {id:3,brand:'Audi'}
//     ]
//     return(
//         <div>
//             <ul>
//                 {cars.map((car)=><Car key={car.id} brand={car.brand} />)}
//             </ul>
//         </div>
//     )
// }
//     export default Garage;

function Blog(props) {
    const sidebar = (
        <ul>
            {props.posts.map((post) => <li key={post.id}>{post.title}</li>)}
        </ul>
    )
    const content = 
        props.posts.map((post) => 
        <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </div>)
   return(
       <div>
           {sidebar} <hr />
           {content}
       </div>
   )
}
export default Blog;