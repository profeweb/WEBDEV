
class DoubleLinkedList {

   constructor(){
      this.head = new Node("head");
   }

   find(item) {
      var currNode = this.head;
      while (!(currNode.next == null) && 
              (currNode.element != item)) {
         currNode = currNode.next;
      }

      if(currNode.element==item){
         return currNode;
      }
      else {
         return null;
      }
   } 

   insert(newElement, item) {
      var newNode = new Node(newElement);
      var current = this.find(item);
      newNode.next = current.next;
      newNode.previous = current;
      current.next = newNode;
   } 

   findPrevious(item) {
      var currNode = this.head;
      while(!(currNode.next == null) && 
             (currNode.next.element != item)){
         currNode = currNode.next;
      } 
     return currNode;
   } 

   remove(item) {
      var currNode = this.find(item);
      if (!(currNode.next == null)) {
          currNode.previous.next = currNode.next;
          currNode.next.previous = currNode.previous;
          currNode.next = null;
          currNode.previous = null;
      }
   }

   findLast() {
      var currNode = this.head;
      while(!(currNode.next == null)){
         currNode = currNode.next;
      } 
     return currNode;
   } 

   dispReverse() {
      var currNode = this.head;
      currNode = this.findLast();
      while (!(currNode.previous == null)) {
         console.log(currNode.element);
         currNode = currNode.previous;
      }
   }

   length() {
      var i=0;
      var currNode = this.head;
      while (!(currNode.next == null)) {
         i++;
         currNode = currNode.next;
      }
      return i;
   } 

   displayConsole() {
      var currNode = this.head;
      while (!(currNode.next == null)) {
         console.log(currNode.next.element);
         currNode = currNode.next;
      }
   } 


   // Additional functions to display stack

   display(bx, by){
      var currNode = this.head;
      var i=0;
      var n=this.length();
      while (!(currNode.next == null)) {
         
         var item = new Item(currNode.next.element);
         var x = bx + i*150;
         var y = by;
         item.display(i, n, x, y, 100, 50);

         currNode = currNode.next;
         i++;
      }

      //Display length
      fill(0);
      textSize(16);
      text("Double Linked List Length: "+n+".", baseX, baseY+100);
   }
}

