import React, {useContext, useRef} from 'react';
import EditorContext from "../../context/editorContext";
import JoditEditor from 'jodit-react';
import EditNewsContext from "../../context/editNewsContext";
import {config} from "../../utils/config";

const EditorComponent = ({editorComponent}) => {
    const {editorContent, setEditorContent} = useContext(EditorContext)
    const {editNewsContent, setEditNewsContent} = useContext(EditNewsContext)

    const editor = useRef(null);

    const handleSaveContent = (newContent) => {
        setEditorContent(newContent);
    };

    const handleSaveEditorContent = (newContent) => {
        setEditNewsContent(newContent);
    }

    return (
        <div style={{}}>
            <JoditEditor
                ref={editor}
                value={editorComponent ? editNewsContent : editorContent}
                onChange={
                    (newContent) => {
                        editorComponent ? handleSaveEditorContent(newContent) : handleSaveContent(newContent)
                    }
                }
                tabIndex={1}
                config={config}
            />
        </div>
    );
};

export default EditorComponent;