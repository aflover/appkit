const electron = require('electron');
const {app, BrowserWindow, Menu } = electron;

app.commandLine.appendSwitch('disable-web-security'); // try add this line

var mainWindow = null;

app.on('window-all-closed', function() {
	if (process.platform != 'darwin') {
		app.quit();
	}
});

app.on('ready', function() {
	mainWindow = new BrowserWindow({
        width: 1200, 
        height: 800,
        "node-integration": "iframe", // and this line
        "web-preferences": {
            "web-security": false
        },
        "webPreferences": {
            "webSecurity": false
        },
    });
    let devtoolsDir = require.resolve('vue-devtools');
    devtoolsDir = require('path').dirname(devtoolsDir);
    console.log(devtoolsDir);

    BrowserWindow.addDevToolsExtension(devtoolsDir);
	mainWindow.webContents.toggleDevTools();
	const staticUrl = process.env.APP_STATIC_URL;
	if (staticUrl) {
		console.log(staticUrl);
		mainWindow.loadURL(staticUrl+'/index.html');
	}
	else {
		mainWindow.loadURL('file://' + __dirname + '/index.html');
	}

	mainWindow.on('closed', function() {
		mainWindow = null;
	});

	mainWindow.setMenu(null);
});