# Cookie Consent JS plugin for GitBook

To use the [Cookie Consent plugin](https://silktide.com/tools/cookie-consent/) in your Gitbook project, add the plugin to the `book.json` file, along with any config parameter you'd like to use.

```javascript
{
    "plugins": ["cookie-consent"],
    "pluginsConfig": {
        "cookieConsent": {
            "message": "Your custom message"
        }
    }
}
```

Then run `gitbook install` to download and install the plugin.
