
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
         if (this.dataStore[i].name == element) {
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

   front() {
     this.pos = 0;
   }

   end() {
      this.pos = this.listSize-1;
   }

   prev() {
    if (this.pos > 0) {
      --this.pos;
    }
   }

   next() {
    if (this.pos < this.listSize-1) {
      ++this.pos;
    }
   }

   currPos() {
      return this.pos;
   }

   moveTo(position) {
      this.pos = position;
   }

   getElement() {
      return this.dataStore[this.pos];
   }



   // Additional functions to display list

   display(bx, by){
      for (var i = 0; i < this.dataStore.length; ++i) {

         var name = this.dataStore[i].name;
         var age = this.dataStore[i].age;
         var sex = this.dataStore[i].sex;
         var item = new ItemList(name, age, sex);
         rectMode(CENTER);
         var x = bx + i*140;
         var y = by;
         item.display(i, this.listSize, this.pos, x, y, 120, 60);
      }

      //Display pos
      var xpos = bx+this.pos*140;
      var ypos = by - 100;
      strokeWeight(2);
      strokeCap(ROUND);
      line(xpos, ypos, xpos, ypos+30);
      line(xpos, ypos+30, xpos-10, ypos+30-15);
      line(xpos, ypos+30, xpos+10, ypos+30-15);
      fill(0);
      text("POS", xpos, ypos-10);

      //Display length
      text("List Length: "+this.listSize, baseX, ypos+180);
   }
}

