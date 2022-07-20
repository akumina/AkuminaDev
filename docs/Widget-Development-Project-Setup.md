---
id: Widget-Development-Project-Setup
title: Setting up the Project 
---

1) Create a new Repo and Clone It In your local workstation 
2) In the terminal or command prompt navigate to that path and generate the new Site Package using the following command 

```json
yo akumina 
```

3) Enter the values In the questions; example values are below: 

```json
? Project name: SitePackage6 
? Client namespace: ak 
? Akumina version: 5.5.0.0 
? Use React?: yes 
? Widget name: helloak627 
```

4) Install and updte the dependencies, use --force to force the installation.  Refer Quickstart Akumina Developr Documentation 

```json
npm install --force 
npm uninstall webpack-cli --force 
npm install webpack-cli@3.3.12 --force 
```

5) In rare cases, you may need to manually update the SiteDeployer.exe related files to tools folder 

6) Open the folder In VS Code 