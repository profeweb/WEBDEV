
class Stack {

   constructor(){
      this.top = 0;
      this.dataStore = [];
   }

   push(element) {
      this.dataStore[this.top++] = element; 
   }

   peek() {
      return this.dataStore[this.top-1];
   }

   pop() {
      return this.dataStore[--this.top];
   }

   clear() {
      this.top = 0;
   }

   length() {
      return this.top;
   } 

   toString() {
      return this.dataStore;
   }


   // Additional functions to display stack

   display(bx, by){
      for (var i = this.top-1; i>=0; i--) {
         var item = new Item(this.dataStore[i]);
         rectMode(CENTER);
         var k = this.top - i;
         var x = bx + k*70;
         var y = by + k*60;
         item.display(i, this.top, x, y, 100, 50);
      }

      //Display length
      fill(0);
      textSize(16);
      text("Stack Length: "+this.top+".", baseX+450, baseY+50);
   }
}

