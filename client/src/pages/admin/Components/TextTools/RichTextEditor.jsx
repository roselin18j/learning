import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";

import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import { useEffect } from "react";

export default function RichTextEditor({
    value,
    onChange,
}) {

    const editor = useCreateBlockNote();

    useEffect(() => {

        if (value) {
            editor.replaceBlocks(
                editor.document,
                editor.tryParseHTMLToBlocks(value)
            );
        }

    }, [value]);

    return (
        <BlockNoteView
            editor={editor}
            theme="light"
            formattingToolbar
            linkToolbar
            slashMenu
            sideMenu
            onChange={async () => {

                const html =
                    await editor.blocksToHTMLLossy(
                        editor.document
                    );

                onChange(html);

            }}
        />
    );
}