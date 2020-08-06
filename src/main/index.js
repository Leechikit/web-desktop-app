/*
 * @Description: 
 * @Autor: Lizijie
 * @Date: 2019-06-18 11:15:27
 * @LastEditors: Lizijie
 * @LastEditTime: 2020-08-06 16:14:26
 */
import { app, BrowserWindow, BrowserView, screen } from 'electron'
import path from 'path'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    width,
    height,
    show: false,
    icon: path.join(__static, 'icons/yunflow.ico'),
    // useContentSize: true,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // mainWindow.loadURL(winURL)
  mainWindow.loadURL('http://116.31.109.188:8000/')
  // mainWindow.webContents.openDevTools()
  mainWindow.on('closed', () => {
    mainWindow = null
  })
  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })

  // let view = new BrowserView()
  // mainWindow.setBrowserView(view)
  // view.setBounds({ x: 0, y: 50, width, height: height - 50 })
  // view.webContents.loadURL('http://116.31.109.188:8000', {
  //   userAgent: mainWindow.webContents.getUserAgent() + ' cloud'
  // })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
