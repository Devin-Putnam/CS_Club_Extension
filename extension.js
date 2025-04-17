const vscode = require('vscode');

function activate(context) {
    // Create a button in the status bar
    let button = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
    button.text = "Click Me";  // Text displayed on the button
    button.command = 'hello-button.sayHello';  // Command to trigger on click
    button.show();  // Show the button in the status bar

    // Register the command that will be executed when the button is clicked
    let disposable = vscode.commands.registerCommand('hello-button.sayHello', function () {
        vscode.window.showInformationMessage("Hello!");
    });

    context.subscriptions.push(button);
    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
