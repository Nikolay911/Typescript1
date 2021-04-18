interface ILinkedMetods<T> {

    addLast(t: T) : void;
    addFirst(t: T) : void;
    addPosition(t: T, counter: number) : void;
    delitePosition(counter: number) : void;
    printElementByIndex(counter: number) : void;
    printAllElement() : void;
    deliteFirst(): void;
}