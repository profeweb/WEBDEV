class Set {

   constructor(){
      this.dataStore = [];
   }

   add(data) {
      if (this.dataStore.indexOf(data) < 0) {
         this.dataStore.push(data);
         return true;
      }
      else {
         return false;
      }
   } 

   remove(data) {
      var pos = this.dataStore.indexOf(data);
      if (pos > -1) {
         this.dataStore.splice(pos,1);
         return true;
      }
      else {
         return false;
      }
    }

    contains(data) {
       if (this.dataStore.indexOf(data) > -1) {
          return true;
       }
       else {
          return false;
       }
     }

     union(set) {
        var tempSet = new Set();
        for (var i = 0; i < this.dataStore.length; ++i) {
           tempSet.add(this.dataStore[i]);
        }

        for (var i = 0; i < set.dataStore.length; ++i) {
           if (!tempSet.contains(set.dataStore[i])) {
              tempSet.dataStore.push(set.dataStore[i]);
           }
        }
        return tempSet;
     } 


    intersect(set) {
      var tempSet = new Set();
      for (var i = 0; i < this.dataStore.length; ++i) {
        if (set.contains(this.dataStore[i])) {
            tempSet.add(this.dataStore[i]);
        }
      }
      return tempSet;
    } 

    difference(set) {
       var tempSet = new Set();
       for (var i = 0; i < this.dataStore.length; ++i) {
          if (!set.contains(this.dataStore[i])) {
             tempSet.add(this.dataStore[i]);
          }
       }
       return tempSet;
     } 

    subset(otherSet) {
      
       if (this.size() > otherSet.size()) {
          return false;
       }
       else {
          for (var i = 0; i < this.dataStore.length; ++i) {
             if (!otherSet.contains(this.dataStore[i])) {
                return false;
             }
          }
       }
       return true;
    } 

    size() {
       return this.dataStore.length;
    }

    show() {
       return this.dataStore;
     }

   // Additional functions to display list

   display(name, bx, by, color){
      var n=this.size();
      for (var i=0; i<n; i++) {   
          var item = new Item(this.dataStore[i]);
          rectMode(CENTER);
          var x = bx + i*120;
          var y = by;
          item.display(i, x, y, 100, 50, color);
      }

      //Display length
      fill(0);
      text("Set Length: "+n, bx, by+50);

      //Display set name
      fill(0);
      textSize(18);
      text(name, bx-90, by+9);
   }
   
}