[Quokka.js plugin](https://quokkajs.com/) to enable environment variables to be loaded from a `.env` file.

## Install

```
npm install dotenv-quokka-plugin
```

Note that you may install the plugin to the [Quokka config folder](https://quokkajs.com/docs/configuration.html#global-config-file) instead of installing it to your local project.

## Configuration

Specify the plugin in Quokka [configuration settings](https://quokkajs.com/docs/configuration.html):

```
{
    "plugins": ["dotenv-quokka-plugin"]
}
```

By default, the plugin will load the `.env` in your project directory.

If you need to, you may change the `.env` file to load:

```
{
    "plugins": ["dotenv-quokka-plugin"],
    "dotenv": {
        "path": ".env.test"
    }
}
```

Note: if the `dotenv.path` is a relative path, it will be located relative to your project directory.