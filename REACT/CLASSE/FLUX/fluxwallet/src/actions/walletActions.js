import Dispatcher from '../dispatchers';
import ActionTypes from '../constants';
 
class WalletActions {
 
    addNewItem(item) {
        
        Dispatcher.dispatch({
            actionType: ActionTypes.ADD_NEW_ITEM,
            payload: item 
        });
    }
 
}
 
export default new WalletActions();