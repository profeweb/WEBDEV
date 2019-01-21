import React, {Component} from 'react'
import  Translate  from './locales/Translate.js';

// Estils de la secció
const styles = {
    aboutMe:{
        border: '3px solid black',
        margin: '0 25%'
    }
}

class AboutMe extends Component {

    // Renderitza la secció aplicant les traduccions
    render(){
        return (
            <div style={styles.aboutMe}>
                <p><Translate string={'about-me.name'}/></p>
                <p><Translate string={'about-me.age'}/></p>
                <p><Translate string={'about-me.education'}/></p>
            </div>
        )
    }
}

export default AboutMe;
