import React from "react"
import Home from "./Home.js"
import Header from "./Header.js"

class App extends React.Component{

  constructor(){
    super()
    this.state={
     isTop: false
    }
}
 
 componentDidMount(){
     document.addEventListener('scroll', () => {
         const isTop = window.scrollY < 420;
         if (isTop !== this.state.isTop) {
             this.setState({ isTop })
         }
       });
 }
   
    
    
    
   
    render(){
          return(
            <>
            <Header whiteClass={!this.state.isTop&&"whiteClass"} orangeClass={!this.state.isTop&&"orangeClass"} className={this.state.isTop? "header" : "headerScroll"} burgerColor={this.state.isTop? "white" : "#BC4123"} />
            <Home/>
            </>
        )
    }
}

export default App