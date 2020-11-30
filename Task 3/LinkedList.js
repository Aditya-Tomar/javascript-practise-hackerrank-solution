class LinkedList{

    constructor( ){
        this.root = null;
        this.tail = null;
    }

    setRoot( node ){
        this.root = node;
    }

    getRoot(){
        return this.root;
    }

    setTail( node ){
        this.tail = node;
    }

    getTail(){
        return this.tail;
    }

    setNode( node ){
        this.getTail().setNext( node );
        this.setTail( node );
    }

    addElement( ){

        let elements = prompt('Enter the number of elements you want to enter : ','');

        while( elements > 0 ){
            let data = prompt('Enter the data : ','');
            let node = new Node( data );
            
            if( this.root === null){
                this.setRoot( node );
                this.setTail( node );
            }
            else{
                this.setNode( node );
            }
            elements--;
        }
    }

    getNodeData( nodePosition ){

        let node = this.getRoot();

        while( --nodePosition ){
            node = node.getNext();
        }
        return node ? node.getData() : -1;
    }

    showElement(){
        let node = this.getRoot();
        while( node ){
            console.log( node.getData() );
            node = node.getNext();
        }
    }
}

class Node{

    constructor( data ){
        this.data = data;
        this.next = null;
    }

    getData(){
        return this.data;
    }

    setData( data ){
        this.data = data;
    }

    setNext( node ){
        this.next = node;
    }

    getNext(){
        return this.next;
    }

}

let list = new LinkedList();
list.addElement( );
list.showElement( );
console.log(list.getNodeData( 4 ));
list.addElement( );
list.showElement( );