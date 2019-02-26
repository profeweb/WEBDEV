class BSTree {

   constructor(){
      this.root = null;
      this.traverseMode = "PREORDER";
   }

   insert(data) {
      var n = new Node(data, null, null);
      if (this.root == null) {
          this.root = n;
      }
      else {
          var current = this.root;
          var parent;
          while (true) {
               parent = current;
               if (data < current.data) {
                  current = current.left;
                  if (current == null) {
                     parent.left = n;
                     break;
                  }
               }
               else {
                  current = current.right;
                  if (current == null) {
                     parent.right = n;
                     break;
                  }
              }
          }
      }
   } 

   traverseInOrder(){
    console.log("INORDER: ");
    this.inOrder(this.root);
   }

   inOrder(node) {
      if (!(node == null)) {
         this.inOrder(node.left);
         console.log(node.show() + " ");
         this.inOrder(node.right);
      }
   } 

   traversePreOrder(){
    console.log("PREORDER: ");
    this.preOrder(0, this.root);
   }

   preOrder(n, node) {
      if (!(node == null)) { 
         console.log(node.show() + " ");
         node.num = n;
         var nLeft = this.preOrder(n+1, node.left);
         return this.preOrder(nLeft, node.right);
      }
      else {
        return n;
      }
   }

   traversePostOrder(){
    console.log("POSTORDER: ");
    this.postOrder(this.root);
   }

   postOrder(node) {
      if (!(node == null)) { 
         this.postOrder(node.left);
         this.postOrder(node.right);
         console.log(node.show() + " ");
      }
   }

   getMin() {
      var current = this.root;
      while (!(current.left == null)) {
         current = current.left;
      }
      return current.data;
    }

    getMax() {
       var current = this.root;
       while (!(current.right == null)) {
          current = current.right;
       }
       return current.data;
    } 

   find(data) {
      var current = this.root;
      while (current.data != data) {
         if (data < current.data) {
            current = current.left;
         }
         else {
            current = current.right;
         }
         if (current == null) {
            return null;
         }
      }
      return current;
   } 

   remove(data) {
      this.root = this.removeNode(this.root, data);
    }

   removeNode(node, data) {
      if (node == null) {
         return null;
      }
      if (data == node.data) {
         // node has no children
         if (node.left == null && node.right == null) {
         return null;
         }
        
         // node has no left child
         if (node.left == null) {
            return node.right;
         }

         // node has no right child
         if (node.right == null) {
            return node.left;
         }

         // node has two children
         var tempNode = this.getSmallest(node.right);
         node.data = tempNode.data;
         node.right = this.removeNode(node.right, tempNode.data);
         return node;
      }
      else if (data < node.data) {
         node.left = this.removeNode(node.left, data);
         return node;
      }
      else {
         node.right = this.removeNode(node.right, data);
         return node;
      }
    }

    getSmallest(node){
      var current = node;
      while (!(current.left == null)) {
         current = current.left;
      }
      return current.data;
    }

   // Additional functions to display list

   display(bx, by){

      var rootNode = this.root;

      line(bx, by, bx, by -50);
      rectMode(CENTER);
      this.root.display(1, bx, by, 50, 50);

      fill(0);
      text("ROOT", bx, by-60);

      textSize(14);
      text("VIEW: "+this.traverseMode, 200, 200 );
   }
   
}