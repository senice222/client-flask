import React, {useContext, useRef} from 'react';
import EditorContext from "../../context/editorContext";
import JoditEditor from 'jodit-react';
import debounce from 'lodash/debounce';
import EditNewsContext from "../../context/editNewsContext";

const EditorComponent = ({editorComponent}) => {
    const {editorContent, setEditorContent} = useContext(EditorContext)
    const {editNewsContent, setEditNewsContent} = useContext(EditNewsContext)

    const editor = useRef(null);

    const handleSaveContent = debounce((newContent) => {
        setEditorContent(newContent);
    }, 5000);

    const handleSaveEditorContent = debounce((newContent) => {
        setEditNewsContent(newContent);
    }, 5000);

    return (
        <div style={{}}>
            <JoditEditor
                ref={editor}
                value={editorComponent ? editNewsContent : editorContent}
                onChange={
                (newContent) => {editorComponent ? handleSaveEditorContent(newContent) : handleSaveContent(newContent)}
                }
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