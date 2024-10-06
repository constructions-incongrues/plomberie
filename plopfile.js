export default function (plop) {
  plop.setGenerator("Empty HTML file", {
    description: "Generates an empty HTML file",
    prompts: [
      {
        type: "input",
        name: "destinationpath",
        message: "Template destination path",
      },
      {
        type: "input",
        name: "title",
        message: "Document title",
      },
      {
        type: "input",
        name: "fileName",
        message: "Name of the file (without the extension)",
        default: "document.html",
      },
    ],
    actions: [
      {
        type: "add",
        path: "{{destinationpath}}/{{fileName}}.html",
        templateFile: "plop-templates/EmptyHtmlDocument.html.hbs",
      },
    ],
  });
}
