    "use strict";
    var e, t, i, n, s, o;
    (o = 864e5),
      (e = function (e, t) {
        return (
          "string" == typeof e &&
          "string" == typeof t &&
          e.toLowerCase() === t.toLowerCase()
        );
      }),
      (t = function (e, i, n) {
        var s = n || "0",
          o = e.toString();
        return o.length < i ? t(s + o, i) : o;
      }),
      (i = function (e) {
        var t, n;
        for (e = e || {}, t = 1; t < arguments.length; t++)
          if ((n = arguments[t]))
            for (var s in n)
              n.hasOwnProperty(s) &&
                ("object" == typeof n[s] ? i(e[s], n[s]) : (e[s] = n[s]));
        return e;
      }),
      (n = function (e, t) {
        for (var i = 0; i < t.length; i++)
          if (t[i].toLowerCase() === e.toLowerCase()) return i;
        return -1;
      }),
      (s = {
        dateSettings: {
          days: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          months: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          monthsShort: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          meridiem: ["AM", "PM"],
          ordinal: function (e) {
            var t = e % 10,
              i = { 1: "st", 2: "nd", 3: "rd" };
            return 1 !== Math.floor((e % 100) / 10) && i[t] ? i[t] : "th";
          },
        },
        separators: /[ \-+\/\.T:@]/g,
        validParts: /[dDjlNSwzWFmMntLoYyaABgGhHisueTIOPZcrU]/g,
        intParts: /[djwNzmnyYhHgGis]/g,
        tzParts:
          /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
        tzClip: /[^-+\dA-Z]/g,
      }),
      (DateFormatter = function (e) {
        var t = this,
          n = i(s, e);
        (t.dateSettings = n.dateSettings),
          (t.separators = n.separators),
          (t.validParts = n.validParts),
          (t.intParts = n.intParts),
          (t.tzParts = n.tzParts),
          (t.tzClip = n.tzClip);
      }),
      (DateFormatter.prototype = {
        constructor: DateFormatter,
        getMonth: function (e) {
          var t;
          return (
            0 === (t = n(e, this.dateSettings.monthsShort) + 1) &&
              (t = n(e, this.dateSettings.months) + 1),
            t
          );
        },
        parseDate: function (t, i) {
          var n,
            s,
            o,
            l,
            a,
            r,
            d,
            c,
            h,
            u,
            p = this,
            m = !1,
            g = !1,
            f = p.dateSettings,
            v = {
              date: null,
              year: null,
              month: null,
              day: null,
              hour: 0,
              min: 0,
              sec: 0,
            };
          if (!t) return null;
          if (t instanceof Date) return t;
          if ("U" === i) return (o = parseInt(t)) ? new Date(1e3 * o) : t;
          switch (typeof t) {
            case "number":
              return new Date(t);
            case "string":
              break;
            default:
              return null;
          }
          if (!(n = i.match(p.validParts)) || 0 === n.length)
            throw new Error("Invalid date format definition.");
          for (
            s = t.replace(p.separators, "\0").split("\0"), o = 0;
            o < s.length;
            o++
          )
            switch (((l = s[o]), (a = parseInt(l)), n[o])) {
              case "y":
              case "Y":
                if (!a) return null;
                (h = l.length),
                  (v.year = 2 === h ? parseInt((70 > a ? "20" : "19") + l) : a),
                  (m = !0);
                break;
              case "m":
              case "n":
              case "M":
              case "F":
                if (isNaN(a)) {
                  if (!((r = p.getMonth(l)) > 0)) return null;
                  v.month = r;
                } else {
                  if (!(a >= 1 && 12 >= a)) return null;
                  v.month = a;
                }
                m = !0;
                break;
              case "d":
              case "j":
                if (!(a >= 1 && 31 >= a)) return null;
                (v.day = a), (m = !0);
                break;
              case "g":
              case "h":
                if (
                  ((u =
                    s[
                      (d =
                        n.indexOf("a") > -1
                          ? n.indexOf("a")
                          : n.indexOf("A") > -1
                          ? n.indexOf("A")
                          : -1)
                    ]),
                  d > -1)
                )
                  (c = e(u, f.meridiem[0]) ? 0 : e(u, f.meridiem[1]) ? 12 : -1),
                    a >= 1 && 12 >= a && c > -1
                      ? (v.hour = a + c - 1)
                      : a >= 0 && 23 >= a && (v.hour = a);
                else {
                  if (!(a >= 0 && 23 >= a)) return null;
                  v.hour = a;
                }
                g = !0;
                break;
              case "G":
              case "H":
                if (!(a >= 0 && 23 >= a)) return null;
                (v.hour = a), (g = !0);
                break;
              case "i":
                if (!(a >= 0 && 59 >= a)) return null;
                (v.min = a), (g = !0);
                break;
              case "s":
                if (!(a >= 0 && 59 >= a)) return null;
                (v.sec = a), (g = !0);
            }
          if (!0 === m && v.year && v.month && v.day)
            v.date = new Date(
              v.year,
              v.month - 1,
              v.day,
              v.hour,
              v.min,
              v.sec,
              0
            );
          else {
            if (!0 !== g) return null;
            v.date = new Date(0, 0, 0, v.hour, v.min, v.sec, 0);
          }
          return v.date;
        },
        guessDate: function (e, t) {
          if ("string" != typeof e) return e;
          var i,
            n,
            s,
            o,
            l,
            a,
            r = e.replace(this.separators, "\0").split("\0"),
            d = t.match(this.validParts),
            c = new Date(),
            h = 0;
          if (!/^[djmn]/g.test(d[0])) return e;
          for (s = 0; s < r.length; s++) {
            if (((h = 2), (l = r[s]), (a = parseInt(l.substr(0, 2))), isNaN(a)))
              return null;
            switch (s) {
              case 0:
                "m" === d[0] || "n" === d[0] ? c.setMonth(a - 1) : c.setDate(a);
                break;
              case 1:
                "m" === d[0] || "n" === d[0] ? c.setDate(a) : c.setMonth(a - 1);
                break;
              case 2:
                if (
                  ((n = c.getFullYear()),
                  (h = 4 > (i = l.length) ? i : 4),
                  !(n = parseInt(
                    4 > i ? n.toString().substr(0, 4 - i) + l : l.substr(0, 4)
                  )))
                )
                  return null;
                c.setFullYear(n);
                break;
              case 3:
                c.setHours(a);
                break;
              case 4:
                c.setMinutes(a);
                break;
              case 5:
                c.setSeconds(a);
            }
            (o = l.substr(h)).length > 0 && r.splice(s + 1, 0, o);
          }
          return c;
        },
        parseFormat: function (e, i) {
          var n,
            s = this,
            l = s.dateSettings,
            a = /\\?(.?)/gi,
            r = function (e, t) {
              return n[e] ? n[e]() : t;
            };
          return (
            (n = {
              d: function () {
                return t(n.j(), 2);
              },
              D: function () {
                return l.daysShort[n.w()];
              },
              j: function () {
                return i.getDate();
              },
              l: function () {
                return l.days[n.w()];
              },
              N: function () {
                return n.w() || 7;
              },
              w: function () {
                return i.getDay();
              },
              z: function () {
                var e = new Date(n.Y(), n.n() - 1, n.j()),
                  t = new Date(n.Y(), 0, 1);
                return Math.round((e - t) / o);
              },
              W: function () {
                var e = new Date(n.Y(), n.n() - 1, n.j() - n.N() + 3),
                  i = new Date(e.getFullYear(), 0, 4);
                return t(1 + Math.round((e - i) / o / 7), 2);
              },
              F: function () {
                return l.months[i.getMonth()];
              },
              m: function () {
                return t(n.n(), 2);
              },
              M: function () {
                return l.monthsShort[i.getMonth()];
              },
              n: function () {
                return i.getMonth() + 1;
              },
              t: function () {
                return new Date(n.Y(), n.n(), 0).getDate();
              },
              L: function () {
                var e = n.Y();
                return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0 ? 1 : 0;
              },
              o: function () {
                var e = n.n(),
                  t = n.W();
                return (
                  n.Y() + (12 === e && 9 > t ? 1 : 1 === e && t > 9 ? -1 : 0)
                );
              },
              Y: function () {
                return i.getFullYear();
              },
              y: function () {
                return n.Y().toString().slice(-2);
              },
              a: function () {
                return n.A().toLowerCase();
              },
              A: function () {
                var e = n.G() < 12 ? 0 : 1;
                return l.meridiem[e];
              },
              B: function () {
                var e = 3600 * i.getUTCHours(),
                  n = 60 * i.getUTCMinutes(),
                  s = i.getUTCSeconds();
                return t(Math.floor((e + n + s + 3600) / 86.4) % 1e3, 3);
              },
              g: function () {
                return n.G() % 12 || 12;
              },
              G: function () {
                return i.getHours();
              },
              h: function () {
                return t(n.g(), 2);
              },
              H: function () {
                return t(n.G(), 2);
              },
              i: function () {
                return t(i.getMinutes(), 2);
              },
              s: function () {
                return t(i.getSeconds(), 2);
              },
              u: function () {
                return t(1e3 * i.getMilliseconds(), 6);
              },
              e: function () {
                return (
                  /\((.*)\)/.exec(String(i))[1] || "Coordinated Universal Time"
                );
              },
              I: function () {
                return new Date(n.Y(), 0) - Date.UTC(n.Y(), 0) !=
                  new Date(n.Y(), 6) - Date.UTC(n.Y(), 6)
                  ? 1
                  : 0;
              },
              O: function () {
                var e = i.getTimezoneOffset(),
                  n = Math.abs(e);
                return (
                  (e > 0 ? "-" : "+") +
                  t(100 * Math.floor(n / 60) + (n % 60), 4)
                );
              },
              P: function () {
                var e = n.O();
                return e.substr(0, 3) + ":" + e.substr(3, 2);
              },
              T: function () {
                return (
                  (String(i).match(s.tzParts) || [""])
                    .pop()
                    .replace(s.tzClip, "") || "UTC"
                );
              },
              Z: function () {
                return 60 * -i.getTimezoneOffset();
              },
              c: function () {
                return "Y-m-d\\TH:i:sP".replace(a, r);
              },
              r: function () {
                return "D, d M Y H:i:s O".replace(a, r);
              },
              U: function () {
                return i.getTime() / 1e3 || 0;
              },
            }),
            r(e, e)
          );
        },
        formatDate: function (e, t) {
          var i,
            n,
            s,
            o,
            l,
            a = this,
            r = "";
          if ("string" == typeof e && !(e = a.parseDate(e, t))) return null;
          if (e instanceof Date) {
            for (s = t.length, i = 0; s > i; i++)
              "S" !== (l = t.charAt(i)) &&
                "\\" !== l &&
                (i > 0 && "\\" === t.charAt(i - 1)
                  ? (r += l)
                  : ((o = a.parseFormat(l, e)),
                    i !== s - 1 &&
                      a.intParts.test(l) &&
                      "S" === t.charAt(i + 1) &&
                      ((n = parseInt(o) || 0),
                      (o += a.dateSettings.ordinal(n))),
                    (r += o)));
            return r;
          }
          return "";
        },
      });
  })();
/**
