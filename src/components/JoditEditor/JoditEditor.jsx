import React, {useContext, useRef} from 'react';
import EditorContext from "../../context/editorContext";
import JoditEditor from 'jodit-react';
import debounce from 'lodash/debounce';

const Jodit = () => {
    const {editorContent, setEditorContent} = useContext(EditorContext)
    const editor = useRef(null);

    const handleSaveContent = debounce((newContent) => {
        setEditorContent(newContent);
    }, 700);

    return (
        <div style={{}}>
            <JoditEditor
                ref={editor}
                value={editorContent}
                onChange={(newContent) => handleSaveContent(newContent)}
                tabIndex={1}
                config={{
                    removeButtons: [
                        'table',
                        'source'
                    ],
                    buttons: [
                        'bold',
                        'strikethrough',
                        'underline',
                        'italic', '|',
                        'ul',
                        'ol', '|',
                        'font',
                        'fontsize',
                        'brush',
                        'paragraph', '|',
                        'image',
                        'video',
                        'link',
                        'align',
                        'hr',
                    ],
                }}
            />
        </div>
    );
};

export default Jodit;
