export default function (plop) {
  plop.setGenerator("Empty HTML file", {
    description: "Generates an empty HTML file",
    prompts: [
      {
        type: "input",
        name: "destinationpath",
        message: "Template destination path",
        default: ".",
      },
      {
        type: "input",
        name: "fileName",
        message: "Name of the file (without the extension)",
        default: "document",
      },
      {
        type: "input",
        name: "title",
        message: "Document title",
        default: "New Document",
      },
    ],
    actions: [
      {
        type: "add",
        path: "{{destinationpath}}/{{fileName}}.html",
        templateFile: ".plop/templates/EmptyHtmlDocument.html.hbs",
      },
    ],
  });
}
