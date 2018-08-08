"use strict";

!function() {
  var t = window.driftt = window.drift = window.driftt || [];
  if (!t.init) {
    if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
    t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ],
    t.factory = function(e) {
      return function() {
        var n = Array.prototype.slice.call(arguments);
        return n.unshift(e), t.push(n), t;
      };
    }, t.methods.forEach(function(e) {
      t[e] = t.factory(e);
    }), t.load = function(t) {
      var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
      o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
      var i = document.getElementsByTagName("script")[0];
      i.parentNode.insertBefore(o, i);
    };
  }
}();
// set language config, from browser
// https://help.drift.com/article/aExfLYkk82-can-i-translate-drift-to-a-different-language/
// https://help.drift.com/article/custom-language/
drift.config({
  locale: (window.navigator.language || 'en'),
  //welcomeMessageDelay: 3000,
})
// https://drift.helpjuice.com/developer-docs/widget-api
drift.on('ready',function(api, payload) {
  var messages = {
    'en': "How can we help? We're here for you!",
    'en-': "How can we help? We're here for you!",
    'fr': "Comment pouvons nous aider ? Nous sommes là pour vous !"
  }
  var locale = window.navigator.language || 'en'
  var message = ''
  switch (locale) {
    case 'en':
    case 'en-GB':
    case 'en-US':
      message = messages['en'];
      break;
    case 'fr':
    case 'fr-FR':
    case 'fr-BE':
      message = messages['fr'];
      break;
    default:
      message = messages['en'];
  }
  api.showWelcomeMessage({
   message: message
   //avatarUrl:undefined // a url. replaces the default avatar with a custom one.
 })
})
drift.SNIPPET_VERSION = '0.3.1';
drift.load('8f4fxgbwy77n');
