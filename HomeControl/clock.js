var time_is_widget = new time_is_widget();
function time_is_widget() {
  var ca = 0,
    tD = 0,
    tout = 0,
    updint = 1000,
    tl = "",
    U = "undefined",
    i,
    rd,
    j;
  this.init = function(P) {
    if (tout != 0) clearInterval(time_is_widget.tout);
    var a,
      q = [],
      c = {
        "12hours": "%h",
        hours: "%H",
        minutes: "%i",
        seconds: "%s",
        AMPM: "%A"
      },
      ct = "TIME",
      tF = "hours:minutes:seconds";
    for (i in P) {
      a = P[i];
      a["p"] = "";
      if (typeof a["id"] == U) a["id"] = i;
      if (typeof a["time_format"] != U) tF = a["time_format"];
      for (j in c) tF = tF.replace(j, c[j]);
      tl =
        "" +
        i.substr(0, a["id"].indexOf("AA")).replace("__", ",_");
      tF =
        "<span onclick=\"location='" +
        tl.replace("'", "\\'") +
        '\'" title="' +
        tl +
        '">' +
        tF +
        "</span>";
      if (typeof a["contents"] != U) ct = a["contents"];
      a["contents"] = ct.replace("TIME", tF);
      if (typeof a["v"] == U) q.push(a["id"]);
      P[i] = a;
    }
    this.ca = P;
    if (0 < q.length) {
      i = document.createElement("script");
      i.setAttribute(
        "src",
        "//widget.time.is/?" +
          encodeURIComponent(q.join("..")) +
          "&t=" +
          new Date().getTime()
      );
      j = document.getElementsByTagName("head").item(0);
      j.appendChild(i);
    } else this.tick();
  };
  this.cb = function(t, r, a) {
    var rpT = new Date(),
      n = 0;
    time_is_widget.tD = rpT.getTime() - t - Math.round((rpT - r) / 2);
    for (i in this.ca) {
      this.ca[i]["v"] = a[n];
      n++;
    }
    this.tick();
  };
  this.tick = function() {
    var tU = new Date(),
      t = new Date(),
      c;
    tU.setTime(tU.getTime() - this.tD);
    if (!rd && document.readyState === "complete") {
      if (document.getElementById) i = document.getElementById("time_is_link");
      else i = eval("time_is_link");
      if (null == i || i.href.indexOf("time.is/") === -1) {
        return "";
      } else {
        if (
          !i.rel ||
          i.innerHTML.length < 3 ||
          i.offsetWidth < 10 ||
          i.offsetHeight < 5
        ) {
          rd =
            "//widget.time.is/r/?" +
            i.rel +
            ".w" +
            i.offsetWidth +
            ".h" +
            i.offsetHeight +
            "." +
            encodeURIComponent(i.innerHTML);
          i = document.createElement("script");
          i.setAttribute("src", rd);
          j = document.getElementsByTagName("head").item(0);
          j.appendChild(i);
        }
      }
    }
    for (i in this.ca) {
      c = this.ca[i];
      if (typeof c["v"][0] != U) {
        if (0 < c["v"][1] && c["v"][1] < tU.getTime()) {
          c["v"][0] = c["v"][2];
          c["v"][1] = 0;
        }
        t.setTime(c["v"][0] * 60000 + tU.getTime());
        var d,
          o,
          H,
          M = "AM",
          h = t.getUTCHours();
        h = l0(h);
        H = h;
        if (11 < h) {
          M = "PM";
          h = l0(h - 12);
        }
        if (h == "00") h = 12;
        d = c["contents"]
          .replace("%h", h)
          .replace("%H", H)
          .replace("%i", l0(t.getUTCMinutes()))
          .replace("%s", l0(t.getUTCSeconds()))
          .replace("%A", M);
        if (d != c["p"]) {
          if (document.getElementById) o = document.getElementById(i);
          else o = eval();
          if (null != o) {
            o.innerHTML = d;
            c["p"] = d;
          }
        }
      }
      if (typeof c["callback"] != U)
        eval(c["callback"] + '("' + encodeURI(d) + '")');
    }
    tout = setTimeout('time_is_widget.tick("")', updint - (tU % updint));
  };
  function l0(n) {
    return n > 9 ? n : "0" + n;
  }
}
