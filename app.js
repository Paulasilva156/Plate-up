const { app, BrowserWindow, Menu} = require('electron');
const path = require('path');
const url = require('url');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,    
  });

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true,
    })
  );

  mainWindow.on('closed', function () {
    mainWindow = null;
  });

  const template = [
    {
        label: 'Edit',
        submenu: [
            {role: 'undo'},
            {role: 'redo'},
            {type: 'separator'},
            {role: 'cut'},
            {role: 'copy'},
            {role: 'paste'},
            {role: 'delete'},
            {role: 'selectall'},
        ],
    },
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);

  mainWindow.webContents.on('context-menu', (event, params)=>{
    const contextMenuTemplate = [
        {role: 'cut'},
        {role: 'copy'},
        {role: 'paste'},
    ];

    const contextMenu = Menu.buildFromTemplate(contextMenuTemplate);
    contextMenu.popup();
   });

};

  app.on('ready', createWindow);

  app.on('window-all-closed', function(){
    if(process.platform !== 'darwin'){
        app.quit();
    }});

