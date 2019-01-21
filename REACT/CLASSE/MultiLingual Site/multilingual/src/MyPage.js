import React, { Component } from "react";

import LanguagePicker from "./LanguagePicker";
import AboutMe from "./AboutMe";
import WhereIAmFrom from "./WhereIAmFrom";
import Translate from "./locales/Translate";

// Estils de la secció
const styles = {
    app:{
        textAlign:'center'
    }
}

class MyPage extends Component {
  
  // Renderitza el component MyPage aplicant traduccions als strings
  render() {
    return (
      <div style={styles.app}>
        <h1><Translate string={'title-page'}/></h1>
        <LanguagePicker changeLanguage={this.props.changeLanguage} />
        <AboutMe />
        <WhereIAmFrom />
      </div>
    );
  }

}

export default MyPage;