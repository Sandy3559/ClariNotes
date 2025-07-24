import { chatSession } from "@/configs/AIModel";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import { useAction, useMutation } from "convex/react";
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  CheckSquare,
  Code,
  Download,
  Heading1,
  Heading2,
  Heading3,
  Highlighter,
  Italic,
  List,
  ListOrdered,
  LucideDownload,
  Sparkles,
  Strikethrough,
  Underline,
} from "lucide-react";
import { useParams } from "next/navigation";
import React from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function EditorExtension({ editor, fileName = "MyDocument" }) {
  const { fileId } = useParams();
  const SearchAI = useAction(api.myAction.search);
  const saveNotes = useMutation(api.notes.AddNotes);
  const { user } = useUser();

  /*const handleDownloadPdf = async() => {
    if (!editor) return;

    const plainText = editor.getText(); //Use plain text instead of HTML

    //Create a styled hidden container for PDF content
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.maxWidth = '700px';
    container.style.fontFamily = 'Arial, sans-serif';
    container.style.fontSize = '14px';
    container.innerText = plainText;

    const html2pdf = (await import('html2pdf.js')).default;

    const options = {
      margin: 0.75, //Better spacing
      filename: `${fileName}.pdf`, //Dynamic file name
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };

    html2pdf().from(container).set(options).save();
  };*/

  const onAiClick = async () => {
    toast("AI is getting your answer....");
    const selectedText = editor.state.doc.textBetween(
      editor.state.selection.from,
      editor.state.selection.to,
      ""
    );
    console.log("selectedText", selectedText);

    const result = await SearchAI({
      query: selectedText,
      fileId: fileId,
    });

    const UnformattedAns = JSON.parse(result);
    let AllUnformattedAns = "";
    UnformattedAns &&
      UnformattedAns.forEach((item) => {
        AllUnformattedAns = AllUnformattedAns + item.pageContent;
      });

    const PROMPT =
      "For question :" +
      selectedText +
      " and with the given content as answer," +
      " please give appropriate answer in HTML format. The answer content is: " +
      AllUnformattedAns;

    const AiModelResult = await chatSession.sendMessage(PROMPT);
    console.log(AiModelResult.response.text());

    const FinalAns = AiModelResult.response
      .text()
      .replace("```", "")
      .replace("html", "")
      .replace("```", "");

    const AllText = editor.getHTML();
    editor.commands.setContent(
      AllText + "<p> <strong>Answer: </strong>" + FinalAns + " </p>"
    );

    saveNotes({
      notes: editor.getHTML(),
      fileId: fileId,
      createdBy: user?.primaryEmailAddress?.emailAddress,
    });
  };

  if (!editor) return null;
  return (
    editor && (
      <div className="p-5">
        <div className="control-group">
          <div className="button-group flex gap-3">
            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 1 }).run()
              }
              className={
                editor.isActive("heading", { level: 1 }) ? "text-blue-500" : ""
              }
            >
              <Heading1 />
            </button>
            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 2 }).run()
              }
              className={
                editor.isActive("heading", { level: 2 }) ? "text-blue-500" : ""
              }
            >
              <Heading2 />
            </button>
            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 3 }).run()
              }
              className={
                editor.isActive("heading", { level: 3 }) ? "text-blue-500" : ""
              }
            >
              <Heading3 />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={editor.isActive("bold") ? "text-blue-500" : ""}
            >
              <Bold />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={editor.isActive("italic") ? "text-blue-500" : ""}
            >
              <Italic />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleUnderline().run()}
              className={editor.isActive("underline") ? "text-blue-500" : ""}
            >
              <Underline />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleCodeBlock().run()}
              className={editor.isActive("codeBlock") ? "text-blue-500" : ""}
            >
              <Code />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              className={editor.isActive("bulletList") ? "text-blue-500" : ""}
            >
              <List />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
              className={editor.isActive("orderedList") ? "text-blue-500" : ""}
            >
              <ListOrdered />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleHighlight().run()}
              className={editor.isActive("highlight") ? "text-blue-500" : ""}
            >
              <span className="px-1 rounded-sm">
                <Highlighter />
              </span>
            </button>
            <button
              onClick={() => editor.chain().focus().toggleStrike().run()}
              className={editor.isActive("strike") ? "text-blue-500" : ""}
            >
              <Strikethrough />
            </button>
            <button
              onClick={() => editor.chain().focus().setTextAlign("left").run()}
            >
              <AlignLeft />
            </button>
            <button
              onClick={() =>
                editor.chain().focus().setTextAlign("center").run()
              }
            >
              <AlignCenter />
            </button>
            <button
              onClick={() => editor.chain().focus().setTextAlign("right").run()}
            >
              <AlignRight />
            </button>
            <button
              onClick={() =>
                editor.chain().focus().setTextAlign("justify").run()
              }
            >
              <AlignJustify />
            </button>
            <button
              onClick={() => onAiClick()}
              className={"hover:text-blue-500"}
            >
              <Sparkles />
            </button>

            <button
            //onClick={handleDownloadPdf}
            >
              <LucideDownload />
            </button>
          </div>
        </div>
      </div>
    )
  );
}

export default EditorExtension;
