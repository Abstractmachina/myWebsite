import { LinkedList } from "./LinkedList";

class Project {

    title = 'none';
    subtitle = '';
    year = 0;
    _categories = null;
    _content = null;
    
    constructor(title, year){
        this.title = title;
        this.year = year;
        categories = new Set();
        content = new LinkedList();

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