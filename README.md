# Angular Based Theme repo is **DEPRECATED**

Last update to this repository has been done with Liveblog v3.4.0 release.
As of now, any new changes will be only available under our monorepo approach.

We integrated a monorepo approach and the source code is now kept in the liveblog repo
in the `server/liveblog/themes/themes_assets/angular`
Link to the `master branch` to the following [path](https://github.com/liveblog/liveblog/tree/master/server/liveblog/themes/themes_assets/angular)


<table><tr><td>Extends</td><td>nothing</td></tr></table>

| Options | Key | Type | Default value
|---------|-----|------|--------------
| Number of posts per page | postsPerPage | `number` | 20
| Permalink delimiter | permalinkDelimiter | `string` | ?

This theme provide an angular library to connect to the Liveblog API.  
This is an abstract theme to be extended, and we strongly recommend to use it if you want to create a new theme.
