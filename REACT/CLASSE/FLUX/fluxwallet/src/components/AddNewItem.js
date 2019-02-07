import React from 'react';
import WalletActions from '../actions/walletActions';
import WalletStore from '../stores/walletStore';

class AddNewItem extends React.Component {

    constructor(props) {
        super(props);

        this._getFreshItem = this._getFreshItem.bind(this);
        
        this.state = {
            item: this._getFreshItem()
        };
    }

    _getFreshItem() {
        return {
            description: '',
            amount: ''
        };
    }

    _updateState(event) {
        let field = event.target.name;
        let value = event.target.value;

        if (value && field === 'amount' && !value.match(/^[a-z0-9.+-]+$/g)) {
            return;
        }

        this.state.item[field] = value;
        this.setState({ item : this.state.item });
    }

    _addNewItem(event) {
        event.preventDefault();
        this.setState({description: this.state.item.description || '-'})
        this.setState({amount: this.state.amount || '0'});
        WalletActions.addNewItem(this.state.item);
        this.setState({ item : this._getFreshItem() });
    }

    render() {
        return (
            <div>
                <h3 className="total-budget">{WalletStore.getTotalBudget()}€</h3>
                <form className="form-inline add-item  justify-content-center" onSubmit={this._addNewItem.bind(this)}>
                    <input type="text" className="form-control description" name="description" value={this.state.item.description} placeholder="Item" onChange={this._updateState.bind(this)} />
                    <div className="input-group amount">
                        <input type="text" className="form-control" name="amount" value={this.state.item.amount} placeholder="Euros" onChange={this._updateState.bind(this)} />
                        <div className="input-group-append">
                            <div className="input-group-text">€</div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary add">Afegir</button>
                </form>
            </div>
        )
    }
}

export default AddNewItem;