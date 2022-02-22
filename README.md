# Craft 3 Project Setup

This is a basic Craft 3 with common plugins and frontend resources I use.

## Craft Plugins

- SuperTable
- Redactor
- LinkField
- SEO Matic
- NEO

## Frontend

Alpine
https://alpinejs.dev/

Axios
https://github.com/axios/axios

TailwindCss
https://tailwindcss.com

### Build

ESbuild is used to compile and bundle the CSS and Js files. Reference the ./src/js/build/build.js file for the entry points and options. Two primary options are used `--minify` to output minified resources and `--watch` to watch the `./src` and `./templates` directory for changes required a rebuild. The build will output versioned js and css files that can be referenced in the build/mix-manifest.json file and is used with TwigPack.

## Setup

1. run `composer create-project dgrigg/craft-3-boilerplate:v1.3.x [project root]`
2. create security key `./craft setup/security-key`
3. install craft `./craft setup`
4. install plugins `./craft plugin/install ALL`
5. setup Craft https://docs.craftcms.com/v3/installation.htm
6. cd into the project root and run `yarn install`
7. happy coding

## Useful Links

Asset Volume Setup for S3
https://nystudio107.com/blog/using-aws-s3-buckets-cloudfront-distribution-with-craft-cms
