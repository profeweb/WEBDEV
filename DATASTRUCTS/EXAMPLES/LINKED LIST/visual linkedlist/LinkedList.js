
class LinkedList {

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
      var prevNode = this.findPrevious(item);
      console.log("Previous: "+prevNode.element.element);
      var itemNode = this.find(item);
      if (!(prevNode.next == null)) {
          prevNode.next = prevNode.next.next;
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
      text("Linked List Length: "+n+".", baseX, baseY+100);
   }
}

