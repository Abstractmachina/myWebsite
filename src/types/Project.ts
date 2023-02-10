import { LinkedList } from "./LinkedList";
import React from 'react';
import ContentElement from "./ContentElement";

class Project {

    private _title:string = 'none';
    private _subtitle:string = '';
    private _year: number = 0;
    private _location:string = '';
    private _categories:Set<string> = new Set();
    private _content: LinkedList<ContentElement> | null = null;
    
    constructor(title:string, year:number, location:string){
        this._title = title;
        this._year = year;
        this._location = location;
    }

    addCategory(category:string) {
        this._categories.add(category);
    }

    //returns true if delete successful.
    removeCategory(category:string) {
        return this._categories.delete(category);
    }

    pushContent(element:ContentElement) {
        if (this._content === null) {
            this._content = new LinkedList<ContentElement>();
        }
            this._content.push(element);
    }

    pushContents(...args: ContentElement[]) {
       for (let i = 0; i < args.length; i++) {
            this.pushContent(args[i]);
        };
    }
    
    insertContent(element: ContentElement, index:number) {
        if (this._content !== null) this._content.insert(element, index);
    }

    /// NOT IMPLEMENTED
    removeContent(element:JSX.Element) {
        throw new Error("Error: Not Implemented");
        // this._content.delete(element);
    }

    //Getters, Setters
    get Categories():Set<string> {
        return this._categories;
    }
    get Title() :string {
        return this._title;
    }

    get Subtitle():string {
        return this._subtitle;
    }
    set Subtitle(val:string) {
        this._subtitle = val;
    }

    get Year() :number{
        return this._year;
    }
    get Location() :string{
        return this._location;
    }

    get HtmlContent() {
        throw new Error("Error: Not Implemented");
        // const container = document.createElement('div');
        // let node = this._content.Head;
        // while (node !== null) {
        //     container.appendChild(node.value);
        //     node = node.next;
        // }
        // return container;
    }

    get Content() : LinkedList<ContentElement> | null {
        return this._content;
    }
    get ContentCount() :number {
        return (this._content !== null) ?  this._content.Size : -1;
    }

}

export default Project;