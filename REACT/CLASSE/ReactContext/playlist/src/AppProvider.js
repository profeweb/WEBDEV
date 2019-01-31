import React, { Component } from 'react';

export const AppContext = React.createContext();

class AppProvider extends Component {
	
	state = {

		song : {
			title: 'Despacito',
			artist: 'Luis Fonsi',
			released: '2017',
		}
	}

	render() {
		return(
			<AppContext.Provider value={{state: this.state}}>
				{this.props.children}
			</AppContext.Provider>
		);
	}
}

export default AppProvider;
