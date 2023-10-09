import React, {useContext, useRef} from 'react';
import EditorContext from "../../context/editorContext";
import JoditEditor from 'jodit-react';
import debounce from 'lodash/debounce';

const EditorComponent = () => {
    const {editorContent, setEditorContent} = useContext(EditorContext)
    const editor = useRef(null);

    const handleSaveContent = debounce((newContent) => {
        setEditorContent(newContent);
    }, 5000);

    return (
        <div style={{}}>
            <JoditEditor
                ref={editor}
                value={editorContent}
                onChange={(newContent) => handleSaveContent(newContent)}
                tabIndex={1}
                config={{
                    minHeight: "400px",
                    removeButtons: [
                        'table',
                        'source',
                        'undo',
                        'redo',
                        'format',
                        'underline',
                        'strikethrough',
                        'format',
                        'copyformat'
                    ],
                    buttons: [
                        'bold',
                        'italic', '|',
                        'ul',
                        'ol',
                        'font',
                        'fontsize',
                        'brush',
                        'paragraph',
                        'image',
                        'link',
                        'align',
                        'hr',
                    ],
                }}
            />
        </div>
    );
};

export default EditorComponent;