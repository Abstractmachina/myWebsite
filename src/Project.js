import { LinkedList } from "./LinkedList";

export class Project {

    title = 'none';
    subtitle = '';
    year = 0;
    location = '';
    _categories = null;
    _content = null;
    
    constructor(title, year, location){
        this.title = title;
        this.year = year;
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

    insertContent(element, index) {
        this._content.insert(element, index);
    }

    removeContent(element) {
        this._content.delete(element);
    }


}