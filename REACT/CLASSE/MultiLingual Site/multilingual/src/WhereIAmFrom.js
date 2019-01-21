import React, {Component} from 'react'
import Translate from "./locales/Translate"

// Estils de la secció
const styles = {
    whereIAmFrom:{
        border: '3px solid black',
        margin: '1% 25%'
    }
}

class WhereIAmFrom extends Component {

    // Renderitza la secció aplicant les traduccions
    render(){
        return (
            <div style={styles.whereIAmFrom}>
                <p><Translate string={'where-i-am-from.city'}/></p>
                <p><Translate string={'where-i-am-from.university'}/></p>
                <p><Translate string={'where-i-am-from.country'}/></p>
            </div>
        )
    }
}

export default WhereIAmFrom;