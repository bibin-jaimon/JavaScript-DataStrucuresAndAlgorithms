function createNode(val){
	var newNode = {
		data : val,
		next : null
	}
	return newNode;
}
//CONSTRUCTOR
function LinkedList(){
	this.head = null;
}

//PREPEND
LinkedList.prototype.prepend = function(val) {
	var newNode = createNode(val);
	newNode.next = this.head
	this.head = newNode;
};

//SHOW
LinkedList.prototype.show = function() {
	var temp = this.head;
	myList = [];
	if(temp !== null){
		while(temp !== null){
			var myList = myList + "["+temp.data+"]->";
			temp = temp.next;
		}
	console.log(myList);
	}
	else{
		console.log("The list Empty");
	}
	
};

//APPEND
LinkedList.prototype.append = function(val) {
	var newNode = createNode(val);
	var temp = this.head;
	if(temp!==null){
		while(temp.next !== null){
		temp = temp.next;
		}
		temp.next = newNode;	
	}
	else{
		newNode.next = this.head
		this.head = newNode;
	}
};
//DELETE FRONT
LinkedList.prototype.deleteFront = function() {
	if(this.head === null){
		console.log("The List is Empty")	
	}else{
		this.head = this.head.next;
	}
};
//DELETE END
LinkedList.prototype.deleteEnd = function() {
	temp = this.head;
	if(temp === null){
		console.log("The List is Empty")	
	}
	else{
		while(temp.next.next !== null){
		temp = temp.next;
		}
		temp.next = null;	
	}
	
};
//CHECK IF THE LIST IS EMPTY
LinkedList.prototype.isEmpty =  function(){
	var temp = this.head;
	if(temp === null){
		return true;	
	}
	else return false;
};

//RETURNS NO OF ELEMENTS IN THE LIST
LinkedList.prototype.size = function() {
	var count =0;
	temp = this.head;
	while(temp !== null){
		count++;
		temp = temp.next;
	}
	return count;
};

//INSERT INTO POSITION
LinkedList.prototype.insertPosition = function(pos, val) {
	if(this.isEmpty()){
		console.log("List is Empty");
	}
	else if(pos >= this.size()){
		console.log("Can't insert data at index " + pos);
	}
	else if(pos === 1){
		this.prepend(val);
	}
	else{
		var temp = this.head;
		for(var i =1 ; i<pos-1 ; i++){
			temp = temp.next;
		}
		var newNode = createNode(val);
		var afterNodes = temp.next;
		temp.next = newNode;
		newNode.next = afterNodes;
	}
};

//DELETE FROM POSION
LinkedList.prototype.deletePosition = function(pos) {
	temp = this.head;
	if(this.isEmpty()){
		console.log("List is Empty");
	}else{
		if(pos >= this.size()){
			console.log("The list have no data at index " + pos);
		}	
		else if(pos === 1){
			this.head = this.head.next;
		}
		else{
			for(var i=1;i<pos-1;i++){
				temp = temp.next;
			}
			temp.next = temp.next.next;

		}	
	}
		
};



var list = new LinkedList();
list.prepend(5);
list.append(22);
list.prepend(9);
list.prepend(3);
list.append(10);
list.insertPosition(2,555);
list.deletePosition(3);
list.show();
console.log("Size of the list is :" + list.size());
//console.log(list);