import React from "react";

function PdfViewer({ fileUrl }) {
  console.log(fileUrl);
  return (
    <div className="h-full">
      <iframe
        src={fileUrl + "#toolbar=0"}
        className="w-full h-full"
        style={{ border: "none" }}
      />
    </div>
  );
}

export default PdfViewer;
