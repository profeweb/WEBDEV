class HashTable {

   constructor(){
      this.table = new Array(137);
   }

   simpleHash(data) {
      var total = 0;
      for (var i = 0; i < data.length; ++i) {
         total += data.charCodeAt(i);
      }
      return total % this.table.length;
   } 

   betterHash(string) {
      const H = 37;
      var total = 0;
      for (var i = 0; i < string.length; ++i) {
         total += H * total + string.charCodeAt(i);
      }
      total = total % this.table.length;
      return parseInt(total); 
   } 

   put(data) {
      //var pos = this.simpleHash(data);
      var pos = this.betterHash(data);
      this.table[pos] = data;
   }

   get(key) {
      //return this.table[this.simpleHash(key)];
      var index = this.betterHash(key);
      if(this.table[index] != undefined){
        return this.table[this.betterHash(key)];
      }
      else {
        return null;
      }
   }

   showDistro() {
      for (var i = 0; i < this.table.length; ++i) {
        if (this.table[i] != undefined) {
            console.log(i + ": " + this.table[i]);
        }
      }
    }



   // Additional functions to display list

   display(bx, by){
      var n=0;
      for (var i = 0; i < this.table.length; ++i) {
        if (this.table[i] != undefined) {
          rectMode(CENTER);
          var x = bx + n*120;
          var y = by;
          var item =  new Item(i, this.table[i]);
          item.display(n, x, y, 100, 50);  
          n++; 
        }    
      }

      //Display length
      fill(0);
      text("HashTable Length: "+n+" of "+this.table.length, baseX, baseY+100);
   }
   
}