import ContentElement from "./ContentElement";
import React from 'react';

class ContentConverter {

    static convertReact(content: ContentElement, key?:string): React.ReactElement {
        let props: Record<string, any> = { };
        let el;
        if (content.Tag === 'img') 
        {
            if (key) props.key = key;

            props.src = (content.Attributes) ? content.Attributes["src"] : '';
            el = React.createElement(content.Tag, props, null );
        }
        else if (content.HasInnerHtml) {
            props.dangerouslySetInnerHTML = 
            {
                __html: content.Content,
            }
            el = React.createElement(content.Tag, props, null );

        }
        else{
            el = React.createElement(content.Tag, props, content.Content );
        }
        return el;
    }

} export default ContentConverter