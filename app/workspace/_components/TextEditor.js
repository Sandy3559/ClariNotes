import { Placeholder } from "@tiptap/extensions";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React, { useEffect } from "react";
import EditorExtension from "./EditorExtension";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

function TextEditor({ fileId }) {
  const notes = useQuery(api.notes.GetNotes, {
    fileId: fileId,
  });

  console.log(notes);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Start taking your notes here...",
      }),
      Highlight.configure({
        multicolor: true,
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],

    editorProps: {
      attributes: {
        class: "focus:outline-none h-screen p-5",
      },
    },
    // Don't render immediately on the server to avoid SSR issues
    immediatelyRender: false,
  });

  useEffect(() => {
    editor && editor.commands.setContent(notes);
  }, [notes && editor]);

  if (!editor) return null; // or show a loading spinner

  return (
    <div className="flex flex-col h-full">
      <EditorExtension editor={editor} />
      <div className="flex-1 overflow-auto">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}

export default TextEditor;
