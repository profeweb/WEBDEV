
class List {

   constructor(){
      this.listSize = 0;
      this.pos = 0;
      this.dataStore = [];
   }

   append(element) {
      this.dataStore[this.listSize++] = element;
   }

   find(element) {
      for (var i = 0; i < this.dataStore.length; ++i) {
         if (this.dataStore[i] == element) {
            return i;
         }
      }
      return -1;
   }

   remove(element) {
      var foundAt = this.find(element);
      if (foundAt > -1) {
         this.dataStore.splice(foundAt,1);
         --this.listSize;
         return true;
      }
      return false;
   }

   toString() {
      return this.dataStore;
   }
}

