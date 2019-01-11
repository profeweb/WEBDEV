import React from 'react';
//import ReactDOM from 'react-dom';
import './App.css';
import CalcDisplay from './components/CalcDisplay.js';
import CalcButton from './components/CalcButton.js';

class App extends React.Component {

	constructor(props) {
	  super(props);

	  // Estat del component (operands)
	  this.state = {
	    operand1: '0',
	    operand2: '0',
	    initial: true,
	  };

	  // Fer "bind" ales funcions de classe
	  // per evitar fer-ho quan especificam les callbacks en JSX
	  this.updateOperand = this.updateOperand.bind(this);
	  this.doDiv = this.doDiv.bind(this);
	  this.doMul = this.doMul.bind(this);
	  this.doAdd = this.doAdd.bind(this);
	  this.doSub = this.doSub.bind(this);
	  this.doCalc = this.doCalc.bind(this);
	  this.doClear = this.doClear.bind(this);
	}

	// Actualitzar operand
	updateOperand(value) {
	  let newVal = value;

	  if( ! this.state.initial ) {
	    newVal = this.state.operand1 + value;
	  }

	  this.setState({operand1: newVal,
	                  initial: false});
	}

	// Preparar calculadora 
	prepCalc(calcFn) {
	  this.setState({operand2: this.state.operand1,
	                 calcFn: calcFn,
	                 initial: true});
	}

	// Operar la divisió 
	doDiv() {
	  this.setState({operand1: this.state.operand2 / this.state.operand1});
	}

	// Operar la multiplicació
	doMul() {
	  this.setState({operand1: this.state.operand2 * this.state.operand1});
	}

	// Operar la resta
	doSub() {
	  this.setState({operand1: this.state.operand2 - this.state.operand1});
	}

	// Operar la suma
	doAdd() {
	  this.setState({operand1: parseInt(this.state.operand2) + parseInt(this.state.operand1)});
	}

	doCalc() {
	  this.state.calcFn();
	  this.setState({initial: true});
	}

	// Resetear l'estat (operands) de la calculadora
	doClear() {
	  this.setState({
	    operand1: '0',
	    operand2: '0',
	    calcFn: '',
	    initial: true,
	  });
	}

	// Visualitzar la calculadora
	render() {
	    return (
	      <div className="App">
	        <h1>Calculator</h1>
	        <div className="calculator">
		        <CalcDisplay  displayNumber={this.state.operand1} />
		        <div>
		          <CalcButton value="1" ifClicked={this.updateOperand} />
		          <CalcButton value="2" ifClicked={this.updateOperand} />
		          <CalcButton value="3" ifClicked={this.updateOperand} />
		          <CalcButton value="/" ifClicked={this.prepCalc.bind(this, this.doDiv)} />
		        </div>
		        <div>
		          <CalcButton value="4" ifClicked={this.updateOperand} />
		          <CalcButton value="5" ifClicked={this.updateOperand} />
		          <CalcButton value="6" ifClicked={this.updateOperand} />
		          <CalcButton value="*" ifClicked={this.prepCalc.bind(this, this.doMul)} />
		        </div>
		        <div>
		          <CalcButton value="7" ifClicked={this.updateOperand} />
		          <CalcButton value="8" ifClicked={this.updateOperand} />
		          <CalcButton value="9" ifClicked={this.updateOperand} />
		          <CalcButton value="-" ifClicked={this.prepCalc.bind(this, this.doSub)} />
		        </div>
		        <div>
		          <CalcButton value="C" ifClicked={this.doClear} />
		          <CalcButton value="0" ifClicked={this.updateOperand} />
		          <CalcButton value="=" ifClicked={this.doCalc} />
		          <CalcButton value="+" ifClicked={this.prepCalc.bind(this, this.doAdd)} />
		        </div>
		    </div>
	      </div>
	    );
	}
}

export default App;
