import ContentElement from "./ContentElement";
import React from 'react';



class ContentConverter {

    /**
     * Recursively builds react dom from ContentElement object. 
     */
    static convertFromContentElement(content: ContentElement, key?:string): React.ReactElement {
        let props: Record<string, any> = { };
        let el;
        if (key) props.key = key;

        //if there are attributes, feed them into props object.
        if (content.Attributes) {
            for (let [key, value] of Object.entries(content.Attributes)){
                props[key] = value;
            }
        }

        //if there are children, build DOM
        let children: React.ReactElement[] | null = null;        
        if (content.Children) {
            children = this.buildDOM(content);
        }


        if (content.Tag === 'img') 
        {
            el = React.createElement(content.Tag, props, null );
        }
        else if (content.HasInnerHtml) {
            props["dangerouslySetInnerHTML"] = 
            {
                __html: content.Content,
            }
            el = React.createElement(content.Tag, props, null );

        }
        else{
            el = React.createElement(content.Tag, props, content.Content, children );
        }
        return el;
    }

    
    static buildDOM(el: ContentElement) : React.ReactElement[] | null {

        if (!el.Children) return null;

        let children = el.Children.map(child => {
            return this.convertFromContentElement(child);
        })
        return children;
    }

} export default ContentConverter