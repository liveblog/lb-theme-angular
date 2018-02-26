#  Angular Based Theme repo is **DEPRECATED**

We integrated a monorepo aproach and the source code is now kept in the liveblog repo
in the `server/liveblog/themes/themes_assets/angular`
Link to the `master branch` to the following [path](https://github.com/liveblog/liveblog/tree/master/server/liveblog/themes/themes_assets/angular)

A tipical workflow for a `theme` only collaborator will change from the current steps

```
git clone https://github.com/liveblog/lb-theme-angular
cd lb-theme-angular
npm install
gulp build
```

to the next steps

```
git clone https://github.com/liveblog/liveblog
cd liveblog/server/liveblog/themes/themes_assets/angular
npm install
gulp build
```