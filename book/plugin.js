require([
  "gitbook"
], function(gitbook) {

  gitbook.events.bind("start", function(e, config) {
    config.cookieConsent = config.cookieConsent || {};

		window.cookieconsent_options = config.cookieConsent;
  });

});
