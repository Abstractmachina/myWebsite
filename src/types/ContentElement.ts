
/**
 * A generic class that holds HTML-like information of elements. ContentElement objects are intended to be processed by a converter class/method to be useful for specific frameworks/GUIs (e.g. React or HTML).
 */
export class ContentElement {
    private _tag:string = '';
    private _content: string|number|null = null;
    private _innerHtml:boolean = false;
    private _attributes?: Record<string, string>;
    private _children?: ContentElement[];

    constructor(tag:string, content:string|number|null, innerHtml: boolean = false, obj: { attributes?: Record<string,string>, children?: ContentElement[] } = {}) {
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

    static VimeoClip(src:string, classes:string) : ContentElement{
        return new ContentElement(
            'div',
            `<div style="padding:56.25% 0 0 0;position:relative"><iframe src="${src}" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="From Graph to Construction"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`,
            true,
            { attributes: {
                className: classes,
                }
            }
        )
    }

    static UL(listItems:ContentElement[]) : ContentElement {
        return new ContentElement('ul', null, false, {
            children: listItems,
            }
        );
    }
    
    static H1(content:string, hasInnerHTML:boolean = false) : ContentElement {
        return new ContentElement('h1', content, hasInnerHTML);
    }
    static H2(content:string, hasInnerHTML:boolean = false) : ContentElement {
        return new ContentElement('h2', content, hasInnerHTML);
    }
    static H3(content:string, hasInnerHTML:boolean = false) : ContentElement {
        return new ContentElement('h3', content, hasInnerHTML);
    }
    static H4(content:string, hasInnerHTML:boolean = false) : ContentElement {
        return new ContentElement('h4', content, hasInnerHTML);
    }
    static H5(content:string, hasInnerHTML:boolean = false) : ContentElement {
        return new ContentElement('h5', content, hasInnerHTML);
    }
    static P(content:string, hasInnerHTML:boolean = false) : ContentElement {
        return new ContentElement('p', content, hasInnerHTML);
    }



    get Tag():string {return this._tag;}
    get Content():string|number|null { return this._content}
    get HasInnerHtml():boolean {return this._innerHtml}
    get Attributes():Record<string,string> | undefined {return this._attributes} 
    get Children() : ContentElement[] | undefined {return this._children}

}

export default ContentElement;