# Craft 3 Project Setup

This is a basic Craft 3 with common plugins and frontend resources I use.

## Craft Plugins

- SuperTable
- Redactor
- LinkField
- SEO Matic
- NEO
- Migration Manager

## Frontend

Jquery (slim version)
https://github.com/jquery/jquery

Axios
https://github.com/axios/axios

TailwindCss
https://tailwindcss.com

## Setup

1. run `composer create-project dgrigg/craft-3-boilerplate [project root] --prefer-source`
2. create security key `./craft setup/security-key
3. install plugins `./craft plugin/install ALL`
4. setup Craft https://docs.craftcms.com/v3/installation.htm
5. cd into the project root and run `yarn install`
6. happy coding

