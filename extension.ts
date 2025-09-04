import * as vscode from 'vscode';


export function activate(context: vscode.ExtensionContext) {
 // Do the thing
	console.log('github.com/MistyPigeon/hello-world');

	// The command has been defined in the package.json so it works
	const disposable = vscode.commands.registerCommand('extension.helloWorld', () => {
		// This code will be executed every time your command is executed

		// Do the real thing
		vscode.window.showInformationMessage('Hello World!');
	});

	context.subscriptions.push(disposable);
}
