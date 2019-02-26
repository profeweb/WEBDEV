class Graph {

   constructor(v){

         this.vertices = v;
         this.edges = 0;

         this.adj = [];
         for (var i = 0; i < this.vertices.length; i++) {
            var label = this.vertices[i].info;
            this.adj[label] = [];
         }

         this.marked = []; 
         for (var i = 0; i < this.vertices.length; ++i) {
            var label = this.vertices[i].info;
            this.marked[label] = false; 
         } 

         this.edgeTo = [];

         this.currNumber = 0;

    }

    getVertice(v){
      for (var i = 0; i < this.vertices.length; i++) {
         var label = this.vertices[i].info;
         if(label==v){
          return this.vertices[i];
         }
      }
      return null;
    }

    clearMarked(){
      this.marked = []; 
         for (var i = 0; i < this.vertices.length; ++i) {
            var label = this.vertices[i].info;
            this.marked[label] = false; 
         }
    }

    addEdge(v,w) {
       this.adj[v].push(w);
       this.adj[w].push(v);
       this.edges++;
    }

    dfs(v, n) {

      if(n==0){
        this.currNumber = n;
      }
       
       this.marked[v] = true;

       if (this.adj[v] != undefined){
          console.log("Visited vertex: " + v);
          var currVert = this.getVertice(v);
          currVert.num =  this.currNumber;
          this.currNumber++;
       }
       
       for (var i=0; i<this.adj[v].length; i++) {
          var w = this.adj[v][i];
          if (!this.marked[w]) {
             this.dfs(w, n+1);
          }
       }
    }

    bfs(s, n) {

       this.currNumber = 0;
       
       var queue = [];
       this.marked[s] = true;
       queue.push(s); 
       while (queue.length > 0) {
          var v = queue.shift(); 
          if (v != undefined) {
             console.log("Visited vertex: " + v);
             var currVert = this.getVertice(v);
             currVert.num =  this.currNumber;
             this.currNumber++;
          }
          for (var i=0; i<this.adj[v].length; i++) {
             var w = this.adj[v][i];
             if (!this.marked[w]) {
                this.edgeTo[w] = v;
                this.marked[w] = true;
                queue.push(w);
             }
          }
       }
    }

    hasPathTo(v) {
       return this.marked[v];
    }

    pathTo(v) {
       var source = 'A';
       if (!this.hasPathTo(v)) {
          return undefined;
       }

       var path = [];
       for (var i = v; i != source; i = this.edgeTo[i]) {
          path.push(i);
       }
       path.push(source);   
       return path;
     }

    showGraph() {
       for (var i = 0; i < this.vertices.length; ++i) {
          var label = this.vertices[i].info;
          var str= label + " -> ";
          for (var j = 0; j < this.vertices.length; ++j) {
             if (this.adj[label][j] != undefined)
                str+=this.adj[label][j] + ' ';
          }
          console.log(str);
       }
     } 

   // Additional functions to display a graph

   displayEdges(){
    stroke(0); strokeWeight(1);
      for (var i = 0; i < this.vertices.length; ++i) {
         var origin = this.vertices[i].info;
         var posOrigin = this.vertices[i].getPosition();
         for (var j = 0; j < this.vertices.length; ++j) {
            var target = this.vertices[j].info;
            var posTarget = this.vertices[j].getPosition();
            for(var k=0; k<this.adj[origin].length; k++){
              if (this.adj[origin][k] == target){
                line(posOrigin.x, posOrigin.y, posTarget.x, posTarget.y);
              }
            }
         }
      }
   }

   display(){

      this.displayEdges();
      for (var i = 0; i < this.vertices.length; ++i) {
         this.vertices[i].display(50,50);
      }

      fill(0); noStroke();
      textSize(16);
      textAlign(LEFT);
      text("Num Vertices: "+this.vertices.length, 100, 200 );
      text("Num Edges: "+this.edges, 100, 230 );
   }
   
}