
class Queue {

   constructor(){
      this.dataStore = [];
   }

   enqueue(element) {
      this.dataStore.push(element); 
   }

   dequeue() {
      var priority = this.dataStore[0].code;  
      var index = 0;
      for (var i = 1; i < this.dataStore.length; ++i) {
         if (this.dataStore[i].code < priority) {
            priority = this.dataStore[i].code;
            index = i;
         }
      }
      return this.dataStore.splice(index,1);
    } 

   front(){
      return this.dataStore[0];
   }

   back(){
      return this.dataStore[this.dataStore.length-1];
   }

   clear() {
      
   }

   empty() {
      return (this.dataStore.length==0);
   } 

   toString() {
      var reStr="";
      for(var i=0; i<this.dataStore.length; i++){
         reStr+= this.dataStore[i]+"\n";
      }
      return reStr;
   }


   // Additional functions to display stack

   display(bx, by){
      for (var i = this.dataStore.length-1; i>=0; i--) {
         var name = this.dataStore[i].name;
         var code = this.dataStore[i].code;
         var item = new Item(name, code);
         rectMode(CENTER);
         var k = this.dataStore.length - 1 - i;
         var x = bx + k*150;
         var y = by;
         item.display(i, this.dataStore.length, x, y, 100, 50);
      }

      //Display length
      fill(0);
      textSize(16);
      text("Queue Length: "+this.dataStore.length+".", baseX, baseY+100);
   }
}

