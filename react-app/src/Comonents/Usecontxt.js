import React ,{ createContext, useContext, useState ,useEffect} from "react";
// const themes = {
//     light: {
//       color: "#000000",
//       background: "#eeeeee"
//     },
//     dark: {
//       color: "#ffffff",
//       background: "#222222"
//     }
//   };
  
//   const ThemeContext = React.createContext(themes.light);
  
//   function App() {
//     return (
//       <ThemeContext.Provider value={themes.dark}>
//         <Toolbar />
//       </ThemeContext.Provider>
//     );
//   }
  
//   function Toolbar(props) {
//     return (
//       <div>
//         <ThemedButton />
//       </div>
//     );
//   }
  
//   function ThemedButton() {
//     const theme = useContext(ThemeContext);
//     return (
//       <button style={{ background: theme.background, color: theme.color }}>
//         I am styled by theme context!
//       </button>
//     );
//   }
//   export default App 

// const Context1 = createContext();
// function Main(){
//     const [count,setcount] = useState(0)
//     useEffect(() => {
//         setTimeout(() => {
//           setcount(count + 1 );
//         }, 1000);
//       });
//     return(
//         <Context1.Provider value={count} >
//             <Mycontext />
//         </Context1.Provider>
//     )
// }
// function Mycontext(){
//     const value2= useContext(Context1)
//     return(
//         <span>{value2}</span>
//     )
// }
// export default Main;
const themes = {
    light: {
      color: "black",
      background: "white"
    },
    dark: {
      color: 'white',
      background: "black"
    }
  };
  
  const ThemeContext = React.createContext(themes.light);
  
  function App() {
     const toggleTheme = () =>{
        theme === themes.dark ? settheme(themes.light) :settheme(themes.dark)
     }
     const [theme ,settheme] = useState(themes.light)
    return (
      <ThemeContext.Provider value={theme}>
      <button onClick={toggleTheme} >Click</button>
        <ThemedButton />
      </ThemeContext.Provider>
    );
  }
  

  
  function ThemedButton() {
    const themes = useContext(ThemeContext);
    
    return (
     <div style={themes}>
         <p> this is {JSON.stringify(themes)}context </p>
     </div>
    );
  }
  export default App 