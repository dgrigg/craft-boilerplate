# Craft Project Setup

This is a basic Craft 4 with common plugins and frontend resources I use.

## Craft Plugins

- SuperTable
- Redactor
- LinkField
- SEO Matic

## Frontend

Alpine
https://alpinejs.dev/

Axios
https://github.com/axios/axios

TailwindCss
https://tailwindcss.com

### Build

ESbuild is used to compile and bundle the CSS and Js files. Reference the ./src/js/build/build.js file for the entry points and options. Two primary options are used `--minify` to output minified resources and `--watch` to watch the `./src` and `./templates` directory for changes required a rebuild. The build will output versioned js and css files that can be referenced in the build/mix-manifest.json file and is used with Mix to in the Twig layout to load.

## Project Setup
1. terminal into the docker container
2. run `composer create-project dgrigg/craft-boilerplate [project root] dev-master`
3. setup the local site domain and database (use ~www/docker/add-site.sh)
4. create security key `./craft setup/security-key`
5. install craft `./craft setup`
6. remove the config/license.key file
7. install plugins `./craft plugin/install ALL`
8. update craft and all plugins `./craft update all`
9. setup Craft https://craftcms.com/docs/4.x/installation.html
10. exit the docker container and return to the local machine
11. cd into the project root and run `npm install`

## Repo
1. Setup a new git repo for the organization
2. Add neccessary collaborators
3. Initialize git repo and make first commit

