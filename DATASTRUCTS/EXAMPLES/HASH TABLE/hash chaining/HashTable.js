class HashTable {

   constructor(){
      this.table = new Array(23);
      this.buildChains();
   }

   buildChains() {
      for (var i = 0; i < this.table.length; ++i) {
         this.table[i] = new Array();
      }
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
      var pos = this.simpleHash(data);
      var index = 0;
      if (this.table[pos][index] == undefined) {
         this.table[pos][index] = data;
      }
      else {
         while (this.table[pos][index] != undefined) {
            ++index;
         }
         this.table[pos][index] = data;
      }
    } 

    get(key) {
       var index = 0;
       var pos = this.simpleHash(key);
       if (this.table[pos][index] == key) {
          return this.table[pos][index];
       }
       else {
          while ((this.table[pos][index] != undefined) &&
                 (this.table[pos][index] != key)) {
             index++;
          }
          return this.table[pos][index];
       }
       return undefined;
     } 

   showDistro() {
      for (var i = 0; i < this.table.length; ++i) {
        if (this.table[i][0] != undefined) {
            console.log(i + ": " + this.table[i]);
        }
      }
    }



   // Additional functions to display list

   display(bx, by){
      var n=0;
      for (var i = 0; i < this.table.length; ++i) {
        if (this.table[i][0] != undefined) {
          rectMode(CENTER);
          var index =0;
          while (this.table[i][index] != undefined) {
              var x = bx + n*120;
              var y = by + index*100;
              var item =  new Item(i, this.table[i][index]);
              item.display(n, index, x, y, 100, 50);  
              ++index;
          }
          n++; 

        }    
      }

      //Display length
      fill(0);
      text("HashTable Length: "+n+" of "+this.table.length, baseX, baseY-60);
   }
   
}