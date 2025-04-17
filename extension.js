const vscode = require('vscode');
const path = require('path');

function activate(context) {
    let disposable = vscode.commands.registerCommand('html-button.showHtmlButton', function () {
        const panel = vscode.window.createWebviewPanel(
            'htmlButton', // Identifies the type of the webview
            'HTML Button', // Title of the webview panel
            vscode.ViewColumn.One, // Editor column to show the webview
            {
                enableScripts: true, // Allows JavaScript in the webview
            }
        );

        // Get the path to the HTML file
        const htmlFilePath = path.join(context.extensionPath, 'media', 'index.html');

        // Read the HTML content
        const htmlContent = vscode.Uri.file(htmlFilePath).with({ scheme: 'vscode-resource' });

        // Set the webview's HTML content
        panel.webview.html = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Hello Webview</title>
        </head>
        <body>
            <iframe src="${htmlContent}" width="100%" height="100%"></iframe>
        </body>
        </html>`;
    });

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
