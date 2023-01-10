import { LinkedList } from "./LinkedList";

export class Project {

    _title = 'none';
    _subtitle = '';
    _year = 0;
    _location = '';
    _categories = null;
    _content = null;
    
    constructor(title, year, location){
        this._title = title;
        this._year = year;
        this.location = location;
        this._categories = new Set();
        this._content = new LinkedList();
    }

    addCategory(category) {
        if (typeof category !== "string") return false;
        
        this._categories.add(category);
        return true;
    }

    //returns true if delete successful.
    removeCategory(category) {
        return this._categories.delete(category);
    }

    pushContent(element) {
        this._content.push(element);
    }

    pushContents() {
       for (let i = 0; i < arguments.length; i++) {
            //this.pushContent(element);
        };
    }
    

    insertContent(element, index) {
        this._content.insert(element, index);
    }

    removeContent(element) {
        this._content.delete(element);
    }

    get Categories() {
        return this._categories;
    }

    get Title() {
        return this._title;
    }

    get Year() {
        return this._year;
    }

    get Location() {
        return this._location;
    }

    get Content() {
        return this._content;
    }

    get ContentCount() {
        return this._content.Size;
    }

}