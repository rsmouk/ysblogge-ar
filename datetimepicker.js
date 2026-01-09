 * @preserve jQuery DateTimePicker
 * @homepage http://xdsoft.net/jqplugins/datetimepicker/
 * @author Chupurnov Valeriy (<chupurnov@gmail.com>)
 */
var datetimepickerFactory = function (e) {
  "use strict";
  var t = {
      i18n: {
        ar: {
          months: [
            "ÙŠÙ†Ø§ÙŠØ±",
            "ÙØ¨Ø±Ø§ÙŠØ±",
            "Ù…Ø§Ø±Ø³",
            "Ø§Ø¨Ø±ÙŠÙ„",
            "Ù…Ø§ÙŠÙˆ",
            "ÙŠÙˆÙ†ÙŠÙˆ",
            "ÙŠÙˆÙ„ÙŠÙˆ",
            "Ø§ØºØ³Ø·Ø³",
            "Ø³Ø¨ØªÙ…Ø¨Ø±",
            "Ø§ÙƒØªÙˆØ¨Ø±",
            "Ù†ÙˆÙÙ…Ø¨Ø±",
            "Ø¯ÙŠØ³Ù…Ø¨Ø±",
          ],
          dayOfWeekShort: [
            "Ø£Ø­Ø¯",
            "Ø¥Ø«Ù†ÙŠÙ†",
            "Ø«Ù„Ø§Ø«Ø§Ø¡",
            "Ø£Ø±Ø¨Ø¹Ø§Ø¡",
            "Ø®Ù…ÙŠØ³",
            "Ø¬Ù…Ø¹Ø©",
            "Ø³Ø¨Øª",
          ],
          dayOfWeek: [
            "Ø£Ø­Ø¯",
            "Ø¥Ø«Ù†ÙŠÙ†",
            "Ø«Ù„Ø§Ø«Ø§Ø¡",
            "Ø£Ø±Ø¨Ø¹Ø§Ø¡",
            "Ø®Ù…ÙŠØ³",
            "Ø¬Ù…Ø¹Ø©",
            "Ø³Ø¨Øª",
          ],
        },
        ro: {
          months: [
            "Ianuarie",
            "Februarie",
            "Martie",
            "Aprilie",
            "Mai",
            "Iunie",
            "Iulie",
            "August",
            "Septembrie",
            "Octombrie",
            "Noiembrie",
            "Decembrie",
          ],
          dayOfWeekShort: ["Du", "Lu", "Ma", "Mi", "Jo", "Vi", "SÃ¢"],
          dayOfWeek: [
            "DuminicÄƒ",
            "Luni",
            "MarÅ£i",
            "Miercuri",
            "Joi",
            "Vineri",
            "SÃ¢mbÄƒtÄƒ",
          ],
        },
        id: {
          months: [
            "Januari",
            "Februari",
            "Maret",
            "April",
            "Mei",
            "Juni",
            "Juli",
            "Agustus",
            "September",
            "Oktober",
            "November",
            "Desember",
          ],
          dayOfWeekShort: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
          dayOfWeek: [
            "Minggu",
            "Senin",
            "Selasa",
            "Rabu",
            "Kamis",
            "Jumat",
            "Sabtu",
          ],
        },
        is: {
          months: [
            "JanÃºar",
            "FebrÃºar",
            "Mars",
            "AprÃ­l",
            "MaÃ­",
            "JÃºnÃ­",
            "JÃºlÃ­",
            "ÃgÃºst",
            "September",
            "OktÃ³ber",
            "NÃ³vember",
            "Desember",
          ],
          dayOfWeekShort: ["Sun", "MÃ¡n", "ÃžriÃ°", "MiÃ°", "Fim", "FÃ¶s", "Lau"],
          dayOfWeek: [
            "Sunnudagur",
            "MÃ¡nudagur",
            "ÃžriÃ°judagur",
            "MiÃ°vikudagur",
            "Fimmtudagur",
            "FÃ¶studagur",
            "Laugardagur",
          ],
        },
        bg: {
          months: [
            "Ð¯Ð½ÑƒÐ°Ñ€Ð¸",
            "Ð¤ÐµÐ²Ñ€ÑƒÐ°Ñ€Ð¸",
            "ÐœÐ°Ñ€Ñ‚",
            "ÐÐ¿Ñ€Ð¸Ð»",
            "ÐœÐ°Ð¹",
            "Ð®Ð½Ð¸",
            "Ð®Ð»Ð¸",
            "ÐÐ²Ð³ÑƒÑÑ‚",
            "Ð¡ÐµÐ¿Ñ‚ÐµÐ¼Ð²Ñ€Ð¸",
            "ÐžÐºÑ‚Ð¾Ð¼Ð²Ñ€Ð¸",
            "ÐÐ¾ÐµÐ¼Ð²Ñ€Ð¸",
            "Ð”ÐµÐºÐµÐ¼Ð²Ñ€Ð¸",
          ],
          dayOfWeekShort: ["ÐÐ´", "ÐŸÐ½", "Ð’Ñ‚", "Ð¡Ñ€", "Ð§Ñ‚", "ÐŸÑ‚", "Ð¡Ð±"],
          dayOfWeek: [
            "ÐÐµÐ´ÐµÐ»Ñ",
            "ÐŸÐ¾Ð½ÐµÐ´ÐµÐ»Ð½Ð¸Ðº",
            "Ð’Ñ‚Ð¾Ñ€Ð½Ð¸Ðº",
            "Ð¡Ñ€ÑÐ´Ð°",
            "Ð§ÐµÑ‚Ð²ÑŠÑ€Ñ‚ÑŠÐº",
            "ÐŸÐµÑ‚ÑŠÐº",
            "Ð¡ÑŠÐ±Ð¾Ñ‚Ð°",
          ],
        },
        fa: {
          months: [
            "ÙØ±ÙˆØ±Ø¯ÛŒÙ†",
            "Ø§Ø±Ø¯ÛŒØ¨Ù‡Ø´Øª",
            "Ø®Ø±Ø¯Ø§Ø¯",
            "ØªÛŒØ±",
            "Ù…Ø±Ø¯Ø§Ø¯",
            "Ø´Ù‡Ø±ÛŒÙˆØ±",
            "Ù…Ù‡Ø±",
            "Ø¢Ø¨Ø§Ù†",
            "Ø¢Ø°Ø±",
            "Ø¯ÛŒ",
            "Ø¨Ù‡Ù…Ù†",
            "Ø§Ø³ÙÙ†Ø¯",
          ],
          dayOfWeekShort: [
            "ÛŒÚ©Ø´Ù†Ø¨Ù‡",
            "Ø¯ÙˆØ´Ù†Ø¨Ù‡",
            "Ø³Ù‡ Ø´Ù†Ø¨Ù‡",
            "Ú†Ù‡Ø§Ø±Ø´Ù†Ø¨Ù‡",
            "Ù¾Ù†Ø¬Ø´Ù†Ø¨Ù‡",
            "Ø¬Ù…Ø¹Ù‡",
            "Ø´Ù†Ø¨Ù‡",
          ],
          dayOfWeek: [
            "ÛŒÚ©â€ŒØ´Ù†Ø¨Ù‡",
            "Ø¯ÙˆØ´Ù†Ø¨Ù‡",
            "Ø³Ù‡â€ŒØ´Ù†Ø¨Ù‡",
            "Ú†Ù‡Ø§Ø±Ø´Ù†Ø¨Ù‡",
            "Ù¾Ù†Ø¬â€ŒØ´Ù†Ø¨Ù‡",
            "Ø¬Ù…Ø¹Ù‡",
            "Ø´Ù†Ø¨Ù‡",
            "ÛŒÚ©â€ŒØ´Ù†Ø¨Ù‡",
          ],
        },
        ru: {
          months: [
            "Ð¯Ð½Ð²Ð°Ñ€ÑŒ",
            "Ð¤ÐµÐ²Ñ€Ð°Ð»ÑŒ",
            "ÐœÐ°Ñ€Ñ‚",
            "ÐÐ¿Ñ€ÐµÐ»ÑŒ",
            "ÐœÐ°Ð¹",
            "Ð˜ÑŽÐ½ÑŒ",
            "Ð˜ÑŽÐ»ÑŒ",
            "ÐÐ²Ð³ÑƒÑÑ‚",
            "Ð¡ÐµÐ½Ñ‚ÑÐ±Ñ€ÑŒ",
            "ÐžÐºÑ‚ÑÐ±Ñ€ÑŒ",
            "ÐÐ¾ÑÐ±Ñ€ÑŒ",
            "Ð”ÐµÐºÐ°Ð±Ñ€ÑŒ",
          ],
          dayOfWeekShort: ["Ð’Ñ", "ÐŸÐ½", "Ð’Ñ‚", "Ð¡Ñ€", "Ð§Ñ‚", "ÐŸÑ‚", "Ð¡Ð±"],
          dayOfWeek: [
            "Ð’Ð¾ÑÐºÑ€ÐµÑÐµÐ½ÑŒÐµ",
            "ÐŸÐ¾Ð½ÐµÐ´ÐµÐ»ÑŒÐ½Ð¸Ðº",
            "Ð’Ñ‚Ð¾Ñ€Ð½Ð¸Ðº",
            "Ð¡Ñ€ÐµÐ´Ð°",
            "Ð§ÐµÑ‚Ð²ÐµÑ€Ð³",
            "ÐŸÑÑ‚Ð½Ð¸Ñ†Ð°",
            "Ð¡ÑƒÐ±Ð±Ð¾Ñ‚Ð°",
          ],
        },
        uk: {
          months: [
            "Ð¡Ñ–Ñ‡ÐµÐ½ÑŒ",
            "Ð›ÑŽÑ‚Ð¸Ð¹",
            "Ð‘ÐµÑ€ÐµÐ·ÐµÐ½ÑŒ",
            "ÐšÐ²Ñ–Ñ‚ÐµÐ½ÑŒ",
            "Ð¢Ñ€Ð°Ð²ÐµÐ½ÑŒ",
            "Ð§ÐµÑ€Ð²ÐµÐ½ÑŒ",
            "Ð›Ð¸Ð¿ÐµÐ½ÑŒ",
            "Ð¡ÐµÑ€Ð¿ÐµÐ½ÑŒ",
            "Ð’ÐµÑ€ÐµÑÐµÐ½ÑŒ",
            "Ð–Ð¾Ð²Ñ‚ÐµÐ½ÑŒ",
            "Ð›Ð¸ÑÑ‚Ð¾Ð¿Ð°Ð´",
            "Ð“Ñ€ÑƒÐ´ÐµÐ½ÑŒ",
          ],
          dayOfWeekShort: ["ÐÐ´Ð»", "ÐŸÐ½Ð´", "Ð’Ñ‚Ñ€", "Ð¡Ñ€Ð´", "Ð§Ñ‚Ð²", "ÐŸÑ‚Ð½", "Ð¡Ð±Ñ‚"],
          dayOfWeek: [
            "ÐÐµÐ´Ñ–Ð»Ñ",
            "ÐŸÐ¾Ð½ÐµÐ´Ñ–Ð»Ð¾Ðº",
            "Ð’Ñ–Ð²Ñ‚Ð¾Ñ€Ð¾Ðº",
            "Ð¡ÐµÑ€ÐµÐ´Ð°",
            "Ð§ÐµÑ‚Ð²ÐµÑ€",
            "ÐŸ'ÑÑ‚Ð½Ð¸Ñ†Ñ",
            "Ð¡ÑƒÐ±Ð¾Ñ‚Ð°",
          ],
        },
        en: {
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
          dayOfWeekShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          dayOfWeek: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
        },
        el: {
          months: [
            "Î™Î±Î½Î¿Ï…Î¬ÏÎ¹Î¿Ï‚",
            "Î¦ÎµÎ²ÏÎ¿Ï…Î¬ÏÎ¹Î¿Ï‚",
            "ÎœÎ¬ÏÏ„Î¹Î¿Ï‚",
            "Î‘Ï€ÏÎ¯Î»Î¹Î¿Ï‚",
            "ÎœÎ¬Î¹Î¿Ï‚",
            "Î™Î¿ÏÎ½Î¹Î¿Ï‚",
            "Î™Î¿ÏÎ»Î¹Î¿Ï‚",
            "Î‘ÏÎ³Î¿Ï…ÏƒÏ„Î¿Ï‚",
            "Î£ÎµÏ€Ï„Î­Î¼Î²ÏÎ¹Î¿Ï‚",
            "ÎŸÎºÏ„ÏŽÎ²ÏÎ¹Î¿Ï‚",
            "ÎÎ¿Î­Î¼Î²ÏÎ¹Î¿Ï‚",
            "Î”ÎµÎºÎ­Î¼Î²ÏÎ¹Î¿Ï‚",
          ],
          dayOfWeekShort: ["ÎšÏ…Ï", "Î”ÎµÏ…", "Î¤ÏÎ¹", "Î¤ÎµÏ„", "Î ÎµÎ¼", "Î Î±Ï", "Î£Î±Î²"],
          dayOfWeek: [
            "ÎšÏ…ÏÎ¹Î±ÎºÎ®",
            "Î”ÎµÏ…Ï„Î­ÏÎ±",
            "Î¤ÏÎ¯Ï„Î·",
            "Î¤ÎµÏ„Î¬ÏÏ„Î·",
            "Î Î­Î¼Ï€Ï„Î·",
            "Î Î±ÏÎ±ÏƒÎºÎµÏ…Î®",
            "Î£Î¬Î²Î²Î±Ï„Î¿",
          ],
        },
        de: {
          months: [
            "Januar",
            "Februar",
            "MÃ¤rz",
            "April",
            "Mai",
            "Juni",
            "Juli",
            "August",
            "September",
            "Oktober",
            "November",
            "Dezember",
          ],
          dayOfWeekShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
          dayOfWeek: [
            "Sonntag",
            "Montag",
            "Dienstag",
            "Mittwoch",
            "Donnerstag",
            "Freitag",
            "Samstag",
          ],
        },
        nl: {
          months: [
            "januari",
            "februari",
            "maart",
            "april",
            "mei",
            "juni",
            "juli",
            "augustus",
            "september",
            "oktober",
            "november",
            "december",
          ],
          dayOfWeekShort: ["zo", "ma", "di", "wo", "do", "vr", "za"],
          dayOfWeek: [
            "zondag",
            "maandag",
            "dinsdag",
            "woensdag",
            "donderdag",
            "vrijdag",
            "zaterdag",
          ],
        },
        tr: {
          months: [
            "Ocak",
            "Åžubat",
            "Mart",
            "Nisan",
            "MayÄ±s",
            "Haziran",
            "Temmuz",
            "AÄŸustos",
            "EylÃ¼l",
            "Ekim",
            "KasÄ±m",
            "AralÄ±k",
          ],
          dayOfWeekShort: ["Paz", "Pts", "Sal", "Ã‡ar", "Per", "Cum", "Cts"],
          dayOfWeek: [
            "Pazar",
            "Pazartesi",
            "SalÄ±",
            "Ã‡arÅŸamba",
            "PerÅŸembe",
            "Cuma",
            "Cumartesi",
          ],
        },
        fr: {
          months: [
            "Janvier",
            "FÃ©vrier",
            "Mars",
            "Avril",
            "Mai",
            "Juin",
            "Juillet",
            "AoÃ»t",
            "Septembre",
            "Octobre",
            "Novembre",
            "DÃ©cembre",
          ],
          dayOfWeekShort: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
          dayOfWeek: [
            "dimanche",
            "lundi",
            "mardi",
            "mercredi",
            "jeudi",
            "vendredi",
            "samedi",
          ],
        },
        es: {
          months: [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre",
          ],
          dayOfWeekShort: ["Dom", "Lun", "Mar", "MiÃ©", "Jue", "Vie", "SÃ¡b"],
          dayOfWeek: [
            "Domingo",
            "Lunes",
            "Martes",
            "MiÃ©rcoles",
            "Jueves",
            "Viernes",
            "SÃ¡bado",
          ],
        },
        th: {
          months: [
            "à¸¡à¸à¸£à¸²à¸„à¸¡",
            "à¸à¸¸à¸¡à¸ à¸²à¸žà¸±à¸™à¸˜à¹Œ",
            "à¸¡à¸µà¸™à¸²à¸„à¸¡",
            "à¹€à¸¡à¸©à¸²à¸¢à¸™",
            "à¸žà¸¤à¸©à¸ à¸²à¸„à¸¡",
            "à¸¡à¸´à¸–à¸¸à¸™à¸²à¸¢à¸™",
            "à¸à¸£à¸à¸Žà¸²à¸„à¸¡",
            "à¸ªà¸´à¸‡à¸«à¸²à¸„à¸¡",
            "à¸à¸±à¸™à¸¢à¸²à¸¢à¸™",
            "à¸•à¸¸à¸¥à¸²à¸„à¸¡",
            "à¸žà¸¤à¸¨à¸ˆà¸´à¸à¸²à¸¢à¸™",
            "à¸˜à¸±à¸™à¸§à¸²à¸„à¸¡",
          ],
          dayOfWeekShort: ["à¸­à¸².", "à¸ˆ.", "à¸­.", "à¸ž.", "à¸žà¸¤.", "à¸¨.", "à¸ª."],
          dayOfWeek: [
            "à¸­à¸²à¸—à¸´à¸•à¸¢à¹Œ",
            "à¸ˆà¸±à¸™à¸—à¸£à¹Œ",
            "à¸­à¸±à¸‡à¸„à¸²à¸£",
            "à¸žà¸¸à¸˜",
            "à¸žà¸¤à¸«à¸±à¸ª",
            "à¸¨à¸¸à¸à¸£à¹Œ",
            "à¹€à¸ªà¸²à¸£à¹Œ",
            "à¸­à¸²à¸—à¸´à¸•à¸¢à¹Œ",
          ],
        },
        pl: {
          months: [
            "styczeÅ„",
            "luty",
            "marzec",
            "kwiecieÅ„",
            "maj",
            "czerwiec",
            "lipiec",
            "sierpieÅ„",
            "wrzesieÅ„",
            "paÅºdziernik",
            "listopad",
            "grudzieÅ„",
          ],
          dayOfWeekShort: ["nd", "pn", "wt", "Å›r", "cz", "pt", "sb"],
          dayOfWeek: [
            "niedziela",
            "poniedziaÅ‚ek",
            "wtorek",
            "Å›roda",
            "czwartek",
            "piÄ…tek",
            "sobota",
          ],
        },
        pt: {
          months: [
            "Janeiro",
            "Fevereiro",
            "MarÃ§o",
            "Abril",
            "Maio",
            "Junho",
            "Julho",
            "Agosto",
            "Setembro",
            "Outubro",
            "Novembro",
            "Dezembro",
          ],
          dayOfWeekShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
          dayOfWeek: [
            "Domingo",
            "Segunda",
            "TerÃ§a",
            "Quarta",
            "Quinta",
            "Sexta",
            "SÃ¡bado",
          ],
        },
        ch: {
          months: [
            "ä¸€æœˆ",
            "äºŒæœˆ",
            "ä¸‰æœˆ",
            "å››æœˆ",
            "äº”æœˆ",
            "å…­æœˆ",
            "ä¸ƒæœˆ",
            "å…«æœˆ",
            "ä¹æœˆ",
            "åæœˆ",
            "åä¸€æœˆ",
            "åäºŒæœˆ",
          ],
          dayOfWeekShort: ["æ—¥", "ä¸€", "äºŒ", "ä¸‰", "å››", "äº”", "å…­"],
        },
        se: {
          months: [
            "Januari",
            "Februari",
            "Mars",
            "April",
            "Maj",
            "Juni",
            "Juli",
            "Augusti",
            "September",
            "Oktober",
            "November",
            "December",
          ],
          dayOfWeekShort: ["SÃ¶n", "MÃ¥n", "Tis", "Ons", "Tor", "Fre", "LÃ¶r"],
        },
        km: {
          months: [
            "áž˜áž€ážšáž¶â€‹",
            "áž€áž»áž˜áŸ’áž—áŸˆ",
            "áž˜áž·áž“áž¶â€‹",
            "áž˜áŸážŸáž¶â€‹",
            "áž§ážŸáž—áž¶â€‹",
            "áž˜áž·ážáž»áž“áž¶â€‹",
            "áž€áž€áŸ’áž€ážŠáž¶â€‹",
            "ážŸáž¸áž áž¶â€‹",
            "áž€áž‰áŸ’áž‰áž¶â€‹",
            "ážáž»áž›áž¶â€‹",
            "ážœáž·áž…áŸ’áž†áž·áž€áž¶",
            "áž’áŸ’áž“áž¼â€‹",
          ],
          dayOfWeekShort: [
            "áž¢áž¶áž‘áž·â€‹",
            "áž…áŸáž“áŸ’áž‘â€‹",
            "áž¢áž„áŸ’áž‚áž¶ážšâ€‹",
            "áž–áž»áž’â€‹",
            "áž–áŸ’ážšáž â€‹â€‹",
            "ážŸáž»áž€áŸ’ážšâ€‹",
            "ážŸáŸ…ážšáŸ",
          ],
          dayOfWeek: [
            "áž¢áž¶áž‘áž·ážáŸ’áž™â€‹",
            "áž…áŸáž“áŸ’áž‘â€‹",
            "áž¢áž„áŸ’áž‚áž¶ážšâ€‹",
            "áž–áž»áž’â€‹",
            "áž–áŸ’ážšáž ážŸáŸ’áž”ážáž·áŸâ€‹",
            "ážŸáž»áž€áŸ’ážšâ€‹",
            "ážŸáŸ…ážšáŸ",
          ],
        },
        kr: {
          months: [
            "1ì›”",
            "2ì›”",
            "3ì›”",
            "4ì›”",
            "5ì›”",
            "6ì›”",
            "7ì›”",
            "8ì›”",
            "9ì›”",
            "10ì›”",
            "11ì›”",
            "12ì›”",
          ],
          dayOfWeekShort: ["ì¼", "ì›”", "í™”", "ìˆ˜", "ëª©", "ê¸ˆ", "í† "],
          dayOfWeek: [
            "ì¼ìš”ì¼",
            "ì›”ìš”ì¼",
            "í™”ìš”ì¼",
            "ìˆ˜ìš”ì¼",
            "ëª©ìš”ì¼",
            "ê¸ˆìš”ì¼",
            "í† ìš”ì¼",
          ],
        },
        it: {
          months: [
            "Gennaio",
            "Febbraio",
            "Marzo",
            "Aprile",
            "Maggio",
            "Giugno",
            "Luglio",
            "Agosto",
            "Settembre",
            "Ottobre",
            "Novembre",
            "Dicembre",
          ],
          dayOfWeekShort: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
          dayOfWeek: [
            "Domenica",
            "LunedÃ¬",
            "MartedÃ¬",
            "MercoledÃ¬",
            "GiovedÃ¬",
            "VenerdÃ¬",
            "Sabato",
          ],
        },
        da: {
          months: [
            "Januar",
            "Februar",
            "Marts",
            "April",
            "Maj",
            "Juni",
            "Juli",
            "August",
            "September",
            "Oktober",
            "November",
            "December",
          ],
          dayOfWeekShort: ["SÃ¸n", "Man", "Tir", "Ons", "Tor", "Fre", "LÃ¸r"],
          dayOfWeek: [
            "sÃ¸ndag",
            "mandag",
            "tirsdag",
            "onsdag",
            "torsdag",
            "fredag",
            "lÃ¸rdag",
          ],
        },
        no: {
          months: [
            "Januar",
            "Februar",
            "Mars",
            "April",
            "Mai",
            "Juni",
            "Juli",
            "August",
            "September",
            "Oktober",
            "November",
            "Desember",
          ],
          dayOfWeekShort: ["SÃ¸n", "Man", "Tir", "Ons", "Tor", "Fre", "LÃ¸r"],
          dayOfWeek: [
            "SÃ¸ndag",
            "Mandag",
            "Tirsdag",
            "Onsdag",
            "Torsdag",
            "Fredag",
            "LÃ¸rdag",
          ],
        },
        ja: {
          months: [
            "1æœˆ",
            "2æœˆ",
            "3æœˆ",
            "4æœˆ",
            "5æœˆ",
            "6æœˆ",
            "7æœˆ",
            "8æœˆ",
            "9æœˆ",
            "10æœˆ",
            "11æœˆ",
            "12æœˆ",
          ],
          dayOfWeekShort: ["æ—¥", "æœˆ", "ç«", "æ°´", "æœ¨", "é‡‘", "åœŸ"],
          dayOfWeek: ["æ—¥æ›œ", "æœˆæ›œ", "ç«æ›œ", "æ°´æ›œ", "æœ¨æ›œ", "é‡‘æ›œ", "åœŸæ›œ"],
        },
        vi: {
          months: [
            "ThÃ¡ng 1",
            "ThÃ¡ng 2",
            "ThÃ¡ng 3",
            "ThÃ¡ng 4",
            "ThÃ¡ng 5",
            "ThÃ¡ng 6",
            "ThÃ¡ng 7",
            "ThÃ¡ng 8",
            "ThÃ¡ng 9",
            "ThÃ¡ng 10",
            "ThÃ¡ng 11",
            "ThÃ¡ng 12",
          ],
          dayOfWeekShort: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
          dayOfWeek: [
            "Chá»§ nháº­t",
            "Thá»© hai",
            "Thá»© ba",
            "Thá»© tÆ°",
            "Thá»© nÄƒm",
            "Thá»© sÃ¡u",
            "Thá»© báº£y",
          ],
        },
        sl: {
          months: [
            "Januar",
            "Februar",
            "Marec",
            "April",
            "Maj",
            "Junij",
            "Julij",
            "Avgust",
            "September",
            "Oktober",
            "November",
            "December",
          ],
          dayOfWeekShort: ["Ned", "Pon", "Tor", "Sre", "ÄŒet", "Pet", "Sob"],
          dayOfWeek: [
            "Nedelja",
            "Ponedeljek",
            "Torek",
            "Sreda",
            "ÄŒetrtek",
            "Petek",
            "Sobota",
          ],
        },
        cs: {
          months: [
            "Leden",
            "Ãšnor",
            "BÅ™ezen",
            "Duben",
            "KvÄ›ten",
            "ÄŒerven",
            "ÄŒervenec",
            "Srpen",
            "ZÃ¡Å™Ã­",
            "Å˜Ã­jen",
            "Listopad",
            "Prosinec",
          ],
          dayOfWeekShort: ["Ne", "Po", "Ãšt", "St", "ÄŒt", "PÃ¡", "So"],
        },
        hu: {
          months: [
            "JanuÃ¡r",
            "FebruÃ¡r",
            "MÃ¡rcius",
            "Ãprilis",
            "MÃ¡jus",
            "JÃºnius",
            "JÃºlius",
            "Augusztus",
            "Szeptember",
            "OktÃ³ber",
            "November",
            "December",
          ],
          dayOfWeekShort: ["Va", "HÃ©", "Ke", "Sze", "Cs", "PÃ©", "Szo"],
          dayOfWeek: [
            "vasÃ¡rnap",
            "hÃ©tfÅ‘",
            "kedd",
            "szerda",
            "csÃ¼tÃ¶rtÃ¶k",
            "pÃ©ntek",
            "szombat",
          ],
        },
        az: {
          months: [
            "Yanvar",
            "Fevral",
            "Mart",
            "Aprel",
            "May",
            "Iyun",
            "Iyul",
            "Avqust",
            "Sentyabr",
            "Oktyabr",
            "Noyabr",
            "Dekabr",
          ],
          dayOfWeekShort: ["B", "Be", "Ã‡a", "Ã‡", "Ca", "C", "Åž"],
          dayOfWeek: [
            "Bazar",
            "Bazar ertÉ™si",
            "Ã‡É™rÅŸÉ™nbÉ™ axÅŸamÄ±",
            "Ã‡É™rÅŸÉ™nbÉ™",
            "CÃ¼mÉ™ axÅŸamÄ±",
            "CÃ¼mÉ™",
            "ÅžÉ™nbÉ™",
          ],
        },
        bs: {
          months: [
            "Januar",
            "Februar",
            "Mart",
            "April",
            "Maj",
            "Jun",
            "Jul",
            "Avgust",
            "Septembar",
            "Oktobar",
            "Novembar",
            "Decembar",
          ],
          dayOfWeekShort: ["Ned", "Pon", "Uto", "Sri", "ÄŒet", "Pet", "Sub"],
          dayOfWeek: [
            "Nedjelja",
            "Ponedjeljak",
            "Utorak",
            "Srijeda",
            "ÄŒetvrtak",
            "Petak",
            "Subota",
          ],
        },
        ca: {
          months: [
            "Gener",
            "Febrer",
            "MarÃ§",
            "Abril",
            "Maig",
            "Juny",
            "Juliol",
            "Agost",
            "Setembre",
            "Octubre",
            "Novembre",
            "Desembre",
          ],
          dayOfWeekShort: ["Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"],
          dayOfWeek: [
            "Diumenge",
            "Dilluns",
            "Dimarts",
            "Dimecres",
            "Dijous",
            "Divendres",
            "Dissabte",
          ],
        },
        "en-GB": {
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
          dayOfWeekShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          dayOfWeek: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
        },
        et: {
          months: [
            "Jaanuar",
            "Veebruar",
            "MÃ¤rts",
            "Aprill",
            "Mai",
            "Juuni",
            "Juuli",
            "August",
            "September",
            "Oktoober",
            "November",
            "Detsember",
          ],
          dayOfWeekShort: ["P", "E", "T", "K", "N", "R", "L"],
          dayOfWeek: [
            "PÃ¼hapÃ¤ev",
            "EsmaspÃ¤ev",
            "TeisipÃ¤ev",
            "KolmapÃ¤ev",
            "NeljapÃ¤ev",
            "Reede",
            "LaupÃ¤ev",
          ],
        },
        eu: {
          months: [
            "Urtarrila",
            "Otsaila",
            "Martxoa",
            "Apirila",
            "Maiatza",
            "Ekaina",
            "Uztaila",
            "Abuztua",
            "Iraila",
            "Urria",
            "Azaroa",
            "Abendua",
          ],
          dayOfWeekShort: ["Ig.", "Al.", "Ar.", "Az.", "Og.", "Or.", "La."],
          dayOfWeek: [
            "Igandea",
            "Astelehena",
            "Asteartea",
            "Asteazkena",
            "Osteguna",
            "Ostirala",
            "Larunbata",
          ],
        },
        fi: {
          months: [
            "Tammikuu",
            "Helmikuu",
            "Maaliskuu",
            "Huhtikuu",
            "Toukokuu",
            "KesÃ¤kuu",
            "HeinÃ¤kuu",
            "Elokuu",
            "Syyskuu",
            "Lokakuu",
            "Marraskuu",
            "Joulukuu",
          ],
          dayOfWeekShort: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"],
          dayOfWeek: [
            "sunnuntai",
            "maanantai",
            "tiistai",
            "keskiviikko",
            "torstai",
            "perjantai",
            "lauantai",
          ],
        },
        gl: {
          months: [
            "Xan",
            "Feb",
            "Maz",
            "Abr",
            "Mai",
            "Xun",
            "Xul",
            "Ago",
            "Set",
            "Out",
            "Nov",
            "Dec",
          ],
          dayOfWeekShort: ["Dom", "Lun", "Mar", "Mer", "Xov", "Ven", "Sab"],
          dayOfWeek: [
            "Domingo",
            "Luns",
            "Martes",
            "MÃ©rcores",
            "Xoves",
            "Venres",
            "SÃ¡bado",
          ],
        },
        hr: {
          months: [
            "SijeÄanj",
            "VeljaÄa",
            "OÅ¾ujak",
            "Travanj",
            "Svibanj",
            "Lipanj",
            "Srpanj",
            "Kolovoz",
            "Rujan",
            "Listopad",
            "Studeni",
            "Prosinac",
          ],
          dayOfWeekShort: ["Ned", "Pon", "Uto", "Sri", "ÄŒet", "Pet", "Sub"],
          dayOfWeek: [
            "Nedjelja",
            "Ponedjeljak",
            "Utorak",
            "Srijeda",
            "ÄŒetvrtak",
            "Petak",
            "Subota",
          ],
        },
        ko: {
          months: [
            "1ì›”",
            "2ì›”",
            "3ì›”",
            "4ì›”",
            "5ì›”",
            "6ì›”",
            "7ì›”",
            "8ì›”",
            "9ì›”",
            "10ì›”",
            "11ì›”",
            "12ì›”",
          ],
          dayOfWeekShort: ["ì¼", "ì›”", "í™”", "ìˆ˜", "ëª©", "ê¸ˆ", "í† "],
          dayOfWeek: [
            "ì¼ìš”ì¼",
            "ì›”ìš”ì¼",
            "í™”ìš”ì¼",
            "ìˆ˜ìš”ì¼",
            "ëª©ìš”ì¼",
            "ê¸ˆìš”ì¼",
            "í† ìš”ì¼",
          ],
        },
        lt: {
          months: [
            "Sausio",
            "Vasario",
            "Kovo",
            "BalandÅ¾io",
            "GeguÅ¾Ä—s",
            "BirÅ¾elio",
            "Liepos",
            "RugpjÅ«Äio",
            "RugsÄ—jo",
            "Spalio",
            "LapkriÄio",
            "GruodÅ¾io",
          ],
          dayOfWeekShort: ["Sek", "Pir", "Ant", "Tre", "Ket", "Pen", "Å eÅ¡"],
          dayOfWeek: [
            "Sekmadienis",
            "Pirmadienis",
            "Antradienis",
            "TreÄiadienis",
            "Ketvirtadienis",
            "Penktadienis",
            "Å eÅ¡tadienis",
          ],
        },
        lv: {
          months: [
            "JanvÄris",
            "FebruÄris",
            "Marts",
            "AprÄ«lis ",
            "Maijs",
            "JÅ«nijs",
            "JÅ«lijs",
            "Augusts",
            "Septembris",
            "Oktobris",
            "Novembris",
            "Decembris",
          ],
          dayOfWeekShort: ["Sv", "Pr", "Ot", "Tr", "Ct", "Pk", "St"],
          dayOfWeek: [
            "SvÄ“tdiena",
            "Pirmdiena",
            "Otrdiena",
            "TreÅ¡diena",
            "Ceturtdiena",
            "Piektdiena",
            "Sestdiena",
          ],
        },
        mk: {
          months: [
            "Ñ˜Ð°Ð½ÑƒÐ°Ñ€Ð¸",
            "Ñ„ÐµÐ²Ñ€ÑƒÐ°Ñ€Ð¸",
            "Ð¼Ð°Ñ€Ñ‚",
            "Ð°Ð¿Ñ€Ð¸Ð»",
            "Ð¼Ð°Ñ˜",
            "Ñ˜ÑƒÐ½Ð¸",
            "Ñ˜ÑƒÐ»Ð¸",
            "Ð°Ð²Ð³ÑƒÑÑ‚",
            "ÑÐµÐ¿Ñ‚ÐµÐ¼Ð²Ñ€Ð¸",
            "Ð¾ÐºÑ‚Ð¾Ð¼Ð²Ñ€Ð¸",
            "Ð½Ð¾ÐµÐ¼Ð²Ñ€Ð¸",
            "Ð´ÐµÐºÐµÐ¼Ð²Ñ€Ð¸",
          ],
          dayOfWeekShort: ["Ð½ÐµÐ´", "Ð¿Ð¾Ð½", "Ð²Ñ‚Ð¾", "ÑÑ€Ðµ", "Ñ‡ÐµÑ‚", "Ð¿ÐµÑ‚", "ÑÐ°Ð±"],
          dayOfWeek: [
            "ÐÐµÐ´ÐµÐ»Ð°",
            "ÐŸÐ¾Ð½ÐµÐ´ÐµÐ»Ð½Ð¸Ðº",
            "Ð’Ñ‚Ð¾Ñ€Ð½Ð¸Ðº",
            "Ð¡Ñ€ÐµÐ´Ð°",
            "Ð§ÐµÑ‚Ð²Ñ€Ñ‚Ð¾Ðº",
            "ÐŸÐµÑ‚Ð¾Ðº",
            "Ð¡Ð°Ð±Ð¾Ñ‚Ð°",
          ],
        },
        mn: {
          months: [
            "1-Ñ€ ÑÐ°Ñ€",
            "2-Ñ€ ÑÐ°Ñ€",
            "3-Ñ€ ÑÐ°Ñ€",
            "4-Ñ€ ÑÐ°Ñ€",
            "5-Ñ€ ÑÐ°Ñ€",
            "6-Ñ€ ÑÐ°Ñ€",
            "7-Ñ€ ÑÐ°Ñ€",
            "8-Ñ€ ÑÐ°Ñ€",
            "9-Ñ€ ÑÐ°Ñ€",
            "10-Ñ€ ÑÐ°Ñ€",
            "11-Ñ€ ÑÐ°Ñ€",
            "12-Ñ€ ÑÐ°Ñ€",
          ],
          dayOfWeekShort: ["Ð”Ð°Ð²", "ÐœÑÐ³", "Ð›Ñ…Ð°", "ÐŸÒ¯Ñ€", "Ð‘ÑÐ½", "Ð‘ÑÐ¼", "ÐÑÐ¼"],
          dayOfWeek: [
            "Ð”Ð°Ð²Ð°Ð°",
            "ÐœÑÐ³Ð¼Ð°Ñ€",
            "Ð›Ñ…Ð°Ð³Ð²Ð°",
            "ÐŸÒ¯Ñ€ÑÐ²",
            "Ð‘Ð°Ð°ÑÐ°Ð½",
            "Ð‘ÑÐ¼Ð±Ð°",
            "ÐÑÐ¼",
          ],
        },
        "pt-BR": {
          months: [
            "Janeiro",
            "Fevereiro",
            "MarÃ§o",
            "Abril",
            "Maio",
            "Junho",
            "Julho",
            "Agosto",
            "Setembro",
            "Outubro",
            "Novembro",
            "Dezembro",
          ],
          dayOfWeekShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "SÃ¡b"],
          dayOfWeek: [
            "Domingo",
            "Segunda",
            "TerÃ§a",
            "Quarta",
            "Quinta",
            "Sexta",
            "SÃ¡bado",
          ],
        },
        sk: {
          months: [
            "JanuÃ¡r",
            "FebruÃ¡r",
            "Marec",
            "AprÃ­l",
            "MÃ¡j",
            "JÃºn",
            "JÃºl",
            "August",
            "September",
            "OktÃ³ber",
            "November",
            "December",
          ],
          dayOfWeekShort: ["Ne", "Po", "Ut", "St", "Å t", "Pi", "So"],
          dayOfWeek: [
            "NedeÄ¾a",
            "Pondelok",
            "Utorok",
            "Streda",
            "Å tvrtok",
            "Piatok",
            "Sobota",
          ],
        },
        sq: {
          months: [
            "Janar",
            "Shkurt",
            "Mars",
            "Prill",
            "Maj",
            "Qershor",
            "Korrik",
            "Gusht",
            "Shtator",
            "Tetor",
            "NÃ«ntor",
            "Dhjetor",
          ],
          dayOfWeekShort: ["Die", "HÃ«n", "Mar", "MÃ«r", "Enj", "Pre", "Shtu"],
          dayOfWeek: [
            "E Diel",
            "E HÃ«nÃ«",
            "E MartÄ“",
            "E MÃ«rkurÃ«",
            "E Enjte",
            "E Premte",
            "E ShtunÃ«",
          ],
        },
        "sr-YU": {
          months: [
            "Januar",
            "Februar",
            "Mart",
            "April",
            "Maj",
            "Jun",
            "Jul",
            "Avgust",
            "Septembar",
            "Oktobar",
            "Novembar",
            "Decembar",
          ],
          dayOfWeekShort: ["Ned", "Pon", "Uto", "Sre", "Äet", "Pet", "Sub"],
          dayOfWeek: [
            "Nedelja",
            "Ponedeljak",
            "Utorak",
            "Sreda",
            "ÄŒetvrtak",
            "Petak",
            "Subota",
          ],
        },
        sr: {
          months: [
            "Ñ˜Ð°Ð½ÑƒÐ°Ñ€",
            "Ñ„ÐµÐ±Ñ€ÑƒÐ°Ñ€",
            "Ð¼Ð°Ñ€Ñ‚",
            "Ð°Ð¿Ñ€Ð¸Ð»",
            "Ð¼Ð°Ñ˜",
            "Ñ˜ÑƒÐ½",
            "Ñ˜ÑƒÐ»",
            "Ð°Ð²Ð³ÑƒÑÑ‚",
            "ÑÐµÐ¿Ñ‚ÐµÐ¼Ð±Ð°Ñ€",
            "Ð¾ÐºÑ‚Ð¾Ð±Ð°Ñ€",
            "Ð½Ð¾Ð²ÐµÐ¼Ð±Ð°Ñ€",
            "Ð´ÐµÑ†ÐµÐ¼Ð±Ð°Ñ€",
          ],
          dayOfWeekShort: ["Ð½ÐµÐ´", "Ð¿Ð¾Ð½", "ÑƒÑ‚Ð¾", "ÑÑ€Ðµ", "Ñ‡ÐµÑ‚", "Ð¿ÐµÑ‚", "ÑÑƒÐ±"],
          dayOfWeek: [
            "ÐÐµÐ´ÐµÑ™Ð°",
            "ÐŸÐ¾Ð½ÐµÐ´ÐµÑ™Ð°Ðº",
            "Ð£Ñ‚Ð¾Ñ€Ð°Ðº",
            "Ð¡Ñ€ÐµÐ´Ð°",
            "Ð§ÐµÑ‚Ð²Ñ€Ñ‚Ð°Ðº",
            "ÐŸÐµÑ‚Ð°Ðº",
            "Ð¡ÑƒÐ±Ð¾Ñ‚Ð°",
          ],
        },
        sv: {
          months: [
            "Januari",
            "Februari",
            "Mars",
            "April",
            "Maj",
            "Juni",
            "Juli",
            "Augusti",
            "September",
            "Oktober",
            "November",
            "December",
          ],
          dayOfWeekShort: ["SÃ¶n", "MÃ¥n", "Tis", "Ons", "Tor", "Fre", "LÃ¶r"],
          dayOfWeek: [
            "SÃ¶ndag",
            "MÃ¥ndag",
            "Tisdag",
            "Onsdag",
            "Torsdag",
            "Fredag",
            "LÃ¶rdag",
          ],
        },
        "zh-TW": {
          months: [
            "ä¸€æœˆ",
            "äºŒæœˆ",
            "ä¸‰æœˆ",
            "å››æœˆ",
            "äº”æœˆ",
            "å…­æœˆ",
            "ä¸ƒæœˆ",
            "å…«æœˆ",
            "ä¹æœˆ",
            "åæœˆ",
            "åä¸€æœˆ",
            "åäºŒæœˆ",
          ],
          dayOfWeekShort: ["æ—¥", "ä¸€", "äºŒ", "ä¸‰", "å››", "äº”", "å…­"],
          dayOfWeek: [
            "æ˜ŸæœŸæ—¥",
            "æ˜ŸæœŸä¸€",
            "æ˜ŸæœŸäºŒ",
            "æ˜ŸæœŸä¸‰",
            "æ˜ŸæœŸå››",
            "æ˜ŸæœŸäº”",
            "æ˜ŸæœŸå…­",
          ],
        },
        zh: {
          months: [
            "ä¸€æœˆ",
            "äºŒæœˆ",
            "ä¸‰æœˆ",
            "å››æœˆ",
            "äº”æœˆ",
            "å…­æœˆ",
            "ä¸ƒæœˆ",
            "å…«æœˆ",
            "ä¹æœˆ",
            "åæœˆ",
            "åä¸€æœˆ",
            "åäºŒæœˆ",
          ],
          dayOfWeekShort: ["æ—¥", "ä¸€", "äºŒ", "ä¸‰", "å››", "äº”", "å…­"],
          dayOfWeek: [
            "æ˜ŸæœŸæ—¥",
            "æ˜ŸæœŸä¸€",
            "æ˜ŸæœŸäºŒ",
            "æ˜ŸæœŸä¸‰",
            "æ˜ŸæœŸå››",
            "æ˜ŸæœŸäº”",
            "æ˜ŸæœŸå…­",
          ],
        },
        ug: {
          months: [
            "1-Ø¦Ø§ÙŠ",
            "2-Ø¦Ø§ÙŠ",
            "3-Ø¦Ø§ÙŠ",
            "4-Ø¦Ø§ÙŠ",
            "5-Ø¦Ø§ÙŠ",
            "6-Ø¦Ø§ÙŠ",
            "7-Ø¦Ø§ÙŠ",
            "8-Ø¦Ø§ÙŠ",
            "9-Ø¦Ø§ÙŠ",
            "10-Ø¦Ø§ÙŠ",
            "11-Ø¦Ø§ÙŠ",
            "12-Ø¦Ø§ÙŠ",
          ],
          dayOfWeek: [
            "ÙŠÛ•ÙƒØ´Û•Ù†Ø¨Û•",
            "Ø¯ÛˆØ´Û•Ù†Ø¨Û•",
            "Ø³Û•ÙŠØ´Û•Ù†Ø¨Û•",
            "Ú†Ø§Ø±Ø´Û•Ù†Ø¨Û•",
            "Ù¾Û•ÙŠØ´Û•Ù†Ø¨Û•",
            "Ø¬ÛˆÙ…Û•",
            "Ø´Û•Ù†Ø¨Û•",
          ],
        },
        he: {
          months: [
            "×™× ×•××¨",
            "×¤×‘×¨×•××¨",
            "×ž×¨×¥",
            "××¤×¨×™×œ",
            "×ž××™",
            "×™×•× ×™",
            "×™×•×œ×™",
            "××•×’×•×¡×˜",
            "×¡×¤×˜×ž×‘×¨",
            "××•×§×˜×•×‘×¨",
            "× ×•×‘×ž×‘×¨",
            "×“×¦×ž×‘×¨",
          ],
          dayOfWeekShort: ["×'", "×‘'", "×’'", "×“'", "×”'", "×•'", "×©×‘×ª"],
          dayOfWeek: [
            "×¨××©×•×Ÿ",
            "×©× ×™",
            "×©×œ×™×©×™",
            "×¨×‘×™×¢×™",
            "×—×ž×™×©×™",
            "×©×™×©×™",
            "×©×‘×ª",
            "×¨××©×•×Ÿ",
          ],
        },
        hy: {
          months: [
            "Õ€Õ¸Ö‚Õ¶Õ¾Õ¡Ö€",
            "Õ“Õ¥Õ¿Ö€Õ¾Õ¡Ö€",
            "Õ„Õ¡Ö€Õ¿",
            "Ô±ÕºÖ€Õ«Õ¬",
            "Õ„Õ¡ÕµÕ«Õ½",
            "Õ€Õ¸Ö‚Õ¶Õ«Õ½",
            "Õ€Õ¸Ö‚Õ¬Õ«Õ½",
            "Õ•Õ£Õ¸Õ½Õ¿Õ¸Õ½",
            "ÕÕ¥ÕºÕ¿Õ¥Õ´Õ¢Õ¥Ö€",
            "Õ€Õ¸Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö€",
            "Õ†Õ¸ÕµÕ¥Õ´Õ¢Õ¥Ö€",
            "Ô´Õ¥Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö€",
          ],
          dayOfWeekShort: ["Ô¿Õ«", "ÔµÖ€Õ¯", "ÔµÖ€Ö„", "Õ‰Õ¸Ö€", "Õ€Õ¶Õ£", "ÕˆÖ‚Ö€Õ¢", "Õ‡Õ¢Õ©"],
          dayOfWeek: [
            "Ô¿Õ«Ö€Õ¡Õ¯Õ«",
            "ÔµÖ€Õ¯Õ¸Ö‚Õ·Õ¡Õ¢Õ©Õ«",
            "ÔµÖ€Õ¥Ö„Õ·Õ¡Õ¢Õ©Õ«",
            "Õ‰Õ¸Ö€Õ¥Ö„Õ·Õ¡Õ¢Õ©Õ«",
            "Õ€Õ«Õ¶Õ£Õ·Õ¡Õ¢Õ©Õ«",
            "ÕˆÖ‚Ö€Õ¢Õ¡Õ©",
            "Õ‡Õ¡Õ¢Õ¡Õ©",
          ],
        },
        kg: {
          months: [
            "Ò®Ñ‡Ñ‚Ò¯Ð½ Ð°Ð¹Ñ‹",
            "Ð‘Ð¸Ñ€Ð´Ð¸Ð½ Ð°Ð¹Ñ‹",
            "Ð–Ð°Ð»Ð³Ð°Ð½ ÐšÑƒÑ€Ð°Ð½",
            "Ð§Ñ‹Ð½ ÐšÑƒÑ€Ð°Ð½",
            "Ð‘ÑƒÐ³Ñƒ",
            "ÐšÑƒÐ»Ð¶Ð°",
            "Ð¢ÐµÐºÐµ",
            "Ð‘Ð°Ñˆ ÐžÐ¾Ð½Ð°",
            "ÐÑÐº ÐžÐ¾Ð½Ð°",
            "Ð¢Ð¾Ð³ÑƒÐ·Ð´ÑƒÐ½ Ð°Ð¹Ñ‹",
            "Ð–ÐµÑ‚Ð¸Ð½Ð¸Ð½ Ð°Ð¹Ñ‹",
            "Ð‘ÐµÑˆÑ‚Ð¸Ð½ Ð°Ð¹Ñ‹",
          ],
          dayOfWeekShort: ["Ð–ÐµÐº", "Ð”Ò¯Ð¹", "Ð¨ÐµÐ¹", "Ð¨Ð°Ñ€", "Ð‘ÐµÐ¹", "Ð–ÑƒÐ¼", "Ð˜ÑˆÐµ"],
          dayOfWeek: [
            "Ð–ÐµÐºÑˆÐµÐ¼Ð±",
            "Ð”Ò¯Ð¹ÑˆÓ©Ð¼Ð±",
            "Ð¨ÐµÐ¹ÑˆÐµÐ¼Ð±",
            "Ð¨Ð°Ñ€ÑˆÐµÐ¼Ð±",
            "Ð‘ÐµÐ¹ÑˆÐµÐ¼Ð±Ð¸",
            "Ð–ÑƒÐ¼Ð°",
            "Ð˜ÑˆÐµÐ½Ð±",
          ],
        },
        rm: {
          months: [
            "Schaner",
            "Favrer",
            "Mars",
            "Avrigl",
            "Matg",
            "Zercladur",
            "Fanadur",
            "Avust",
            "Settember",
            "October",
            "November",
            "December",
          ],
          dayOfWeekShort: ["Du", "Gli", "Ma", "Me", "Gie", "Ve", "So"],
          dayOfWeek: [
            "Dumengia",
            "Glindesdi",
            "Mardi",
            "Mesemna",
            "Gievgia",
            "Venderdi",
            "Sonda",
          ],
        },
        ka: {
          months: [
            "áƒ˜áƒáƒœáƒ•áƒáƒ áƒ˜",
            "áƒ—áƒ”áƒ‘áƒ”áƒ áƒ•áƒáƒšáƒ˜",
            "áƒ›áƒáƒ áƒ¢áƒ˜",
            "áƒáƒžáƒ áƒ˜áƒšáƒ˜",
            "áƒ›áƒáƒ˜áƒ¡áƒ˜",
            "áƒ˜áƒ•áƒœáƒ˜áƒ¡áƒ˜",
            "áƒ˜áƒ•áƒšáƒ˜áƒ¡áƒ˜",
            "áƒáƒ’áƒ•áƒ˜áƒ¡áƒ¢áƒ",
            "áƒ¡áƒ”áƒ¥áƒ¢áƒ”áƒ›áƒ‘áƒ”áƒ áƒ˜",
            "áƒáƒ¥áƒ¢áƒáƒ›áƒ‘áƒ”áƒ áƒ˜",
            "áƒœáƒáƒ”áƒ›áƒ‘áƒ”áƒ áƒ˜",
            "áƒ“áƒ”áƒ™áƒ”áƒ›áƒ‘áƒ”áƒ áƒ˜",
          ],
          dayOfWeekShort: ["áƒ™áƒ•", "áƒáƒ áƒ¨", "áƒ¡áƒáƒ›áƒ¨", "áƒáƒ—áƒ®", "áƒ®áƒ£áƒ—", "áƒžáƒáƒ ", "áƒ¨áƒáƒ‘"],
          dayOfWeek: [
            "áƒ™áƒ•áƒ˜áƒ áƒ",
            "áƒáƒ áƒ¨áƒáƒ‘áƒáƒ—áƒ˜",
            "áƒ¡áƒáƒ›áƒ¨áƒáƒ‘áƒáƒ—áƒ˜",
            "áƒáƒ—áƒ®áƒ¨áƒáƒ‘áƒáƒ—áƒ˜",
            "áƒ®áƒ£áƒ—áƒ¨áƒáƒ‘áƒáƒ—áƒ˜",
            "áƒžáƒáƒ áƒáƒ¡áƒ™áƒ”áƒ•áƒ˜",
            "áƒ¨áƒáƒ‘áƒáƒ—áƒ˜",
          ],
        },
      },
      ownerDocument: document,
      contentWindow: window,
      value: "",
      rtl: !1,
      format: "Y/m/d H:i",
      formatTime: "H:i",
      formatDate: "Y/m/d",
      startDate: !1,
      step: 60,
      monthChangeSpinner: !0,
      closeOnDateSelect: !1,
      closeOnTimeSelect: !0,
      closeOnWithoutClick: !0,
      closeOnInputClick: !0,
      openOnFocus: !0,
      timepicker: !0,
      datepicker: !0,
      weeks: !1,
      defaultTime: !1,
      defaultDate: !1,
      minDate: !1,
      maxDate: !1,
      minTime: !1,
      maxTime: !1,
      minDateTime: !1,
      maxDateTime: !1,
      allowTimes: [],
      opened: !1,
      initTime: !0,
      inline: !1,
      theme: "",
      touchMovedThreshold: 5,
      onSelectDate: function () {},
      onSelectTime: function () {},
      onChangeMonth: function () {},
      onGetWeekOfYear: function () {},
      onChangeYear: function () {},
      onChangeDateTime: function () {},
      onShow: function () {},
      onClose: function () {},
      onGenerate: function () {},
      withoutCopyright: !0,
      inverseButton: !1,
      hours12: !1,
      next: "xdsoft_next",
      prev: "xdsoft_prev",
      dayOfWeekStart: 0,
      parentID: "body",
      timeHeightInTimePicker: 25,
      timepickerScrollbar: !0,
      todayButton: !0,
      prevButton: !0,
      nextButton: !0,
      defaultSelect: !0,
      scrollMonth: !0,
      scrollTime: !0,
      scrollInput: !0,
      lazyInit: !1,
      mask: !1,
      validateOnBlur: !0,
      allowBlank: !0,
      yearStart: 1950,
      yearEnd: 2050,
      monthStart: 0,
      monthEnd: 11,
      style: "",
      id: "",
      fixed: !1,
      roundTime: "round",
      className: "",
      weekends: [],
      highlightedDates: [],
      highlightedPeriods: [],
      allowDates: [],
      allowDateRe: null,
      disabledDates: [],
      disabledWeekDays: [],
      yearOffset: 0,
      beforeShowDay: null,
      enterLikeTab: !0,
      showApplyButton: !1,
      insideParent: !1,
    },
    i = null,
    n = null,
    s = "ar",
    o = { meridiem: ["AM", "PM"] },
    l = function () {
      var l = t.i18n[s],
        a = {
          days: l.dayOfWeek,
          daysShort: l.dayOfWeekShort,
          months: l.months,
          monthsShort: e.map(l.months, function (e) {
            return e.substring(0, 3);
          }),
        };
      "function" == typeof DateFormatter &&
        (i = n = new DateFormatter({ dateSettings: e.extend({}, o, a) }));
    },
    a = {
      moment: {
        default_options: {
          format: "YYYY/MM/DD HH:mm",
          formatDate: "YYYY/MM/DD",
          formatTime: "HH:mm",
        },
        formatter: {
          parseDate: function (e, t) {
            if (d(t)) return n.parseDate(e, t);
            var i = moment(e, t);
            return !!i.isValid() && i.toDate();
          },
          formatDate: function (e, t) {
            return d(t) ? n.formatDate(e, t) : moment(e).format(t);
          },
          formatMask: function (e) {
            return e
              .replace(/Y{4}/g, "9999")
              .replace(/Y{2}/g, "99")
              .replace(/M{2}/g, "19")
              .replace(/D{2}/g, "39")
              .replace(/H{2}/g, "29")
              .replace(/m{2}/g, "59")
              .replace(/s{2}/g, "59");
          },
        },
      },
    };
  e.datetimepicker = {
    setLocale: function (e) {
      var i = t.i18n[e] ? e : "ar";
      s !== i && ((s = i), l());
    },
    setDateFormatter: function (n) {
      if ("string" == typeof n && a.hasOwnProperty(n)) {
        var s = a[n];
        e.extend(t, s.default_options), (i = s.formatter);
      } else i = n;
    },
  };
  var r = {
      RFC_2822: "D, d M Y H:i:s O",
      ATOM: "Y-m-dTH:i:sP",
      ISO_8601: "Y-m-dTH:i:sO",
      RFC_822: "D, d M y H:i:s O",
      RFC_850: "l, d-M-y H:i:s T",
      RFC_1036: "D, d M y H:i:s O",
      RFC_1123: "D, d M Y H:i:s O",
      RSS: "D, d M Y H:i:s O",
      W3C: "Y-m-dTH:i:sP",
    },
    d = function (e) {
      return -1 !== Object.values(r).indexOf(e);
    };
  function c(e, t, i) {
    (this.date = e), (this.desc = t), (this.style = i);
  }
  e.extend(e.datetimepicker, r),
    l(),
    window.getComputedStyle ||
      (window.getComputedStyle = function (e) {
        return (
          (this.el = e),
          (this.getPropertyValue = function (t) {
            var i = /(-([a-z]))/g;
            return (
              "float" === t && (t = "styleFloat"),
              i.test(t) &&
                (t = t.replace(i, function (e, t, i) {
                  return i.toUpperCase();
                })),
              e.currentStyle[t] || null
            );
          }),
          this
        );
      }),
    Array.prototype.indexOf ||
      (Array.prototype.indexOf = function (e, t) {
        var i, n;
        for (i = t || 0, n = this.length; i < n; i += 1)
          if (this[i] === e) return i;
        return -1;
      }),
    (Date.prototype.countDaysInMonth = function () {
      return new Date(this.getFullYear(), this.getMonth() + 1, 0).getDate();
    }),
    (e.fn.xdsoftScroller = function (t, i) {
      return this.each(function () {
        var n,
          s,
          o,
          l,
          a,
          r = e(this),
          d = function (e) {
            var t,
              i = { x: 0, y: 0 };
            return (
              "touchstart" === e.type ||
              "touchmove" === e.type ||
              "touchend" === e.type ||
              "touchcancel" === e.type
                ? ((t =
                    e.originalEvent.touches[0] ||
                    e.originalEvent.changedTouches[0]),
                  (i.x = t.clientX),
                  (i.y = t.clientY))
                : ("mousedown" !== e.type &&
                    "mouseup" !== e.type &&
                    "mousemove" !== e.type &&
                    "mouseover" !== e.type &&
                    "mouseout" !== e.type &&
                    "mouseenter" !== e.type &&
                    "mouseleave" !== e.type) ||
                  ((i.x = e.clientX), (i.y = e.clientY)),
              i
            );
          },
          c = 100,
          h = !1,
          u = 0,
          p = 0,
          m = 0,
          g = !1,
          f = 0,
          v = function () {};
        "hide" !== i
          ? (e(this).hasClass("xdsoft_scroller_box") ||
              ((n = r.children().eq(0)),
              (s = r[0].clientHeight),
              (o = n[0].offsetHeight),
              (l = e('<div class="xdsoft_scrollbar"></div>')),
              (a = e('<div class="xdsoft_scroller"></div>')),
              l.append(a),
              r.addClass("xdsoft_scroller_box").append(l),
              (v = function (e) {
                var t = d(e).y - u + f;
                t < 0 && (t = 0),
                  t + a[0].offsetHeight > m && (t = m - a[0].offsetHeight),
                  r.trigger("scroll_element.xdsoft_scroller", [c ? t / c : 0]);
              }),
              a
                .on(
                  "touchstart.xdsoft_scroller mousedown.xdsoft_scroller",
                  function (n) {
                    s || r.trigger("resize_scroll.xdsoft_scroller", [i]),
                      (u = d(n).y),
                      (f = parseInt(a.css("margin-top"), 10)),
                      (m = l[0].offsetHeight),
                      "mousedown" === n.type || "touchstart" === n.type
                        ? (t.ownerDocument &&
                            e(t.ownerDocument.body).addClass("xdsoft_noselect"),
                          e([t.ownerDocument.body, t.contentWindow]).on(
                            "touchend mouseup.xdsoft_scroller",
                            function i() {
                              e([t.ownerDocument.body, t.contentWindow])
                                .off("touchend mouseup.xdsoft_scroller", i)
                                .off("mousemove.xdsoft_scroller", v)
                                .removeClass("xdsoft_noselect");
                            }
                          ),
                          e(t.ownerDocument.body).on(
                            "mousemove.xdsoft_scroller",
                            v
                          ))
                        : ((g = !0), n.stopPropagation(), n.preventDefault());
                  }
                )
                .on("touchmove", function (e) {
                  g && (e.preventDefault(), v(e));
                })
                .on("touchend touchcancel", function () {
                  (g = !1), (f = 0);
                }),
              r
                .on("scroll_element.xdsoft_scroller", function (e, t) {
                  s || r.trigger("resize_scroll.xdsoft_scroller", [t, !0]),
                    (t = t > 1 ? 1 : t < 0 || isNaN(t) ? 0 : t),
                    a.css("margin-top", c * t),
                    setTimeout(function () {
                      n.css(
                        "marginTop",
                        -parseInt((n[0].offsetHeight - s) * t, 10)
                      );
                    }, 10);
                })
                .on("resize_scroll.xdsoft_scroller", function (e, t, i) {
                  var d, h;
                  (s = r[0].clientHeight),
                    (o = n[0].offsetHeight),
                    (h = (d = s / o) * l[0].offsetHeight),
                    d > 1
                      ? a.hide()
                      : (a.show(),
                        a.css("height", parseInt(h > 10 ? h : 10, 10)),
                        (c = l[0].offsetHeight - a[0].offsetHeight),
                        !0 !== i &&
                          r.trigger("scroll_element.xdsoft_scroller", [
                            t ||
                              Math.abs(parseInt(n.css("marginTop"), 10)) /
                                (o - s),
                          ]));
                }),
              r.on("mousewheel", function (e) {
                var t = Math.abs(parseInt(n.css("marginTop"), 10));
                return (
                  (t -= 20 * e.deltaY) < 0 && (t = 0),
                  r.trigger("scroll_element.xdsoft_scroller", [t / (o - s)]),
                  e.stopPropagation(),
                  !1
                );
              }),
              r.on("touchstart", function (e) {
                (h = d(e)), (p = Math.abs(parseInt(n.css("marginTop"), 10)));
              }),
              r.on("touchmove", function (e) {
                if (h) {
                  e.preventDefault();
                  var t = d(e);
                  r.trigger("scroll_element.xdsoft_scroller", [
                    (p - (t.y - h.y)) / (o - s),
                  ]);
                }
              }),
              r.on("touchend touchcancel", function () {
                (h = !1), (p = 0);
              })),
            r.trigger("resize_scroll.xdsoft_scroller", [i]))
          : r.find(".xdsoft_scrollbar").hide();
      });
    }),
    (e.fn.datetimepicker = function (n, o) {
      var l,
        a,
        r = this,
        d = 17,
        h = 13,
        u = 27,
        p = 37,
        m = 38,
        g = 39,
        f = 40,
        v = 9,
        y = 116,
        b = 65,
        w = 67,
        S = 86,
        C = 90,
        x = 89,
        T = !1,
        k =
          e.isPlainObject(n) || !n
            ? e.extend(!0, {}, t, n)
            : e.extend(!0, {}, t),
        L = 0;
      return (
        (l = function (t) {
          var o,
            l,
            a,
            r,
            L,
            E,
            I = e('<div class="xdsoft_datetimepicker xdsoft_noselect"></div>'),
            D = e(
              '<div class="xdsoft_copyright"><a target="_blank" href="http://xdsoft.net/jqplugins/datetimepicker/">xdsoft.net</a></div>'
            ),
            A = e('<div class="xdsoft_datepicker active"></div>'),
            M = e(
              '<div class="xdsoft_monthpicker"><button type="button" class="xdsoft_prev"><svg xmlns="http://www.w3.org/2000/svg" width="7" height="12.25" viewBox="0 0 7 12.25" style="&#10;"> <path id="Path" d="M6.748,6.731,1.468,12A.859.859,0,0,1,.252,10.786L4.924,6.125.252,1.464A.859.859,0,1,1,1.468.251l5.28,5.267a.856.856,0,0,1,0,1.213Z" transform="translate(7 12.25) rotate(180)" fill="#000"/> </svg></button><button type="button" class="xdsoft_today_button"></button><div class="xdsoft_label xdsoft_month"><span></span><i></i></div><div class="xdsoft_label xdsoft_year"><span></span><i></i></div><button type="button" class="xdsoft_next"><svg xmlns="http://www.w3.org/2000/svg" width="7" height="11.667" viewBox="0 0 7 11.667"> <path id="Path" d="M6.748,6.411l-5.28,5.016a.892.892,0,0,1-1.216,0,.788.788,0,0,1,0-1.155L4.924,5.833.252,1.395a.789.789,0,0,1,0-1.155.892.892,0,0,1,1.216,0l5.28,5.016a.788.788,0,0,1,0,1.155Z" fill="#000"/> </svg></button></div>'
            ),
            O = e('<div class="xdsoft_calendar"></div>'),
            P = e(
              '<div class="xdsoft_timepicker active"><span class="choose-time">Ø§Ø®ØªØ± Ø§Ù„ÙˆÙ‚Øª</span><button type="button" class="xdsoft_prev"></button><div class="xdsoft_time_box"></div><button type="button" class="xdsoft_next"></button></div>'
            ),
            $ = P.find(".xdsoft_time_box").eq(0),
            H = e('<div class="xdsoft_time_variant"></div>'),
            N = e(
              '<button type="button" class="xdsoft_save_selected blue-gradient-button">Save Selected</button>'
            ),
            F = e(
              '<div class="xdsoft_select xdsoft_monthselect"><div></div></div>'
            ),
            _ = e(
              '<div class="xdsoft_select xdsoft_yearselect"><div></div></div>'
            ),
            B = !1,
            q = 0;
          k.id && I.attr("id", k.id),
            k.style && I.attr("style", k.style),
            k.weeks && I.addClass("xdsoft_showweeks"),
            k.rtl && I.addClass("xdsoft_rtl"),
            I.addClass("xdsoft_" + k.theme),
            I.addClass(k.className),
            M.find(".xdsoft_month span").after(F),
            M.find(".xdsoft_year span").after(_),
            M.find(".xdsoft_month,.xdsoft_year").on(
              "touchstart mousedown.xdsoft",
              function (t) {
                var i,
                  n,
                  s = e(this).find(".xdsoft_select").eq(0),
                  o = 0,
                  l = 0,
                  a = s.is(":visible");
                for (
                  M.find(".xdsoft_select").hide(),
                    L.currentTime &&
                      (o =
                        L.currentTime[
                          e(this).hasClass("xdsoft_month")
                            ? "getMonth"
                            : "getFullYear"
                        ]()),
                    s[a ? "hide" : "show"](),
                    i = s.find("div.xdsoft_option"),
                    n = 0;
                  n < i.length && i.eq(n).data("value") !== o;
                  n += 1
                )
                  l += i[0].offsetHeight;
                return (
                  s.xdsoftScroller(
                    k,
                    l / (s.children()[0].offsetHeight - s[0].clientHeight)
                  ),
                  t.stopPropagation(),
                  !1
                );
              }
            );
          var W = function (e) {
            var t = e.originalEvent,
              i = t.touches ? t.touches[0] : t;
            this.touchStartPosition = this.touchStartPosition || i;
            var n = Math.abs(this.touchStartPosition.clientX - i.clientX),
              s = Math.abs(this.touchStartPosition.clientY - i.clientY);
            Math.sqrt(n * n + s * s) > k.touchMovedThreshold &&
              (this.touchMoved = !0);
          };
          function j() {
            var e,
              i = !1;
            return (
              k.startDate
                ? (i = L.strToDate(k.startDate))
                : (i = k.value || (t && t.val && t.val() ? t.val() : ""))
                ? ((i = L.strToDateTime(i)),
                  k.yearOffset &&
                    (i = new Date(
                      i.getFullYear() - k.yearOffset,
                      i.getMonth(),
                      i.getDate(),
                      i.getHours(),
                      i.getMinutes(),
                      i.getSeconds(),
                      i.getMilliseconds()
                    )))
                : k.defaultDate &&
                  ((i = L.strToDateTime(k.defaultDate)),
                  k.defaultTime &&
                    ((e = L.strtotime(k.defaultTime)),
                    i.setHours(e.getHours()),
                    i.setMinutes(e.getMinutes()))),
              i && L.isValidDate(i) ? I.data("changed", !0) : (i = ""),
              i || 0
            );
          }
          function R(n) {
            var s = function (e, t) {
                var i = e
                  .replace(/([\[\]\/\{\}\(\)\-\.\+]{1})/g, "\\$1")
                  .replace(/_/g, "{digit+}")
                  .replace(/([0-9]{1})/g, "{digit$1}")
                  .replace(/\{digit([0-9]{1})\}/g, "[0-$1_]{1}")
                  .replace(/\{digit[\+]\}/g, "[0-9_]{1}");
                return new RegExp(i).test(t);
              },
              o = function (e, t) {
                if (
                  !(e =
                    "string" == typeof e || e instanceof String
                      ? n.ownerDocument.getElementById(e)
                      : e)
                )
                  return !1;
                if (e.createTextRange) {
                  var i = e.createTextRange();
                  return (
                    i.collapse(!0),
                    i.moveEnd("character", t),
                    i.moveStart("character", t),
                    i.select(),
                    !0
                  );
                }
                return !!e.setSelectionRange && (e.setSelectionRange(t, t), !0);
              };
            n.mask && t.off("keydown.xdsoft"),
              !0 === n.mask &&
                (i.formatMask
                  ? (n.mask = i.formatMask(n.format))
                  : (n.mask = n.format
                      .replace(/Y/g, "9999")
                      .replace(/F/g, "9999")
                      .replace(/m/g, "19")
                      .replace(/d/g, "39")
                      .replace(/H/g, "29")
                      .replace(/i/g, "59")
                      .replace(/s/g, "59"))),
              "string" === e.type(n.mask) &&
                (s(n.mask, t.val()) ||
                  (t.val(n.mask.replace(/[0-9]/g, "_")), o(t[0], 0)),
                t.on("paste.xdsoft", function (i) {
                  var l = (
                      i.clipboardData ||
                      i.originalEvent.clipboardData ||
                      window.clipboardData
                    ).getData("text"),
                    a = this.value,
                    r = this.selectionStart,
                    d = a.substr(0, r),
                    c = a.substr(r + l.length);
                  return (
                    (a = d + l + c),
                    (r += l.length),
                    s(n.mask, a)
                      ? ((this.value = a), o(this, r))
                      : "" === e.trim(a)
                      ? (this.value = n.mask.replace(/[0-9]/g, "_"))
                      : t.trigger("error_input.xdsoft"),
                    i.preventDefault(),
                    !1
                  );
                }),
                t.on("keydown.xdsoft", function (i) {
                  var l,
                    a = this.value,
                    r = i.which,
                    c = this.selectionStart,
                    k = this.selectionEnd,
                    L = c !== k;
                  if (
                    (r >= 48 && r <= 57) ||
                    (r >= 96 && r <= 105) ||
                    8 === r ||
                    46 === r
                  ) {
                    for (
                      l =
                        8 === r || 46 === r
                          ? "_"
                          : String.fromCharCode(
                              96 <= r && r <= 105 ? r - 48 : r
                            ),
                        8 === r && c && !L && (c -= 1);
                      ;

                    ) {
                      var E = n.mask.substr(c, 1),
                        I = c < n.mask.length,
                        D = c > 0;
                      if (!(/[^0-9_]/.test(E) && I && D)) break;
                      c += 8 !== r || L ? 1 : -1;
                    }
                    if ((i.metaKey && ((c = 0), (L = !0)), L)) {
                      var A = k - c,
                        M = n.mask.replace(/[0-9]/g, "_"),
                        O = M.substr(c, A).substr(1),
                        P = a.substr(0, c),
                        $ = l + O,
                        H = a.substr(c + A);
                      a = P + $ + H;
                    } else {
                      var N = a.substr(0, c),
                        F = l,
                        _ = a.substr(c + 1);
                      a = N + F + _;
                    }
                    if ("" === e.trim(a)) a = M;
                    else if (c === n.mask.length) return i.preventDefault(), !1;
                    for (
                      c += 8 === r ? 0 : 1;
                      /[^0-9_]/.test(n.mask.substr(c, 1)) &&
                      c < n.mask.length &&
                      c > 0;

                    )
                      c += 8 === r ? 0 : 1;
                    s(n.mask, a)
                      ? ((this.value = a), o(this, c))
                      : "" === e.trim(a)
                      ? (this.value = n.mask.replace(/[0-9]/g, "_"))
                      : t.trigger("error_input.xdsoft");
                  } else if ((-1 !== [b, w, S, C, x].indexOf(r) && T) || -1 !== [u, m, f, p, g, y, d, v, h].indexOf(r)) return !0;
                  return i.preventDefault(), !1;
                }));
          }
          M.find(".xdsoft_select")
            .xdsoftScroller(k)
            .on("touchstart mousedown.xdsoft", function (e) {
              var t = e.originalEvent;
              (this.touchMoved = !1),
                (this.touchStartPosition = t.touches ? t.touches[0] : t),
                e.stopPropagation(),
                e.preventDefault();
            })
            .on("touchmove", ".xdsoft_option", W)
            .on("touchend mousedown.xdsoft", ".xdsoft_option", function () {
              if (!this.touchMoved) {
                (void 0 !== L.currentTime && null !== L.currentTime) ||
                  (L.currentTime = L.now());
                var t = L.currentTime.getFullYear();
                L &&
                  L.currentTime &&
                  L.currentTime[
                    e(this).parent().parent().hasClass("xdsoft_monthselect")
                      ? "setMonth"
                      : "setFullYear"
                  ](e(this).data("value")),
                  e(this).parent().parent().hide(),
                  I.trigger("xchange.xdsoft"),
                  k.onChangeMonth &&
                    e.isFunction(k.onChangeMonth) &&
                    k.onChangeMonth.call(I, L.currentTime, I.data("input")),
                  t !== L.currentTime.getFullYear() &&
                    e.isFunction(k.onChangeYear) &&
                    k.onChangeYear.call(I, L.currentTime, I.data("input"));
              }
            }),
            (I.getValue = function () {
              return L.getCurrentTime();
            }),
            (I.setOptions = function (n) {
              var s = {};
              (k = e.extend(!0, {}, k, n)),
                n.allowTimes &&
                  e.isArray(n.allowTimes) &&
                  n.allowTimes.length &&
                  (k.allowTimes = e.extend(!0, [], n.allowTimes)),
                n.weekends &&
                  e.isArray(n.weekends) &&
                  n.weekends.length &&
                  (k.weekends = e.extend(!0, [], n.weekends)),
                n.allowDates &&
                  e.isArray(n.allowDates) &&
                  n.allowDates.length &&
                  (k.allowDates = e.extend(!0, [], n.allowDates)),
                n.allowDateRe &&
                  "[object String]" ===
                    Object.prototype.toString.call(n.allowDateRe) &&
                  (k.allowDateRe = new RegExp(n.allowDateRe)),
                n.highlightedDates &&
                  e.isArray(n.highlightedDates) &&
                  n.highlightedDates.length &&
                  (e.each(n.highlightedDates, function (t, n) {
                    var o,
                      l = e.map(n.split(","), e.trim),
                      a = new c(i.parseDate(l[0], k.formatDate), l[1], l[2]),
                      r = i.formatDate(a.date, k.formatDate);
                    void 0 !== s[r]
                      ? (o = s[r].desc) &&
                        o.length &&
                        a.desc &&
                        a.desc.length &&
                        (s[r].desc = o + "\n" + a.desc)
                      : (s[r] = a);
                  }),
                  (k.highlightedDates = e.extend(!0, [], s))),
                n.highlightedPeriods &&
                  e.isArray(n.highlightedPeriods) &&
                  n.highlightedPeriods.length &&
                  ((s = e.extend(!0, [], k.highlightedDates)),
                  e.each(n.highlightedPeriods, function (t, n) {
                    var o, l, a, r, d, h, u;
                    if (e.isArray(n))
                      (o = n[0]), (l = n[1]), (a = n[2]), (u = n[3]);
                    else {
                      var p = e.map(n.split(","), e.trim);
                      (o = i.parseDate(p[0], k.formatDate)),
                        (l = i.parseDate(p[1], k.formatDate)),
                        (a = p[2]),
                        (u = p[3]);
                    }
                    for (; o <= l; )
                      (r = new c(o, a, u)),
                        (d = i.formatDate(o, k.formatDate)),
                        o.setDate(o.getDate() + 1),
                        void 0 !== s[d]
                          ? (h = s[d].desc) &&
                            h.length &&
                            r.desc &&
                            r.desc.length &&
                            (s[d].desc = h + "\n" + r.desc)
                          : (s[d] = r);
                  }),
                  (k.highlightedDates = e.extend(!0, [], s))),
                n.disabledDates &&
                  e.isArray(n.disabledDates) &&
                  n.disabledDates.length &&
                  (k.disabledDates = e.extend(!0, [], n.disabledDates)),
                n.disabledWeekDays &&
                  e.isArray(n.disabledWeekDays) &&
                  n.disabledWeekDays.length &&
                  (k.disabledWeekDays = e.extend(!0, [], n.disabledWeekDays)),
                (!k.open && !k.opened) || k.inline || t.trigger("open.xdsoft"),
                k.inline &&
                  ((B = !0), I.addClass("xdsoft_inline"), t.after(I).hide()),
                k.inverseButton &&
                  ((k.next = "xdsoft_prev"), (k.prev = "xdsoft_next")),
                k.datepicker ? A.addClass("active") : A.removeClass("active"),
                k.timepicker ? P.addClass("active") : P.removeClass("active"),
                k.value &&
                  (L.setCurrentTime(k.value), t && t.val && t.val(L.str)),
                isNaN(k.dayOfWeekStart)
                  ? (k.dayOfWeekStart = 0)
                  : (k.dayOfWeekStart = parseInt(k.dayOfWeekStart, 10) % 7),
                k.timepickerScrollbar || $.xdsoftScroller(k, "hide"),
                k.minDate &&
                  /^[\+\-](.*)$/.test(k.minDate) &&
                  (k.minDate = i.formatDate(
                    L.strToDateTime(k.minDate),
                    k.formatDate
                  )),
                k.maxDate &&
                  /^[\+\-](.*)$/.test(k.maxDate) &&
                  (k.maxDate = i.formatDate(
                    L.strToDateTime(k.maxDate),
                    k.formatDate
                  )),
                k.minDateTime &&
                  /^\+(.*)$/.test(k.minDateTime) &&
                  (k.minDateTime = L.strToDateTime(k.minDateTime).dateFormat(
                    k.formatDate
                  )),
                k.maxDateTime &&
                  /^\+(.*)$/.test(k.maxDateTime) &&
                  (k.maxDateTime = L.strToDateTime(k.maxDateTime).dateFormat(
                    k.formatDate
                  )),
                N.toggle(k.showApplyButton),
                M.find(".xdsoft_today_button").css(
                  "visibility",
                  k.todayButton ? "visible" : "hidden"
                ),
                M.find("." + k.prev).css(
                  "visibility",
                  k.prevButton ? "visible" : "hidden"
                ),
                M.find("." + k.next).css(
                  "visibility",
                  k.nextButton ? "visible" : "hidden"
                ),
                R(k),
                k.validateOnBlur &&
                  t.off("blur.xdsoft").on("blur.xdsoft", function () {
                    if (
                      k.allowBlank &&
                      (!e.trim(e(this).val()).length ||
                        ("string" == typeof k.mask &&
                          e.trim(e(this).val()) ===
                            k.mask.replace(/[0-9]/g, "_")))
                    )
                      e(this).val(null), I.data("xdsoft_datetime").empty();
                    else {
                      var t = i.parseDate(e(this).val(), k.format);
                      if (t) e(this).val(i.formatDate(t, k.format));
                      else {
                        var n = +[e(this).val()[0], e(this).val()[1]].join(""),
                          s = +[e(this).val()[2], e(this).val()[3]].join("");
                        !k.datepicker &&
                        k.timepicker &&
                        n >= 0 &&
                        n < 24 &&
                        s >= 0 &&
                        s < 60
                          ? e(this).val(
                              [n, s]
                                .map(function (e) {
                                  return e > 9 ? e : "0" + e;
                                })
                                .join(":")
                            )
                          : e(this).val(i.formatDate(L.now(), k.format));
                      }
                      I.data("xdsoft_datetime").setCurrentTime(e(this).val());
                    }
                    I.trigger("changedatetime.xdsoft"),
                      I.trigger("close.xdsoft");
                  }),
                (k.dayOfWeekStartPrev =
                  0 === k.dayOfWeekStart ? 6 : k.dayOfWeekStart - 1),
                I.trigger("xchange.xdsoft").trigger("afterOpen.xdsoft");
            }),
            I.data("options", k).on(
              "touchstart mousedown.xdsoft",
              function (e) {
                return (
                  e.stopPropagation(),
                  e.preventDefault(),
                  _.hide(),
                  F.hide(),
                  !1
                );
              }
            ),
            $.append(H),
            $.xdsoftScroller(k),
            I.on("afterOpen.xdsoft", function () {
              $.xdsoftScroller(k);
            }),
            I.append(A).append(P),
            !0 !== k.withoutCopyright && I.append(D),
            A.append(M).append(O).append(N),
            k.insideParent ? e(t).parent().append(I) : e(k.parentID).append(I),
            (L = new (function () {
              var t = this;
              (t.now = function (e) {
                var i,
                  n,
                  s = new Date();
                return (
                  !e &&
                    k.defaultDate &&
                    ((i = t.strToDateTime(k.defaultDate)),
                    s.setFullYear(i.getFullYear()),
                    s.setMonth(i.getMonth()),
                    s.setDate(i.getDate())),
                  s.setFullYear(s.getFullYear()),
                  !e &&
                    k.defaultTime &&
                    ((n = t.strtotime(k.defaultTime)),
                    s.setHours(n.getHours()),
                    s.setMinutes(n.getMinutes()),
                    s.setSeconds(n.getSeconds()),
                    s.setMilliseconds(n.getMilliseconds())),
                  s
                );
              }),
                (t.isValidDate = function (e) {
                  return (
                    "[object Date]" === Object.prototype.toString.call(e) &&
                    !isNaN(e.getTime())
                  );
                }),
                (t.setCurrentTime = function (e, i) {
                  "string" == typeof e
                    ? (t.currentTime = t.strToDateTime(e))
                    : t.isValidDate(e)
                    ? (t.currentTime = e)
                    : e || i || !k.allowBlank || k.inline
                    ? (t.currentTime = t.now())
                    : (t.currentTime = null),
                    I.trigger("xchange.xdsoft");
                }),
                (t.empty = function () {
                  t.currentTime = null;
                }),
                (t.getCurrentTime = function () {
                  return t.currentTime;
                }),
                (t.nextMonth = function () {
                  (void 0 !== t.currentTime && null !== t.currentTime) ||
                    (t.currentTime = t.now());
                  var i,
                    n = t.currentTime.getMonth() + 1;
                  return (
                    12 === n &&
                      (t.currentTime.setFullYear(
                        t.currentTime.getFullYear() + 1
                      ),
                      (n = 0)),
                    (i = t.currentTime.getFullYear()),
                    t.currentTime.setDate(
                      Math.min(
                        new Date(
                          t.currentTime.getFullYear(),
                          n + 1,
                          0
                        ).getDate(),
                        t.currentTime.getDate()
                      )
                    ),
                    t.currentTime.setMonth(n),
                    k.onChangeMonth &&
                      e.isFunction(k.onChangeMonth) &&
                      k.onChangeMonth.call(I, L.currentTime, I.data("input")),
                    i !== t.currentTime.getFullYear() &&
                      e.isFunction(k.onChangeYear) &&
                      k.onChangeYear.call(I, L.currentTime, I.data("input")),
                    I.trigger("xchange.xdsoft"),
                    n
                  );
                }),
                (t.prevMonth = function () {
                  (void 0 !== t.currentTime && null !== t.currentTime) ||
                    (t.currentTime = t.now());
                  var i = t.currentTime.getMonth() - 1;
                  return (
                    -1 === i &&
                      (t.currentTime.setFullYear(
                        t.currentTime.getFullYear() - 1
                      ),
                      (i = 11)),
                    t.currentTime.setDate(
                      Math.min(
                        new Date(
                          t.currentTime.getFullYear(),
                          i + 1,
                          0
                        ).getDate(),
                        t.currentTime.getDate()
                      )
                    ),
                    t.currentTime.setMonth(i),
                    k.onChangeMonth &&
                      e.isFunction(k.onChangeMonth) &&
                      k.onChangeMonth.call(I, L.currentTime, I.data("input")),
                    I.trigger("xchange.xdsoft"),
                    i
                  );
                }),
                (t.getWeekOfYear = function (t) {
                  if (k.onGetWeekOfYear && e.isFunction(k.onGetWeekOfYear)) {
                    var i = k.onGetWeekOfYear.call(I, t);
                    if (void 0 !== i) return i;
                  }
                  var n = new Date(t.getFullYear(), 0, 1);
                  return (
                    4 !== n.getDay() &&
                      n.setMonth(0, 1 + ((4 - n.getDay() + 7) % 7)),
                    Math.ceil(((t - n) / 864e5 + n.getDay() + 1) / 7)
                  );
                }),
                (t.strToDateTime = function (e) {
                  var n,
                    s,
                    o = [];
                  return e && e instanceof Date && t.isValidDate(e)
                    ? e
                    : ((o = /^([+-]{1})(.*)$/.exec(e)) &&
                        (o[2] = i.parseDate(o[2], k.formatDate)),
                      o && o[2]
                        ? ((n =
                            o[2].getTime() - 6e4 * o[2].getTimezoneOffset()),
                          (s = new Date(
                            t.now(!0).getTime() + parseInt(o[1] + "1", 10) * n
                          )))
                        : (s = e ? i.parseDate(e, k.format) : t.now()),
                      t.isValidDate(s) || (s = t.now()),
                      s);
                }),
                (t.strToDate = function (e) {
                  if (e && e instanceof Date && t.isValidDate(e)) return e;
                  var n = e ? i.parseDate(e, k.formatDate) : t.now(!0);
                  return t.isValidDate(n) || (n = t.now(!0)), n;
                }),
                (t.strtotime = function (e) {
                  if (e && e instanceof Date && t.isValidDate(e)) return e;
                  var n = e ? i.parseDate(e, k.formatTime) : t.now(!0);
                  return t.isValidDate(n) || (n = t.now(!0)), n;
                }),
                (t.str = function () {
                  var e = k.format;
                  return (
                    k.yearOffset &&
                      (e = (e = e.replace(
                        "Y",
                        t.currentTime.getFullYear() + k.yearOffset
                      )).replace(
                        "y",
                        String(
                          t.currentTime.getFullYear() + k.yearOffset
                        ).substring(2, 4)
                      )),
                    i.formatDate(t.currentTime, e)
                  );
                }),
                (t.currentTime = this.now());
            })()),
            N.on("touchend click", function (e) {
              e.preventDefault(),
                I.data("changed", !0),
                L.setCurrentTime(j()),
                t.val(L.str()),
                I.trigger("close.xdsoft");
            }),
            M.find(".xdsoft_today_button")
              .on("touchend mousedown.xdsoft", function () {
                I.data("changed", !0),
                  L.setCurrentTime(0, !0),
                  I.trigger("afterOpen.xdsoft");
              })
              .on("dblclick.xdsoft", function () {
                var e,
                  i,
                  n = L.getCurrentTime();
                (n = new Date(n.getFullYear(), n.getMonth(), n.getDate())),
                  (e = L.strToDate(k.minDate)),
                  n <
                    (e = new Date(
                      e.getFullYear(),
                      e.getMonth(),
                      e.getDate()
                    )) ||
                    ((i = L.strToDate(k.maxDate)),
                    n >
                      (i = new Date(
                        i.getFullYear(),
                        i.getMonth(),
                        i.getDate()
                      )) ||
                      (t.val(L.str()),
                      t.trigger("change"),
                      I.trigger("close.xdsoft")));
              }),
            M.find(".xdsoft_prev,.xdsoft_next").on(
              "touchend mousedown.xdsoft",
              function () {
                var t = e(this),
                  i = 0,
                  n = !1;
                !(function e(s) {
                  t.hasClass(k.next)
                    ? L.nextMonth()
                    : t.hasClass(k.prev) && L.prevMonth(),
                    k.monthChangeSpinner &&
                      (n || (i = setTimeout(e, s || 100)));
                })(500),
                  e([k.ownerDocument.body, k.contentWindow]).on(
                    "touchend mouseup.xdsoft",
                    function t() {
                      clearTimeout(i),
                        (n = !0),
                        e([k.ownerDocument.body, k.contentWindow]).off(
                          "touchend mouseup.xdsoft",
                          t
                        );
                    }
                  );
              }
            ),
            P.find(".xdsoft_prev,.xdsoft_next").on(
              "touchend mousedown.xdsoft",
              function () {
                var t = e(this),
                  i = 0,
                  n = !1,
                  s = 110;
                !(function e(o) {
                  var l = $[0].clientHeight,
                    a = H[0].offsetHeight,
                    r = Math.abs(parseInt(H.css("marginTop"), 10));
                  t.hasClass(k.next) && a - l - k.timeHeightInTimePicker >= r
                    ? H.css(
                        "marginTop",
                        "-" + (r + k.timeHeightInTimePicker) + "px"
                      )
                    : t.hasClass(k.prev) &&
                      r - k.timeHeightInTimePicker >= 0 &&
                      H.css(
                        "marginTop",
                        "-" + (r - k.timeHeightInTimePicker) + "px"
                      ),
                    $.trigger("scroll_element.xdsoft_scroller", [
                      Math.abs(parseInt(H[0].style.marginTop, 10) / (a - l)),
                    ]),
                    (s = s > 10 ? 10 : s - 10),
                    n || (i = setTimeout(e, o || s));
                })(500),
                  e([k.ownerDocument.body, k.contentWindow]).on(
                    "touchend mouseup.xdsoft",
                    function t() {
                      clearTimeout(i),
                        (n = !0),
                        e([k.ownerDocument.body, k.contentWindow]).off(
                          "touchend mouseup.xdsoft",
                          t
                        );
                    }
                  );
              }
            ),
            (o = 0),
            I.on("xchange.xdsoft", function (l) {
              clearTimeout(o),
                (o = setTimeout(function () {
                  (void 0 !== L.currentTime && null !== L.currentTime) ||
                    (L.currentTime = L.now());
                  for (
                    var o,
                      l,
                      a,
                      r,
                      d,
                      c,
                      h,
                      u,
                      p,
                      m,
                      g = "",
                      f = new Date(
                        L.currentTime.getFullYear(),
                        L.currentTime.getMonth(),
                        1,
                        12,
                        0,
                        0
                      ),
                      v = 0,
                      y = L.now(),
                      b = !1,
                      w = !1,
                      S = !1,
                      C = !1,
                      x = [],
                      T = !0,
                      E = "";
                    f.getDay() !== k.dayOfWeekStart;

                  )
                    f.setDate(f.getDate() - 1);
                  for (
                    g += "<table><thead><tr>",
                      k.weeks && (g += "<th></th>"),
                      o = 0;
                    o < 7;
                    o += 1
                  )
                    g +=
                      "<th>" +
                      k.i18n[s].dayOfWeekShort[(o + k.dayOfWeekStart) % 7] +
                      "</th>";
                  for (
                    g += "</tr></thead>",
                      g += "<tbody>",
                      !1 !== k.maxDate &&
                        ((b = L.strToDate(k.maxDate)),
                        (b = new Date(
                          b.getFullYear(),
                          b.getMonth(),
                          b.getDate(),
                          23,
                          59,
                          59,
                          999
                        ))),
                      !1 !== k.minDate &&
                        ((w = L.strToDate(k.minDate)),
                        (w = new Date(
                          w.getFullYear(),
                          w.getMonth(),
                          w.getDate()
                        ))),
                      !1 !== k.minDateTime &&
                        ((S = L.strToDate(k.minDateTime)),
                        (S = new Date(
                          S.getFullYear(),
                          S.getMonth(),
                          S.getDate(),
                          S.getHours(),
                          S.getMinutes(),
                          S.getSeconds()
                        ))),
                      !1 !== k.maxDateTime &&
                        ((C = L.strToDate(k.maxDateTime)),
                        (C = new Date(
                          C.getFullYear(),
                          C.getMonth(),
                          C.getDate(),
                          C.getHours(),
                          C.getMinutes(),
                          C.getSeconds()
                        ))),
                      !1 !== C &&
                        (m =
                          31 * (12 * C.getFullYear() + C.getMonth()) +
                          C.getDate());
                    v < L.currentTime.countDaysInMonth() ||
                    f.getDay() !== k.dayOfWeekStart ||
                    L.currentTime.getMonth() === f.getMonth();

                  ) {
                    (x = []),
                      (v += 1),
                      (a = f.getDay()),
                      (r = f.getDate()),
                      (d = f.getFullYear()),
                      (N = f.getMonth()),
                      (c = L.getWeekOfYear(f)),
                      (p = ""),
                      x.push("xdsoft_date"),
                      (h =
                        k.beforeShowDay && e.isFunction(k.beforeShowDay.call)
                          ? k.beforeShowDay.call(I, f)
                          : null),
                      k.allowDateRe &&
                        "[object RegExp]" ===
                          Object.prototype.toString.call(k.allowDateRe) &&
                        (k.allowDateRe.test(i.formatDate(f, k.formatDate)) ||
                          x.push("xdsoft_disabled")),
                      k.allowDates &&
                        k.allowDates.length > 0 &&
                        -1 ===
                          k.allowDates.indexOf(i.formatDate(f, k.formatDate)) &&
                        x.push("xdsoft_disabled");
                    var D =
                      31 * (12 * f.getFullYear() + f.getMonth()) + f.getDate();
                    ((!1 !== b && f > b) ||
                      (!1 !== S && f < S) ||
                      (!1 !== w && f < w) ||
                      (!1 !== C && D > m) ||
                      (h && !1 === h[0])) &&
                      x.push("xdsoft_disabled"),
                      -1 !==
                        k.disabledDates.indexOf(
                          i.formatDate(f, k.formatDate)
                        ) && x.push("xdsoft_disabled"),
                      -1 !== k.disabledWeekDays.indexOf(a) &&
                        x.push("xdsoft_disabled"),
                      t.is("[disabled]") && x.push("xdsoft_disabled"),
                      h && "" !== h[1] && x.push(h[1]),
                      L.currentTime.getMonth() !== N &&
                        x.push("xdsoft_other_month"),
                      (k.defaultSelect || I.data("changed")) &&
                        i.formatDate(L.currentTime, k.formatDate) ===
                          i.formatDate(f, k.formatDate) &&
                        x.push("xdsoft_current"),
                      i.formatDate(y, k.formatDate) ===
                        i.formatDate(f, k.formatDate) && x.push("xdsoft_today"),
                      (0 !== f.getDay() &&
                        6 !== f.getDay() &&
                        -1 ===
                          k.weekends.indexOf(i.formatDate(f, k.formatDate))) ||
                        x.push("xdsoft_weekend"),
                      void 0 !==
                        k.highlightedDates[i.formatDate(f, k.formatDate)] &&
                        ((l =
                          k.highlightedDates[i.formatDate(f, k.formatDate)]),
                        x.push(
                          void 0 === l.style
                            ? "xdsoft_highlighted_default"
                            : l.style
                        ),
                        (p = void 0 === l.desc ? "" : l.desc)),
                      k.beforeShowDay &&
                        e.isFunction(k.beforeShowDay) &&
                        x.push(k.beforeShowDay(f)),
                      T &&
                        ((g += "<tr>"),
                        (T = !1),
                        k.weeks && (g += "<th>" + c + "</th>")),
                      (g +=
                        '<td data-date="' +
                        r +
                        '" data-month="' +
                        N +
                        '" data-year="' +
                        d +
                        '" class="xdsoft_date xdsoft_day_of_week' +
                        f.getDay() +
                        " " +
                        x.join(" ") +
                        '" title="' +
                        p +
                        '"><div>' +
                        r +
                        "</div></td>"),
                      f.getDay() === k.dayOfWeekStartPrev &&
                        ((g += "</tr>"), (T = !0)),
                      f.setDate(r + 1);
                  }
                  (g += "</tbody></table>"),
                    O.html(g),
                    M.find(".xdsoft_label span")
                      .eq(0)
                      .text(k.i18n[s].months[L.currentTime.getMonth()]),
                    M.find(".xdsoft_label span")
                      .eq(1)
                      .text(L.currentTime.getFullYear() + k.yearOffset),
                    (E = ""),
                    (N = "");
                  var A = 0;
                  if (!1 !== k.minTime) {
                    var P = L.strtotime(k.minTime);
                    A = 60 * P.getHours() + P.getMinutes();
                  }
                  var $ = 1440;
                  if (!1 !== k.maxTime) {
                    P = L.strtotime(k.maxTime);
                    $ = 60 * P.getHours() + P.getMinutes();
                  }
                  if (!1 !== k.minDateTime) {
                    P = L.strToDateTime(k.minDateTime);
                    if (
                      i.formatDate(L.currentTime, k.formatDate) ===
                      i.formatDate(P, k.formatDate)
                    )
                      (N = 60 * P.getHours() + P.getMinutes()) > A && (A = N);
                  }
                  if (!1 !== k.maxDateTime) {
                    var N;
                    P = L.strToDateTime(k.maxDateTime);
                    if (
                      i.formatDate(L.currentTime, k.formatDate) ===
                      i.formatDate(P, k.formatDate)
                    )
                      (N = 60 * P.getHours() + P.getMinutes()) < $ && ($ = N);
                  }
                  if (
                    ((u = function (n, s) {
                      var o,
                        l = L.now(),
                        a =
                          k.allowTimes &&
                          e.isArray(k.allowTimes) &&
                          k.allowTimes.length;
                      l.setHours(n),
                        (n = parseInt(l.getHours(), 10)),
                        l.setMinutes(s),
                        (s = parseInt(l.getMinutes(), 10)),
                        (x = []);
                      var r = 60 * n + s;
                      (t.is("[disabled]") || r >= $ || r < A) &&
                        x.push("xdsoft_disabled"),
                        (o = new Date(L.currentTime)).setHours(
                          parseInt(L.currentTime.getHours(), 10)
                        ),
                        a ||
                          o.setMinutes(
                            Math[k.roundTime](
                              L.currentTime.getMinutes() / k.step
                            ) * k.step
                          ),
                        (k.initTime || k.defaultSelect || I.data("changed")) &&
                          o.getHours() === parseInt(n, 10) &&
                          ((!a && k.step > 59) ||
                            o.getMinutes() === parseInt(s, 10)) &&
                          (k.defaultSelect || I.data("changed")
                            ? x.push("xdsoft_current")
                            : k.initTime && x.push("xdsoft_init_time")),
                        parseInt(y.getHours(), 10) === parseInt(n, 10) &&
                          parseInt(y.getMinutes(), 10) === parseInt(s, 10) &&
                          x.push("xdsoft_today"),
                        (E +=
                          '<div class="xdsoft_time ' +
                          x.join(" ") +
                          '" data-hour="' +
                          n +
                          '" data-minute="' +
                          s +
                          '">' +
                          i.formatDate(l, k.formatTime) +
                          "</div>");
                    }),
                    k.allowTimes &&
                      e.isArray(k.allowTimes) &&
                      k.allowTimes.length)
                  )
                    for (v = 0; v < k.allowTimes.length; v += 1)
                      u(
                        L.strtotime(k.allowTimes[v]).getHours(),
                        (N = L.strtotime(k.allowTimes[v]).getMinutes())
                      );
                  else
                    for (v = 0, o = 0; v < (k.hours12 ? 12 : 24); v += 1)
                      for (o = 0; o < 60; o += k.step) {
                        var B = 60 * v + o;
                        B < A ||
                          B >= $ ||
                          u(
                            (v < 10 ? "0" : "") + v,
                            (N = (o < 10 ? "0" : "") + o)
                          );
                      }
                  for (
                    H.html(E), n = "", v = parseInt(k.yearStart, 10);
                    v <= parseInt(k.yearEnd, 10);
                    v += 1
                  )
                    n +=
                      '<div class="xdsoft_option ' +
                      (L.currentTime.getFullYear() === v
                        ? "xdsoft_current"
                        : "") +
                      '" data-value="' +
                      v +
                      '">' +
                      (v + k.yearOffset) +
                      "</div>";
                  for (
                    _.children().eq(0).html(n),
                      v = parseInt(k.monthStart, 10),
                      n = "";
                    v <= parseInt(k.monthEnd, 10);
                    v += 1
                  )
                    n +=
                      '<div class="xdsoft_option ' +
                      (L.currentTime.getMonth() === v ? "xdsoft_current" : "") +
                      '" data-value="' +
                      v +
                      '">' +
                      k.i18n[s].months[v] +
                      "</div>";
                  F.children().eq(0).html(n), e(I).trigger("generate.xdsoft");
                }, 10)),
                l.stopPropagation();
            }).on("afterOpen.xdsoft", function () {
              var e, t, i, n;
              k.timepicker &&
                (H.find(".xdsoft_current").length
                  ? (e = ".xdsoft_current")
                  : H.find(".xdsoft_init_time").length &&
                    (e = ".xdsoft_init_time"),
                e
                  ? ((t = $[0].clientHeight),
                    (i = H[0].offsetHeight) - t <
                      (n = H.find(e).index() * k.timeHeightInTimePicker + 1) &&
                      (n = i - t),
                    $.trigger("scroll_element.xdsoft_scroller", [
                      parseInt(n, 10) / (i - t),
                    ]))
                  : $.trigger("scroll_element.xdsoft_scroller", [0]));
            }),
            (l = 0),
            O.on("touchend click.xdsoft", "td", function (i) {
              i.stopPropagation(), (l += 1);
              var n = e(this),
                s = L.currentTime;
              if (
                (null == s && ((L.currentTime = L.now()), (s = L.currentTime)),
                n.hasClass("xdsoft_disabled"))
              )
                return !1;
              s.setDate(1),
                s.setFullYear(n.data("year")),
                s.setMonth(n.data("month")),
                s.setDate(n.data("date")),
                I.trigger("select.xdsoft", [s]),
                t.val(L.str()),
                k.onSelectDate &&
                  e.isFunction(k.onSelectDate) &&
                  k.onSelectDate.call(I, L.currentTime, I.data("input"), i),
                I.data("changed", !0),
                I.trigger("xchange.xdsoft"),
                I.trigger("changedatetime.xdsoft"),
                (l > 1 ||
                  !0 === k.closeOnDateSelect ||
                  (!1 === k.closeOnDateSelect && !k.timepicker)) &&
                  !k.inline &&
                  I.trigger("close.xdsoft"),
                setTimeout(function () {
                  l = 0;
                }, 200);
            }),
            H.on("touchstart", "div", function (e) {
              this.touchMoved = !1;
            })
              .on("touchmove", "div", W)
              .on("touchend click.xdsoft", "div", function (t) {
                if (!this.touchMoved) {
                  t.stopPropagation();
                  var i = e(this),
                    n = L.currentTime;
                  if (
                    (null == n &&
                      ((L.currentTime = L.now()), (n = L.currentTime)),
                    i.hasClass("xdsoft_disabled"))
                  )
                    return !1;
                  n.setHours(i.data("hour")),
                    n.setMinutes(i.data("minute")),
                    I.trigger("select.xdsoft", [n]),
                    I.data("input").val(L.str()),
                    k.onSelectTime &&
                      e.isFunction(k.onSelectTime) &&
                      k.onSelectTime.call(I, L.currentTime, I.data("input"), t),
                    I.data("changed", !0),
                    I.trigger("xchange.xdsoft"),
                    I.trigger("changedatetime.xdsoft"),
                    !0 !== k.inline &&
                      !0 === k.closeOnTimeSelect &&
                      I.trigger("close.xdsoft");
                }
              }),
            A.on("mousewheel.xdsoft", function (e) {
              return (
                !k.scrollMonth ||
                (e.deltaY < 0 ? L.nextMonth() : L.prevMonth(), !1)
              );
            }),
            t.on("mousewheel.xdsoft", function (e) {
              return (
                !k.scrollInput ||
                (!k.datepicker && k.timepicker
                  ? ((a = H.find(".xdsoft_current").length
                      ? H.find(".xdsoft_current").eq(0).index()
                      : 0) +
                      e.deltaY >=
                      0 &&
                      a + e.deltaY < H.children().length &&
                      (a += e.deltaY),
                    H.children().eq(a).length &&
                      H.children().eq(a).trigger("mousedown"),
                    !1)
                  : k.datepicker && !k.timepicker
                  ? (A.trigger(e, [e.deltaY, e.deltaX, e.deltaY]),
                    t.val && t.val(L.str()),
                    I.trigger("changedatetime.xdsoft"),
                    !1)
                  : void 0)
              );
            }),
            I.on("changedatetime.xdsoft", function (t) {
              if (k.onChangeDateTime && e.isFunction(k.onChangeDateTime)) {
                var i = I.data("input");
                k.onChangeDateTime.call(I, L.currentTime, i, t),
                  delete k.value,
                  i.trigger("change");
              }
            })
              .on("generate.xdsoft", function () {
                k.onGenerate &&
                  e.isFunction(k.onGenerate) &&
                  k.onGenerate.call(I, L.currentTime, I.data("input")),
                  B && (I.trigger("afterOpen.xdsoft"), (B = !1));
              })
              .on("click.xdsoft", function (e) {
                e.stopPropagation();
              }),
            (a = 0),
            (E = function (e, t) {
              do {
                if (!(e = e.parentNode) || !1 === t(e)) break;
              } while ("HTML" !== e.nodeName);
            }),
            (r = function () {
              var t, i, n, s, o, l, a, r, d, c, h, u, p;
              if (
                ((t = (r = I.data("input")).offset()),
                (i = r[0]),
                (c = "top"),
                (n = t.top + i.offsetHeight - 1),
                (s = t.left),
                (o = "absolute"),
                (d = e(k.contentWindow).width()),
                (u = e(k.contentWindow).height()),
                (p = e(k.contentWindow).scrollTop()),
                k.ownerDocument.documentElement.clientWidth - t.left <
                  A.parent().outerWidth(!0))
              ) {
                var m = A.parent().outerWidth(!0) - i.offsetWidth;
                s -= m;
              }
              "rtl" === r.parent().css("direction") &&
                (s -= I.outerWidth() - r.outerWidth()),
                k.fixed
                  ? ((n -= p),
                    (s -= e(k.contentWindow).scrollLeft()),
                    (o = "fixed"))
                  : ((a = !1),
                    E(i, function (e) {
                      return (
                        null !== e &&
                        ("fixed" ===
                        k.contentWindow
                          .getComputedStyle(e)
                          .getPropertyValue("position")
                          ? ((a = !0), !1)
                          : void 0)
                      );
                    }),
                    a && !k.insideParent
                      ? ((o = "fixed"),
                        n + I.outerHeight() > u + p
                          ? ((c = "bottom"), (n = u + p - t.top))
                          : (n -= p))
                      : n + I[0].offsetHeight > u + p &&
                        (n = t.top - I[0].offsetHeight + 1),
                    n < 0 && (n = 0),
                    s + i.offsetWidth > d && (s = d - i.offsetWidth)),
                (l = I[0]),
                E(l, function (e) {
                  if (
                    "relative" ===
                      k.contentWindow
                        .getComputedStyle(e)
                        .getPropertyValue("position") &&
                    d >= e.offsetWidth
                  )
                    return (s -= (d - e.offsetWidth) / 2), !1;
                }),
                (h = {
                  position: o,
                  left: k.insideParent ? i.offsetLeft : s,
                  top: "",
                  bottom: "",
                }),
                k.insideParent
                  ? (h[c] = i.offsetTop + i.offsetHeight)
                  : (h[c] = n),
                I.css(h);
            }),
            I.on("open.xdsoft", function (t) {
              var i = !0;
              k.onShow &&
                e.isFunction(k.onShow) &&
                (i = k.onShow.call(I, L.currentTime, I.data("input"), t)),
                !1 !== i &&
                  (I.show(),
                  r(),
                  e(k.contentWindow)
                    .off("resize.xdsoft", r)
                    .on("resize.xdsoft", r),
                  k.closeOnWithoutClick &&
                    e([k.ownerDocument.body, k.contentWindow]).on(
                      "touchstart mousedown.xdsoft",
                      function t() {
                        I.trigger("close.xdsoft"),
                          e([k.ownerDocument.body, k.contentWindow]).off(
                            "touchstart mousedown.xdsoft",
                            t
                          );
                      }
                    ));
            })
              .on("close.xdsoft", function (t) {
                var i = !0;
                M.find(".xdsoft_month,.xdsoft_year")
                  .find(".xdsoft_select")
                  .hide(),
                  k.onClose &&
                    e.isFunction(k.onClose) &&
                    (i = k.onClose.call(I, L.currentTime, I.data("input"), t)),
                  !1 === i || k.opened || k.inline || I.hide(),
                  t.stopPropagation();
              })
              .on("toggle.xdsoft", function () {
                I.is(":visible")
                  ? I.trigger("close.xdsoft")
                  : I.trigger("open.xdsoft");
              })
              .data("input", t),
            (q = 0),
            I.data("xdsoft_datetime", L),
            I.setOptions(k),
            L.setCurrentTime(j()),
            t
              .data("xdsoft_datetimepicker", I)
              .on(
                "open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart",
                function () {
                  t.is(":disabled") ||
                    (t.data("xdsoft_datetimepicker").is(":visible") &&
                      k.closeOnInputClick) ||
                    (k.openOnFocus &&
                      (clearTimeout(q),
                      (q = setTimeout(function () {
                        t.is(":disabled") ||
                          ((B = !0),
                          L.setCurrentTime(j(), !0),
                          k.mask && R(k),
                          I.trigger("open.xdsoft"));
                      }, 100))));
                }
              )
              .on("keydown.xdsoft", function (t) {
                var i,
                  n = t.which;
                return -1 !== [h].indexOf(n) && k.enterLikeTab
                  ? ((i = e(
                      "input:visible,textarea:visible,button:visible,a:visible"
                    )),
                    I.trigger("close.xdsoft"),
                    i.eq(i.index(this) + 1).focus(),
                    !1)
                  : -1 !== [v].indexOf(n)
                  ? (I.trigger("close.xdsoft"), !0)
                  : void 0;
              })
              .on("blur.xdsoft", function () {
                I.trigger("close.xdsoft");
              });
        }),
        (a = function (t) {
          var i = t.data("xdsoft_datetimepicker");
          i &&
            (i.data("xdsoft_datetime", null),
            i.remove(),
            t.data("xdsoft_datetimepicker", null).off(".xdsoft"),
            e(k.contentWindow).off("resize.xdsoft"),
            e([k.contentWindow, k.ownerDocument.body]).off(
              "mousedown.xdsoft touchstart"
            ),
            t.unmousewheel && t.unmousewheel());
        }),
        e(k.ownerDocument)
          .off("keydown.xdsoftctrl keyup.xdsoftctrl")
          .off("keydown.xdsoftcmd keyup.xdsoftcmd")
          .on("keydown.xdsoftctrl", function (e) {
            e.keyCode === d && (T = !0);
          })
          .on("keyup.xdsoftctrl", function (e) {
            e.keyCode === d && (T = !1);
          })
          .on("keydown.xdsoftcmd", function (e) {
            91 === e.keyCode && !0;
          })
          .on("keyup.xdsoftcmd", function (e) {
            91 === e.keyCode && !1;
          }),
        this.each(function () {
          var t,
            s = e(this).data("xdsoft_datetimepicker");
          if (s) {
            if ("string" === e.type(n))
              switch (n) {
                case "show":
                  e(this).select().focus(), s.trigger("open.xdsoft");
                  break;
                case "hide":
                  s.trigger("close.xdsoft");
                  break;
                case "toggle":
                  s.trigger("toggle.xdsoft");
                  break;
                case "destroy":
                  a(e(this));
                  break;
                case "reset":
                  (this.value = this.defaultValue),
                    (this.value &&
                      s
                        .data("xdsoft_datetime")
                        .isValidDate(i.parseDate(this.value, k.format))) ||
                      s.data("changed", !1),
                    s.data("xdsoft_datetime").setCurrentTime(this.value);
                  break;
                case "validate":
                  s.data("input").trigger("blur.xdsoft");
                  break;
                default:
                  s[n] && e.isFunction(s[n]) && (r = s[n](o));
              }
            else s.setOptions(n);
            return 0;
          }
          "string" !== e.type(n) &&
            (!k.lazyInit || k.open || k.inline
              ? l(e(this))
              : (t = e(this)).on(
                  "open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart",
                  function e() {
                    t.is(":disabled") ||
                      t.data("xdsoft_datetimepicker") ||
                      (clearTimeout(L),
                      (L = setTimeout(function () {
                        t.data("xdsoft_datetimepicker") || l(t),
                          t
                            .off(
                              "open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart",
                              e
                            )
                            .trigger("open.xdsoft");
                      }, 100)));
                  }
                ));
        }),
        r
      );
    }),
    (e.fn.datetimepicker.defaults = t);
};
!(function (e) {
  "function" == typeof define && define.amd
    ? define(["jquery", "jquery-mousewheel"], e)
    : "object" == typeof exports
    ? (module.exports = e(require("jquery")))
    : e(jQuery);
})(datetimepickerFactory),
  /*!
