import React, {useContext, useRef} from 'react';
import EditorContext from "../../context/editorContext";
import debounce from 'lodash/debounce';
import SimpleMDEEditor from "react-simplemde-editor"; // Renamed to SimpleMDEEditor
import 'easymde/dist/easymde.min.css';

const Jodit = () => {
    const {editorContent, setEditorContent} = useContext(EditorContext)
    const editor = useRef(null);

    const handleSaveContent = debounce((newContent) => {
        setEditorContent(newContent);
    }, 700);

    return (
        <div style={{}}>
            <div>
                <h1 style={{marginBottom: "10px"}}>Редактор "Зміста"</h1>
                <SimpleMDEEditor
                    value={editorContent}
                    onChange={handleSaveContent}
                    options={{
                        autosave: {
                            enabled: true,
                            uniqueId: 'MyUniqueID',
                        },
                        toolbar: ['bold', 'italic', '|', 'heading', '|', 'quote', '|', 'unordered-list', 'ordered-list', '|', 'link', '|', 'image'],
                        spellChecker: false,
                    }}
                />
                {/*<div className={style.line} />*/}

                {/*<Result />*/}
            </div>
        </div>
    );
};

export default Jodit;