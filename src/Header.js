import React from "react"
import HamburgerMenu from "react-hamburger-menu"
import MobileMenu from "./MobileMenu.js"

class Header extends React.Component {
    constructor(){
        super()
        this.state = {
            open: false,
            isBoxVisible: false
        }
    }
        handleClick = () => {
       
            this.setState(prevState => ({ open: !this.state.open, isBoxVisible: !prevState.isBoxVisible }))
    }

    render(){

        return(
            <>
            <header  className={this.props.className}>
                <div style={{height: 80, width: 80}}>
                    <img className={this.props.whiteClass} style={{height: "100%", width: "100%"}} alt="logo" src={require("./whiteLogo.png")}></img>
                    <img className={this.props.orangeClass} style={{display: "none", height: "100%", width: "100%"}} alt="logo" src={require("./orangeLogo.png")}></img>
                </div>
                
                <HamburgerMenu
                    className="burger"
                    isOpen={this.state.open}
                    menuClicked={this.handleClick}
                    width={30}
                    height={25}
                    strokeWidth={4}
                    rotate={0}
                    color={this.props.burgerColor}
                    borderRadius={0}
                    animationDuration={0.5}
                    
                />
            </header>
            <MobileMenu onClick={this.handleClick} style={!this.state.isBoxVisible? {right: "-400px"} : {right: "0px"}}></MobileMenu>
            </>
        )

    }

}
export default Header