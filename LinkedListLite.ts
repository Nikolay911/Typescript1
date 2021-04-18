// @ts-ignore
class LinkedListLite<T> implements ILinkedMetods<T>{
    private _fstVertex: Vertex<T>;
    private _lstVertex: Vertex<T>;
    public size: number = 0;

    constructor() {


        // @ts-ignore
        this._lstVertex = new Vertex<T>(null, this._fstVertex, null);
        // @ts-ignore
        this._fstVertex = new Vertex<T>(null, null, this._lstVertex);
    }


    addLast(t: T): void {
        let prev: Vertex<T> = this._lstVertex;
        prev.currentElement = t;
        // @ts-ignore
        this._lstVertex = new Vertex<T>(null,prev,null);
        prev.nextElement = this._lstVertex;
        this.size++;
    }
    addPosition(t: T,counter: number): void {
        if(counter>this.size){
            console.log("вышли за пределы списка");
        }
        else if(counter==this.size){
            this.addLast(t);
        }
        else if(counter==0){
            this.addFirst(t);
        }
        else{
            let prev: Vertex<T> = this._fstVertex;
            for(let i: number = 0; i < counter-1; i++){
                prev = this.getNextElement(prev);
            }
            let insert: Vertex<T> = new Vertex<T>(t,prev,prev.nextElement);
            prev.nextElement=insert;
            this.size++
        }

    }

    addFirst(t: T): void {
        let next: Vertex<T> = this._fstVertex;
        next.currentElement = t;
        // @ts-ignore
        this._fstVertex = new Vertex<T>(null,null,next);
        next.prevElement = this._fstVertex;
        this.size++;
    }


    delitePosition(counter: number): void {
        if(counter==0){
            this.deliteFirst();
        }
        else{
            let curr: Vertex<T> = this._fstVertex;
            for(let i: number = 0; i < counter+1; i++){
                curr = this.getNextElement(curr);
            }
            curr.prevElement.nextElement=curr.nextElement;
            curr.nextElement.prevElement=curr.prevElement;
            this.size--;
        }
    }
    deliteFirst(): void{
        let curr: Vertex<T> = this._fstVertex;
        curr = this.getNextElement(curr);
        this._fstVertex=curr;

        this.size--;
    }

    printElementByIndex(counter: number): void {
        let target: Vertex<T> = this._fstVertex.nextElement;
        for(let i: number = 0; i< counter; i++){
            target = this.getNextElement(target);
        }
        console.log(target.currentElement);
    }

    getNextElement(current: Vertex<T>): Vertex<T>{
        return current.nextElement;
    }

    printAllElement(): void {
        let target: Vertex<T> = this._fstVertex.nextElement;
        for(let i: number = 0; i< this.size; i++){
            console.log(target.currentElement);
            target = this.getNextElement(target);

        }
    }

}

class Vertex<T>{

    private _currentElement: T;
    private _nextElement: Vertex<T>;
    private _prevElement: Vertex<T>;

    constructor(currentElement: T,prevElement: Vertex<T>,nextElement: Vertex<T>) {
        this._currentElement=currentElement;
        this._nextElement=nextElement;
        this._prevElement=prevElement;
    }

    get currentElement(): T {
        return this._currentElement;
    }

    set currentElement(value: T) {
        this._currentElement = value;
    }

    get nextElement(): Vertex<T> {
        return this._nextElement;
    }

    set nextElement(value: Vertex<T>) {
        this._nextElement = value;
    }

    get prevElement(): Vertex<T> {
        return this._prevElement;
    }

    set prevElement(value: Vertex<T>) {
        this._prevElement = value;
    }

}
let one: LinkedListLite<String> = new LinkedListLite<String>();
one.addLast("the zero");
one.addLast("the one");
one.addLast("the too");
one.addLast("the three");
one.addFirst("the fore");
one.addFirst("the five");
one.addFirst("the six");
one.printAllElement();

one.deliteFirst();
one.delitePosition(4);
console.log("==================================================: ");
one.printAllElement();

