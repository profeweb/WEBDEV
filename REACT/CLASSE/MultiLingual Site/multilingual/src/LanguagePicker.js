import React, {Component} from 'react'

class LanguagePicker extends Component {
    
    // Renderitza els botons per canviar d'idioma
    render(){
        const {changeLanguage} = this.props;
        return (
            <div>
                <button id="en" onClick={changeLanguage}>ENGLISH</button>
                <button id="es" onClick={changeLanguage}>SPANISH</button>
                <button id="ca" onClick={changeLanguage}>CATALAN</button>
            </div>
        )
    }
}

export default LanguagePicker;