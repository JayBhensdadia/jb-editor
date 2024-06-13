import { EditorProvider, FloatingMenu, BubbleMenu, useCurrentEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

// define your extension array
const extensions = [
    StarterKit,
];

const content = '<p>Hello World!</p>';

export const Tiptap = ({ className }: { className: string; }) => {

    const { editor } = useCurrentEditor();
    return (
        <div className={className}>
            <EditorProvider
                extensions={extensions}
                content={content}

                editorProps={{
                    attributes: {
                        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none',
                    }
                }}

            >
                <FloatingMenu editor={editor}>
                    <div>hi there</div>
                </FloatingMenu>

                <BubbleMenu editor={editor}>
                    <button onClick={() => alert(editor?.getHTML().toString())}>
                        get data
                    </button>
                </BubbleMenu>
            </EditorProvider>
        </div>
    );
};

