

class ContentElement {
    private _tag:string = '';
    private _content: string|number = '';
    private _innerHtml:boolean = false;
    private _attributes?: [string, string][];
    private _children?: ContentElement[];

    constructor(tag:string, content:string|number, innerHtml: boolean, obj: { attributes?: [string, string][], children?: ContentElement[] } = {}) {
        this._tag = tag;
        this._content = content;
        this._innerHtml = innerHtml;
        if (obj.attributes) this._attributes = obj.attributes;
        if (obj.children) this._children = obj.children;
    }

    toString() :string {
        let output = `ContentElement(${this._tag}, ${this._content}, innerHtml:${this._innerHtml}, attributes: ${this._attributes}, children: ${this._children})`;
        return output;
    }

    get Tag():string {
        return this._tag;
    }
    get Content():string|number{ return this._content}
    get HasInnerHtml():boolean {return this._innerHtml}
    get Attributes():[string,string][] | undefined {return this._attributes} 
    get Children() : ContentElement[] | undefined {return this._children}

}

export default ContentElement;