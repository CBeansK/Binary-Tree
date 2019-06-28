//constructor
function Tree(){
    this.root = null;
}

Tree.prototype.addValue = function(val){
    var n = new Node(val);
    
    if (this.root == null){
        this.root = n;
        this.root.x = canvas.width / 2;
        this.root.y = 100;
    }else{
        this.root.addNode(n);
    }
    
}
//visits each node on the tree. Node.visit() is the method that logs each node to console.
Tree.prototype.traverse = function() {
    this.root.visit();
}

//Searches the tree for a value and returns the Node that contains the value if found.

Tree.prototype.search = function(val){
   var found = this.root.search(val);
    if (found != null) return found;
    else console.log("Not found.")
}