
function List() {
   this.listSize = 0;
   this.pos = 0;
   this.dataStore = [];
   this.find = find;
   this.toString = toString;
   this.append = append;
   this.remove = remove;
   this.length = length;
}

function append(element) {
   this.dataStore[this.listSize++] = element;
}

function find(element) {
   for (var i = 0; i < this.dataStore.length; ++i) {
      if (this.dataStore[i] == element) {
         return i;
      }
   }
   return -1;
}

function remove(element) {
   var foundAt = this.find(element);
   if (foundAt > -1) {
      this.dataStore.splice(foundAt,1);
      --this.listSize;
      return true;
   }
   return false;
}

function toString() {
    return this.dataStore;
}

