(function() {
  "use strict";

  var module = {
    options: [],
    header: [
      navigator.platform,
      navigator.userAgent,
      navigator.appVersion,
      navigator.vendor,
      window.opera
    ],
    dataos: [
      { name: "Windows Phone", value: "Windows Phone", version: "OS" },
      { name: "Windows", value: "Win", version: "NT" },
      { name: "iPhone", value: "iPhone", version: "OS" },
      { name: "iPad", value: "iPad", version: "OS" },
      { name: "Kindle", value: "Silk", version: "Silk" },
      { name: "Android", value: "Android", version: "Android" },
      { name: "PlayBook", value: "PlayBook", version: "OS" },
      { name: "BlackBerry", value: "BlackBerry", version: "/" },
      { name: "Macintosh", value: "Mac", version: "OS X" },
      { name: "Linux", value: "Linux", version: "rv" },
      { name: "Palm", value: "Palm", version: "PalmOS" }
    ],
    databrowser: [
      { name: "Chrome", value: "Chrome", version: "Chrome" },
      { name: "Firefox", value: "Firefox", version: "Firefox" },
      { name: "Safari", value: "Safari", version: "Version" },
      { name: "Internet Explorer", value: "MSIE", version: "MSIE" },
      { name: "Opera", value: "Opera", version: "Opera" },
      { name: "BlackBerry", value: "CLDC", version: "CLDC" },
      { name: "Mozilla", value: "Mozilla", version: "Mozilla" }
    ],
    init: function() {
      var agent = this.header.join(" "),
        os = this.matchItem(agent, this.dataos),
        browser = this.matchItem(agent, this.databrowser);

      return { os: os, browser: browser };
    },
    matchItem: function(string, data) {
      var i = 0,
        j = 0,
        html = "",
        regex,
        regexv,
        match,
        matches,
        version;

      for (i = 0; i < data.length; i += 1) {
        regex = new RegExp(data[i].value, "i");
        match = regex.test(string);
        if (match) {
          regexv = new RegExp(data[i].version + "[- /:;]([\\d._]+)", "i");
          matches = string.match(regexv);
          version = "";
          if (matches) {
            if (matches[1]) {
              matches = matches[1];
            }
          }
          if (matches) {
            matches = matches.split(/[._]+/);
            for (j = 0; j < matches.length; j += 1) {
              if (j === 0) {
                version += matches[j] + ".";
              } else {
                version += matches[j];
              }
            }
          } else {
            version = "0";
          }
          return {
            name: data[i].name,
            version: parseFloat(version)
          };
        }
      }
      return { name: "unknown", version: 0 };
    }
  };

  var e = module.init(),
    debug = "";

  debug += "os.name = " + e.os.name + "<br/>";
  debug += "os.version = " + e.os.version + "<br/>";
  debug += "browser.name = " + e.browser.name + "<br/>";
  debug += "browser.version = " + e.browser.version + "<br/>";

  debug += "<br/>";
  debug += "navigator.userAgent = " + navigator.userAgent + "<br/>";
  debug += "navigator.appVersion = " + navigator.appVersion + "<br/>";
  debug += "navigator.platform = " + navigator.platform + "<br/>";
  debug += "navigator.vendor = " + navigator.vendor + "<br/>";
  console.log(debug);
})();

window.addEventListener("DOMContentLoaded", function() {
  var offset = new Date().getTimezoneOffset();
  if (offset == "-600") {
    console.log("Welcome home, master.");
  } else {
    window.location.assign("https://kieranotsmaher.glitch.me/go-away");
    console.log("Go Away!");
  }
});

$(function() {
  $("#white").click(function() {
    $.post(
      "https://maker.ifttt.com/trigger/white/with/key/jvn2r6riuXfc2U_pwVstdQZraICxnLW511Rlm953Auh"
    );
  });
});
$(function() {
  $("#desk").click(function() {
    $.post(
      "https://maker.ifttt.com/trigger/desk/with/key/jvn2r6riuXfc2U_pwVstdQZraICxnLW511Rlm953Auh"
    );
  });
});
$(function() {
  $("#night").click(function() {
    $.post(
      "https://maker.ifttt.com/trigger/night/with/key/jvn2r6riuXfc2U_pwVstdQZraICxnLW511Rlm953Auh"
    );
  });
});
$(function() {
  $("#party").click(function() {
    $.post(
      "https://maker.ifttt.com/trigger/party/with/key/jvn2r6riuXfc2U_pwVstdQZraICxnLW511Rlm953Auh"
    );
  });
});
$(function() {
  $("#on").click(function() {
    $.post(
      "https://maker.ifttt.com/trigger/on/with/key/jvn2r6riuXfc2U_pwVstdQZraICxnLW511Rlm953Auh"
    );
  });
});
$(function() {
  $("#off").click(function() {
    $.post(
      "https://maker.ifttt.com/trigger/off/with/key/jvn2r6riuXfc2U_pwVstdQZraICxnLW511Rlm953Auh"
    );
  });
});
$(function() {
  $("#lighton").click(function() {
    $.post(
      "https://maker.ifttt.com/trigger/lighton/with/key/jvn2r6riuXfc2U_pwVstdQZraICxnLW511Rlm953Auh"
    );
  });
});
$(function() {
  $("#lightoff").click(function() {
    $.post(
      "https://maker.ifttt.com/trigger/lightoff/with/key/jvn2r6riuXfc2U_pwVstdQZraICxnLW511Rlm953Auh"
    );
  });
});
$(function() {
  $("#desklampon").click(function() {
    $.post(
      "https://maker.ifttt.com/trigger/desklampon/with/key/jvn2r6riuXfc2U_pwVstdQZraICxnLW511Rlm953Auh"
    );
  });
});
$(function() {
  $("#desklampoff").click(function() {
    $.post(
      "https://maker.ifttt.com/trigger/desklampoff/with/key/jvn2r6riuXfc2U_pwVstdQZraICxnLW511Rlm953Auh"
    );
  });
});
$(function() {
  $("#bedlampon").click(function() {
    $.post(
      "https://maker.ifttt.com/trigger/bedlampon/with/key/jvn2r6riuXfc2U_pwVstdQZraICxnLW511Rlm953Auh"
    );
  });
});
$(function() {
  $("#bedlampoff").click(function() {
    $.post(
      "https://maker.ifttt.com/trigger/bedlampoff/with/key/jvn2r6riuXfc2U_pwVstdQZraICxnLW511Rlm953Auh"
    );
  });
});

$(function() {
  $("#deskstripon").click(function() {
    $.post(
      "https://maker.ifttt.com/trigger/deskstripon/with/key/jvn2r6riuXfc2U_pwVstdQZraICxnLW511Rlm953Auh"
    );
  });
});
$(function() {
  $("#deskstripoff").click(function() {
    $.post(
      "https://maker.ifttt.com/trigger/deskstripoff/with/key/jvn2r6riuXfc2U_pwVstdQZraICxnLW511Rlm953Auh"
    );
  });
});
$(function() {
  $("#bedstripon").click(function() {
    $.post(
      "https://maker.ifttt.com/trigger/bedstripon/with/key/jvn2r6riuXfc2U_pwVstdQZraICxnLW511Rlm953Auh"
    );
  });
});
$(function() {
  $("#bedstripoff").click(function() {
    $.post(
      "https://maker.ifttt.com/trigger/bedstripoff/with/key/jvn2r6riuXfc2U_pwVstdQZraICxnLW511Rlm953Auh"
    );
  });
});
