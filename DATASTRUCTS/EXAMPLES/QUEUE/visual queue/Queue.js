
class Queue {

   constructor(){
      this.dataStore = [];
   }

   enqueue(element) {
      this.dataStore.push(element); 
   }

   dequeue() {
      return this.dataStore.shift();
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
         var item = new Item(this.dataStore[i]);
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

