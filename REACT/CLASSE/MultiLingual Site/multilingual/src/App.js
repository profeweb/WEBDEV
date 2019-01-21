import React, { Component } from "react";
import { LocaleContext } from "./LocaleContext.js";
import MyPage from "./MyPage.js";

class App extends Component {
  
  constructor(props) {
     super(props);

     // Idioma per defecte 
     this.state = {
       preferredLocale: "es"
     };
  }

  // Canvia l'idioma de visualització
  changeLanguage = ({ currentTarget: { id } }) => {
     this.setState({
       preferredLocale: id
     });
  };
   
  // Renderitza la App amb el context associat (idioma seleccionat).
  render() {
     return (
       <LocaleContext.Provider value={this.state.preferredLocale}>
         <MyPage changeLanguage={this.changeLanguage} />
       </LocaleContext.Provider>
     );
   }
}

export default App;
