//constructor
function Node(val, x, y){
    this.left = null;
    this.right = null;
    this.value = val;
    this.x = x;
    this.y = y;
}


//var nodeMap = [];


//searches the tree for a value and returns the Node that has the value

Node.prototype.search = function(val){
    
    if (val == this.value) return this;
    
    if (this.left != null && this.value > val){
        return this.left.search(val);
    }
    
    if (this.right != null && this.value < val){
        return this.right.search(val);
    } 
}


//logs the node to console
Node.prototype.visit = function(){
    if (this.left != null) this.left.visit();
    
    console.log(this.value);
    this.mapNode();
    
    if (this.right != null) this.right.visit();
}


/*
Adds a node to the tree by assigning it as a child of another node. 
Method uses recursion to check if the children are null and assigns the node based on
comparison to the parent. '<' will be a left child and '>' will be a right child.
*/
Node.prototype.addNode = function(n){
    if (n.value < this.value){
        if (this.left == null){
            this.left = n;
            this.left.x = this.x - 70;
            this.left.y = this.y + 50;
            
        }else{
            this.left.addNode(n);
        }
    } 
    if (n.value > this.value) {
        if (this.right == null){
            this.right = n;
            this.right.x = this.x + 70;
            this.right.y = this.y + 50;
        }else{
            this.right.addNode(n);
        }
    }
}


//Draws node to canvas
Node.prototype.mapNode = function(){
   c.fillText(this.value,this.x, this.y);
    
    
}