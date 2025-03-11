# Tutorial Electron

Following official [Electron Tutorial](https://www.electronjs.org/docs/latest/tutorial/tutorial-first-app).

## Colors

Good place green: `#6db966`
Bad place red: `#CB0600`

## Preload script

[Setup here](https://www.electronjs.org/docs/latest/tutorial/tutorial-preload)

Allows code to run before the web page is loaded into the browser window. It has access to DOM APIs and Node.js environment.

## Electron Fiddle

[Guide, install and example here](https://www.electronjs.org/docs/latest/tutorial/examples)

Allows users to build mini-apps with Electron to try out features and share them with other users via Github Gist by sharing the URL.

## Packaging the Application

To be able to package and distribute the application, we need to use the dependency [Electron Forge](https://www.electronjs.org/docs/latest/tutorial/tutorial-packaging)

TODO: check the log while packaging the app: packaging for Linux by default, then need config (commented) for MacOs & Windows ?

On Linux, find the installer in project folder: `/out/make/dev/x64/tutorial-electron_1.0.0_amd64.deb`.

## Publishing and Updating

[Guide](https://www.electronjs.org/docs/latest/tutorial/tutorial-publishing-updating)

Need special configuration & setup for deployment on Windows & MacOS. For this, see automated workflow for Github Actions (auto-build & publish for all OS).

TODO:

- Check Github Apps
- Check Github actions (+ workflow)
- Setup auto-deploy
