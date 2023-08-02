# eokic.com

TODO: Public intro & licence


## Technical requirements

1. [nvm](https://github.com/nvm-sh/nvm)
1. [Bun](https://bun.sh/) or an equivalent like `yarn`
1. [Strapi](https://strapi.io/) API (sorry, this part is closed-source because reasons)


## Setup

1. create and configure the `.env` based on `.env.example`
1. symlink Strapi's uploads `ln -s STRAPI_UPLOAD_FOLDER public/uploads`


## Development

⚠️ Note: a configured, up & running Strapi instance is a prerequisite.

1. `nvm i`
1. `bun install`
1. `bun run dev`
