
/**
 * A generic class that holds HTML-like information of elements. ContentElement objects are intended to be processed by a converter class/method to be useful for specific frameworks/GUIs (e.g. React or HTML).
 */
class ContentElement {
    private _tag:string = '';
    private _content: string|number = '';
    private _innerHtml:boolean = false;
    private _attributes?: Record<string, string>;
    private _children?: ContentElement[];

    constructor(tag:string, content:string|number, innerHtml: boolean, obj: { attributes?: Record<string,string>, children?: ContentElement[] } = {}) {
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

    /**
     * Creates an Image ContentElement from provided source path.
     * @remarks 
     * @param src - relative path of image
     * @returns a new ContentElement
     */
    static Image(src:string) : ContentElement {
        return new ContentElement('img', 
            '', 
            false, 
            {
                attributes: {"src": src} }
        );
    }

    static Figure(imgSrc:string = '', caption:string = '') : ContentElement {
        
        let figure = new ContentElement('figure', 
            '',
            false,
            {
                children: [
                    new ContentElement("img", '', false, {
                        attributes: {src: imgSrc}
                    }),
                    new ContentElement('figcaption', `fig: ${caption}`, false)
                ]
            }
        )
        return figure;    
    }
    
    static H3(content:string, hasInnerHTML:boolean = false) : ContentElement {
        return new ContentElement('h3', content, hasInnerHTML);
    }

    get Tag():string {return this._tag;}
    get Content():string|number{ return this._content}
    get HasInnerHtml():boolean {return this._innerHtml}
    get Attributes():Record<string,string> | undefined {return this._attributes} 
    get Children() : ContentElement[] | undefined {return this._children}

}

export default ContentElement;