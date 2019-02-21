class Dictionary {

   constructor(){
      this.dataStore = [];
   }

   add(key, value) {
        this.dataStore[key]=value;
   } 

   find(key) {
        return this.dataStore[key];
   }

   remove(key) {
        delete this.dataStore[key];
   }  

   count() {
      var n = 0;
      for (var key in this.dataStore) {
         ++n;
      }
      return n;
   } 

   clear() {
      for (var key in this.dataStore) {
         delete this.dataStore[key];
      }
   } 

   showAll() {
      var sortedKeys = (Object.keys(this.dataStore)).sort();
      for (var key in sortedKeys) {
        if (this.dataStore.hasOwnProperty(key)) {           
          console.log(key, this.dataStore[key]);
        }
      }
   }

   sortedKeys(){
    return (Object.keys(this.dataStore)).sort();
   }

   // Additional functions to display list

   display(bx, by){
      var i=0;
      var sKeys = this.sortedKeys();
      for (var k in sKeys) {   
          var key = sKeys[k];
          var item = new Item(key, this.dataStore[key]);
          rectMode(CENTER);
          var x = bx + i*120;
          var y = by;
          item.display(i, x, y, 100, 50);
          i++;
        
      }

      //Display length
      fill(0);
      text("Dictionary Length: "+this.count(), baseX, baseY+100);
   }
   
}