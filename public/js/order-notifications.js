//
//
//
//
//
// FUNCIONAL CODE IS AT THE END OF THE FILE
// THIS IS BUNDLED FILE
// BROWSERIFY WAS USED VIA
// browserify public/js/order-notifications.js -o order-notifications3.js
//
//
//
(function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw ((a.code = "MODULE_NOT_FOUND"), a);
        }
        var p = (n[i] = { exports: {} });
        e[i][0].call(
          p.exports,
          function (r) {
            var n = e[i][1][r];
            return o(n || r);
          },
          p,
          p.exports,
          r,
          e,
          n,
          t
        );
      }
      return n[i].exports;
    }
    for (
      var u = "function" == typeof require && require, i = 0;
      i < t.length;
      i++
    )
      o(t[i]);
    return o;
  }
  return r;
})()(
  {
    1: [
      function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.default = getTimezoneOffsetInMilliseconds;

        /**
         * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
         * They usually appear for dates that denote time before the timezones were introduced
         * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
         * and GMT+01:00:00 after that date)
         *
         * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
         * which would lead to incorrect calculations.
         *
         * This function returns the timezone offset in milliseconds that takes seconds in account.
         */
        function getTimezoneOffsetInMilliseconds(date) {
          var utcDate = new Date(
            Date.UTC(
              date.getFullYear(),
              date.getMonth(),
              date.getDate(),
              date.getHours(),
              date.getMinutes(),
              date.getSeconds(),
              date.getMilliseconds()
            )
          );
          utcDate.setUTCFullYear(date.getFullYear());
          return date.getTime() - utcDate.getTime();
        }

        module.exports = exports.default;
      },
      {},
    ],
    2: [
      function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.default = requiredArgs;

        function requiredArgs(required, args) {
          if (args.length < required) {
            throw new TypeError(
              required +
                " argument" +
                (required > 1 ? "s" : "") +
                " required, but only " +
                args.length +
                " present"
            );
          }
        }

        module.exports = exports.default;
      },
      {},
    ],
    3: [
      function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.default = toInteger;

        function toInteger(dirtyNumber) {
          if (
            dirtyNumber === null ||
            dirtyNumber === true ||
            dirtyNumber === false
          ) {
            return NaN;
          }

          var number = Number(dirtyNumber);

          if (isNaN(number)) {
            return number;
          }

          return number < 0 ? Math.ceil(number) : Math.floor(number);
        }

        module.exports = exports.default;
      },
      {},
    ],
    4: [
      function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.secondsInYear =
          exports.secondsInWeek =
          exports.secondsInQuarter =
          exports.secondsInMonth =
          exports.secondsInMinute =
          exports.secondsInHour =
          exports.secondsInDay =
          exports.quartersInYear =
          exports.monthsInYear =
          exports.monthsInQuarter =
          exports.minutesInHour =
          exports.minTime =
          exports.millisecondsInSecond =
          exports.millisecondsInMinute =
          exports.millisecondsInHour =
          exports.maxTime =
          exports.daysInYear =
          exports.daysInWeek =
            void 0;

        /**
         * Days in 1 week.
         *
         * @name daysInWeek
         * @constant
         * @type {number}
         * @default
         */
        var daysInWeek = 7;
        /**
         * Days in 1 year
         * One years equals 365.2425 days according to the formula:
         *
         * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
         * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
         *
         * @name daysInYear
         * @constant
         * @type {number}
         * @default
         */

        exports.daysInWeek = daysInWeek;
        var daysInYear = 365.2425;
        /**
         * Maximum allowed time.
         *
         * @name maxTime
         * @constant
         * @type {number}
         * @default
         */

        exports.daysInYear = daysInYear;
        var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
        /**
         * Milliseconds in 1 minute
         *
         * @name millisecondsInMinute
         * @constant
         * @type {number}
         * @default
         */

        exports.maxTime = maxTime;
        var millisecondsInMinute = 60000;
        /**
         * Milliseconds in 1 hour
         *
         * @name millisecondsInHour
         * @constant
         * @type {number}
         * @default
         */

        exports.millisecondsInMinute = millisecondsInMinute;
        var millisecondsInHour = 3600000;
        /**
         * Milliseconds in 1 second
         *
         * @name millisecondsInSecond
         * @constant
         * @type {number}
         * @default
         */

        exports.millisecondsInHour = millisecondsInHour;
        var millisecondsInSecond = 1000;
        /**
         * Minimum allowed time.
         *
         * @name minTime
         * @constant
         * @type {number}
         * @default
         */

        exports.millisecondsInSecond = millisecondsInSecond;
        var minTime = -maxTime;
        /**
         * Minutes in 1 hour
         *
         * @name minutesInHour
         * @constant
         * @type {number}
         * @default
         */

        exports.minTime = minTime;
        var minutesInHour = 60;
        /**
         * Months in 1 quarter
         *
         * @name monthsInQuarter
         * @constant
         * @type {number}
         * @default
         */

        exports.minutesInHour = minutesInHour;
        var monthsInQuarter = 3;
        /**
         * Months in 1 year
         *
         * @name monthsInYear
         * @constant
         * @type {number}
         * @default
         */

        exports.monthsInQuarter = monthsInQuarter;
        var monthsInYear = 12;
        /**
         * Quarters in 1 year
         *
         * @name quartersInYear
         * @constant
         * @type {number}
         * @default
         */

        exports.monthsInYear = monthsInYear;
        var quartersInYear = 4;
        /**
         * Seconds in 1 hour
         *
         * @name secondsInHour
         * @constant
         * @type {number}
         * @default
         */

        exports.quartersInYear = quartersInYear;
        var secondsInHour = 3600;
        /**
         * Seconds in 1 minute
         *
         * @name secondsInMinute
         * @constant
         * @type {number}
         * @default
         */

        exports.secondsInHour = secondsInHour;
        var secondsInMinute = 60;
        /**
         * Seconds in 1 day
         *
         * @name secondsInDay
         * @constant
         * @type {number}
         * @default
         */

        exports.secondsInMinute = secondsInMinute;
        var secondsInDay = secondsInHour * 24;
        /**
         * Seconds in 1 week
         *
         * @name secondsInWeek
         * @constant
         * @type {number}
         * @default
         */

        exports.secondsInDay = secondsInDay;
        var secondsInWeek = secondsInDay * 7;
        /**
         * Seconds in 1 year
         *
         * @name secondsInYear
         * @constant
         * @type {number}
         * @default
         */

        exports.secondsInWeek = secondsInWeek;
        var secondsInYear = secondsInDay * daysInYear;
        /**
         * Seconds in 1 month
         *
         * @name secondsInMonth
         * @constant
         * @type {number}
         * @default
         */

        exports.secondsInYear = secondsInYear;
        var secondsInMonth = secondsInYear / 12;
        /**
         * Seconds in 1 quarter
         *
         * @name secondsInQuarter
         * @constant
         * @type {number}
         * @default
         */

        exports.secondsInMonth = secondsInMonth;
        var secondsInQuarter = secondsInMonth * 3;
        exports.secondsInQuarter = secondsInQuarter;
      },
      {},
    ],
    5: [
      function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.default = differenceInCalendarDays;

        var _index = _interopRequireDefault(
          require("../_lib/getTimezoneOffsetInMilliseconds/index.js")
        );

        var _index2 = _interopRequireDefault(require("../startOfDay/index.js"));

        var _index3 = _interopRequireDefault(
          require("../_lib/requiredArgs/index.js")
        );

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        var MILLISECONDS_IN_DAY = 86400000;
        /**
         * @name differenceInCalendarDays
         * @category Day Helpers
         * @summary Get the number of calendar days between the given dates.
         *
         * @description
         * Get the number of calendar days between the given dates. This means that the times are removed
         * from the dates and then the difference in days is calculated.
         *
         * @param {Date|Number} dateLeft - the later date
         * @param {Date|Number} dateRight - the earlier date
         * @returns {Number} the number of calendar days
         * @throws {TypeError} 2 arguments required
         *
         * @example
         * // How many calendar days are between
         * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
         * const result = differenceInCalendarDays(
         *   new Date(2012, 6, 2, 0, 0),
         *   new Date(2011, 6, 2, 23, 0)
         * )
         * //=> 366
         * // How many calendar days are between
         * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
         * const result = differenceInCalendarDays(
         *   new Date(2011, 6, 3, 0, 1),
         *   new Date(2011, 6, 2, 23, 59)
         * )
         * //=> 1
         */

        function differenceInCalendarDays(dirtyDateLeft, dirtyDateRight) {
          (0, _index3.default)(2, arguments);
          var startOfDayLeft = (0, _index2.default)(dirtyDateLeft);
          var startOfDayRight = (0, _index2.default)(dirtyDateRight);
          var timestampLeft =
            startOfDayLeft.getTime() - (0, _index.default)(startOfDayLeft);
          var timestampRight =
            startOfDayRight.getTime() - (0, _index.default)(startOfDayRight); // Round the number of days to the nearest integer
          // because the number of milliseconds in a day is not constant
          // (e.g. it's different in the day of the daylight saving time clock shift)

          return Math.round(
            (timestampLeft - timestampRight) / MILLISECONDS_IN_DAY
          );
        }

        module.exports = exports.default;
      },
      {
        "../_lib/getTimezoneOffsetInMilliseconds/index.js": 1,
        "../_lib/requiredArgs/index.js": 2,
        "../startOfDay/index.js": 8,
      },
    ],
    6: [
      function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.default = differenceInDays;

        var _index = _interopRequireDefault(require("../toDate/index.js"));

        var _index2 = _interopRequireDefault(
          require("../differenceInCalendarDays/index.js")
        );

        var _index3 = _interopRequireDefault(
          require("../_lib/requiredArgs/index.js")
        );

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        // Like `compareAsc` but uses local time not UTC, which is needed
        // for accurate equality comparisons of UTC timestamps that end up
        // having the same representation in local time, e.g. one hour before
        // DST ends vs. the instant that DST ends.
        function compareLocalAsc(dateLeft, dateRight) {
          var diff =
            dateLeft.getFullYear() - dateRight.getFullYear() ||
            dateLeft.getMonth() - dateRight.getMonth() ||
            dateLeft.getDate() - dateRight.getDate() ||
            dateLeft.getHours() - dateRight.getHours() ||
            dateLeft.getMinutes() - dateRight.getMinutes() ||
            dateLeft.getSeconds() - dateRight.getSeconds() ||
            dateLeft.getMilliseconds() - dateRight.getMilliseconds();

          if (diff < 0) {
            return -1;
          } else if (diff > 0) {
            return 1; // Return 0 if diff is 0; return NaN if diff is NaN
          } else {
            return diff;
          }
        }
        /**
 * @name differenceInDays
 * @category Day Helpers
 * @summary Get the number of full days between the given dates.
 *
 * @description
 * Get the number of full day periods between two dates. Fractional days are
 * truncated towards zero.
 *
 * One "full day" is the distance between a local time in one day to the same
 * local time on the next or previous day. A full day can sometimes be less than
 * or more than 24 hours if a daylight savings change happens between two dates.
 *
 * To ignore DST and only measure exact 24-hour periods, use this instead:
 * `Math.floor(differenceInHours(dateLeft, dateRight)/24)|0`.
 *
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of full days according to the local timezone
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 365
 * // How many full days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 0
 * // How many full days are between
 * // 1 March 2020 0:00 and 1 June 2020 0:00 ?
 * // Note: because local time is used, the
 * // result will always be 92 days, even in
 * // time zones where DST starts and the
 * // period has only 92*24-1 hours.
 * const result = differenceInDays(
 *   new Date(2020, 5, 1),
 *   new Date(2020, 2, 1)
 * )
//=> 92
 */

        function differenceInDays(dirtyDateLeft, dirtyDateRight) {
          (0, _index3.default)(2, arguments);
          var dateLeft = (0, _index.default)(dirtyDateLeft);
          var dateRight = (0, _index.default)(dirtyDateRight);
          var sign = compareLocalAsc(dateLeft, dateRight);
          var difference = Math.abs((0, _index2.default)(dateLeft, dateRight));
          dateLeft.setDate(dateLeft.getDate() - sign * difference); // Math.abs(diff in full days - diff in calendar days) === 1 if last calendar day is not full
          // If so, result must be decreased by 1 in absolute value

          var isLastDayNotFull = Number(
            compareLocalAsc(dateLeft, dateRight) === -sign
          );
          var result = sign * (difference - isLastDayNotFull); // Prevent negative zero

          return result === 0 ? 0 : result;
        }

        module.exports = exports.default;
      },
      {
        "../_lib/requiredArgs/index.js": 2,
        "../differenceInCalendarDays/index.js": 5,
        "../toDate/index.js": 9,
      },
    ],
    7: [
      function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.default = parseISO;

        var _index = require("../constants/index.js");

        var _index2 = _interopRequireDefault(
          require("../_lib/requiredArgs/index.js")
        );

        var _index3 = _interopRequireDefault(
          require("../_lib/toInteger/index.js")
        );

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        /**
         * @name parseISO
         * @category Common Helpers
         * @summary Parse ISO string
         *
         * @description
         * Parse the given string in ISO 8601 format and return an instance of Date.
         *
         * Function accepts complete ISO 8601 formats as well as partial implementations.
         * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
         *
         * If the argument isn't a string, the function cannot parse the string or
         * the values are invalid, it returns Invalid Date.
         *
         * @param {String} argument - the value to convert
         * @param {Object} [options] - an object with options.
         * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
         * @returns {Date} the parsed date in the local time zone
         * @throws {TypeError} 1 argument required
         * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
         *
         * @example
         * // Convert string '2014-02-11T11:30:30' to date:
         * const result = parseISO('2014-02-11T11:30:30')
         * //=> Tue Feb 11 2014 11:30:30
         *
         * @example
         * // Convert string '+02014101' to date,
         * // if the additional number of digits in the extended year format is 1:
         * const result = parseISO('+02014101', { additionalDigits: 1 })
         * //=> Fri Apr 11 2014 00:00:00
         */
        function parseISO(argument, options) {
          var _options$additionalDi;

          (0, _index2.default)(1, arguments);
          var additionalDigits = (0, _index3.default)(
            (_options$additionalDi =
              options === null || options === void 0
                ? void 0
                : options.additionalDigits) !== null &&
              _options$additionalDi !== void 0
              ? _options$additionalDi
              : 2
          );

          if (
            additionalDigits !== 2 &&
            additionalDigits !== 1 &&
            additionalDigits !== 0
          ) {
            throw new RangeError("additionalDigits must be 0, 1 or 2");
          }

          if (
            !(
              typeof argument === "string" ||
              Object.prototype.toString.call(argument) === "[object String]"
            )
          ) {
            return new Date(NaN);
          }

          var dateStrings = splitDateString(argument);
          var date;

          if (dateStrings.date) {
            var parseYearResult = parseYear(dateStrings.date, additionalDigits);
            date = parseDate(
              parseYearResult.restDateString,
              parseYearResult.year
            );
          }

          if (!date || isNaN(date.getTime())) {
            return new Date(NaN);
          }

          var timestamp = date.getTime();
          var time = 0;
          var offset;

          if (dateStrings.time) {
            time = parseTime(dateStrings.time);

            if (isNaN(time)) {
              return new Date(NaN);
            }
          }

          if (dateStrings.timezone) {
            offset = parseTimezone(dateStrings.timezone);

            if (isNaN(offset)) {
              return new Date(NaN);
            }
          } else {
            var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone
            // but we need it to be parsed in our timezone
            // so we use utc values to build date in our timezone.
            // Year values from 0 to 99 map to the years 1900 to 1999
            // so set year explicitly with setFullYear.

            var result = new Date(0);
            result.setFullYear(
              dirtyDate.getUTCFullYear(),
              dirtyDate.getUTCMonth(),
              dirtyDate.getUTCDate()
            );
            result.setHours(
              dirtyDate.getUTCHours(),
              dirtyDate.getUTCMinutes(),
              dirtyDate.getUTCSeconds(),
              dirtyDate.getUTCMilliseconds()
            );
            return result;
          }

          return new Date(timestamp + time + offset);
        }

        var patterns = {
          dateTimeDelimiter: /[T ]/,
          timeZoneDelimiter: /[Z ]/i,
          timezone: /([Z+-].*)$/,
        };
        var dateRegex =
          /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
        var timeRegex =
          /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
        var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;

        function splitDateString(dateString) {
          var dateStrings = {};
          var array = dateString.split(patterns.dateTimeDelimiter);
          var timeString; // The regex match should only return at maximum two array elements.
          // [date], [time], or [date, time].

          if (array.length > 2) {
            return dateStrings;
          }

          if (/:/.test(array[0])) {
            timeString = array[0];
          } else {
            dateStrings.date = array[0];
            timeString = array[1];

            if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
              dateStrings.date = dateString.split(
                patterns.timeZoneDelimiter
              )[0];
              timeString = dateString.substr(
                dateStrings.date.length,
                dateString.length
              );
            }
          }

          if (timeString) {
            var token = patterns.timezone.exec(timeString);

            if (token) {
              dateStrings.time = timeString.replace(token[1], "");
              dateStrings.timezone = token[1];
            } else {
              dateStrings.time = timeString;
            }
          }

          return dateStrings;
        }

        function parseYear(dateString, additionalDigits) {
          var regex = new RegExp(
            "^(?:(\\d{4}|[+-]\\d{" +
              (4 + additionalDigits) +
              "})|(\\d{2}|[+-]\\d{" +
              (2 + additionalDigits) +
              "})$)"
          );
          var captures = dateString.match(regex); // Invalid ISO-formatted year

          if (!captures)
            return {
              year: NaN,
              restDateString: "",
            };
          var year = captures[1] ? parseInt(captures[1]) : null;
          var century = captures[2] ? parseInt(captures[2]) : null; // either year or century is null, not both

          return {
            year: century === null ? year : century * 100,
            restDateString: dateString.slice(
              (captures[1] || captures[2]).length
            ),
          };
        }

        function parseDate(dateString, year) {
          // Invalid ISO-formatted year
          if (year === null) return new Date(NaN);
          var captures = dateString.match(dateRegex); // Invalid ISO-formatted string

          if (!captures) return new Date(NaN);
          var isWeekDate = !!captures[4];
          var dayOfYear = parseDateUnit(captures[1]);
          var month = parseDateUnit(captures[2]) - 1;
          var day = parseDateUnit(captures[3]);
          var week = parseDateUnit(captures[4]);
          var dayOfWeek = parseDateUnit(captures[5]) - 1;

          if (isWeekDate) {
            if (!validateWeekDate(year, week, dayOfWeek)) {
              return new Date(NaN);
            }

            return dayOfISOWeekYear(year, week, dayOfWeek);
          } else {
            var date = new Date(0);

            if (
              !validateDate(year, month, day) ||
              !validateDayOfYearDate(year, dayOfYear)
            ) {
              return new Date(NaN);
            }

            date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
            return date;
          }
        }

        function parseDateUnit(value) {
          return value ? parseInt(value) : 1;
        }

        function parseTime(timeString) {
          var captures = timeString.match(timeRegex);
          if (!captures) return NaN; // Invalid ISO-formatted time

          var hours = parseTimeUnit(captures[1]);
          var minutes = parseTimeUnit(captures[2]);
          var seconds = parseTimeUnit(captures[3]);

          if (!validateTime(hours, minutes, seconds)) {
            return NaN;
          }

          return (
            hours * _index.millisecondsInHour +
            minutes * _index.millisecondsInMinute +
            seconds * 1000
          );
        }

        function parseTimeUnit(value) {
          return (value && parseFloat(value.replace(",", "."))) || 0;
        }

        function parseTimezone(timezoneString) {
          if (timezoneString === "Z") return 0;
          var captures = timezoneString.match(timezoneRegex);
          if (!captures) return 0;
          var sign = captures[1] === "+" ? -1 : 1;
          var hours = parseInt(captures[2]);
          var minutes = (captures[3] && parseInt(captures[3])) || 0;

          if (!validateTimezone(hours, minutes)) {
            return NaN;
          }

          return (
            sign *
            (hours * _index.millisecondsInHour +
              minutes * _index.millisecondsInMinute)
          );
        }

        function dayOfISOWeekYear(isoWeekYear, week, day) {
          var date = new Date(0);
          date.setUTCFullYear(isoWeekYear, 0, 4);
          var fourthOfJanuaryDay = date.getUTCDay() || 7;
          var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
          date.setUTCDate(date.getUTCDate() + diff);
          return date;
        } // Validation functions
        // February is null to handle the leap year (using ||)

        var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        function isLeapYearIndex(year) {
          return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
        }

        function validateDate(year, month, date) {
          return (
            month >= 0 &&
            month <= 11 &&
            date >= 1 &&
            date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28))
          );
        }

        function validateDayOfYearDate(year, dayOfYear) {
          return (
            dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365)
          );
        }

        function validateWeekDate(_year, week, day) {
          return week >= 1 && week <= 53 && day >= 0 && day <= 6;
        }

        function validateTime(hours, minutes, seconds) {
          if (hours === 24) {
            return minutes === 0 && seconds === 0;
          }

          return (
            seconds >= 0 &&
            seconds < 60 &&
            minutes >= 0 &&
            minutes < 60 &&
            hours >= 0 &&
            hours < 25
          );
        }

        function validateTimezone(_hours, minutes) {
          return minutes >= 0 && minutes <= 59;
        }

        module.exports = exports.default;
      },
      {
        "../_lib/requiredArgs/index.js": 2,
        "../_lib/toInteger/index.js": 3,
        "../constants/index.js": 4,
      },
    ],
    8: [
      function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.default = startOfDay;

        var _index = _interopRequireDefault(require("../toDate/index.js"));

        var _index2 = _interopRequireDefault(
          require("../_lib/requiredArgs/index.js")
        );

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        /**
         * @name startOfDay
         * @category Day Helpers
         * @summary Return the start of a day for the given date.
         *
         * @description
         * Return the start of a day for the given date.
         * The result will be in the local timezone.
         *
         * @param {Date|Number} date - the original date
         * @returns {Date} the start of a day
         * @throws {TypeError} 1 argument required
         *
         * @example
         * // The start of a day for 2 September 2014 11:55:00:
         * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
         * //=> Tue Sep 02 2014 00:00:00
         */
        function startOfDay(dirtyDate) {
          (0, _index2.default)(1, arguments);
          var date = (0, _index.default)(dirtyDate);
          date.setHours(0, 0, 0, 0);
          return date;
        }

        module.exports = exports.default;
      },
      { "../_lib/requiredArgs/index.js": 2, "../toDate/index.js": 9 },
    ],
    9: [
      function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.default = toDate;

        var _index = _interopRequireDefault(
          require("../_lib/requiredArgs/index.js")
        );

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _typeof(obj) {
          "@babel/helpers - typeof";
          if (
            typeof Symbol === "function" &&
            typeof Symbol.iterator === "symbol"
          ) {
            _typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj &&
                typeof Symbol === "function" &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? "symbol"
                : typeof obj;
            };
          }
          return _typeof(obj);
        }

        /**
         * @name toDate
         * @category Common Helpers
         * @summary Convert the given argument to an instance of Date.
         *
         * @description
         * Convert the given argument to an instance of Date.
         *
         * If the argument is an instance of Date, the function returns its clone.
         *
         * If the argument is a number, it is treated as a timestamp.
         *
         * If the argument is none of the above, the function returns Invalid Date.
         *
         * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
         *
         * @param {Date|Number} argument - the value to convert
         * @returns {Date} the parsed date in the local time zone
         * @throws {TypeError} 1 argument required
         *
         * @example
         * // Clone the date:
         * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
         * //=> Tue Feb 11 2014 11:30:30
         *
         * @example
         * // Convert the timestamp to date:
         * const result = toDate(1392098430000)
         * //=> Tue Feb 11 2014 11:30:30
         */
        function toDate(argument) {
          (0, _index.default)(1, arguments);
          var argStr = Object.prototype.toString.call(argument); // Clone the date

          if (
            argument instanceof Date ||
            (_typeof(argument) === "object" && argStr === "[object Date]")
          ) {
            // Prevent the date to lose the milliseconds when passed to new Date() in IE10
            return new Date(argument.getTime());
          } else if (
            typeof argument === "number" ||
            argStr === "[object Number]"
          ) {
            return new Date(argument);
          } else {
            if (
              (typeof argument === "string" || argStr === "[object String]") &&
              typeof console !== "undefined"
            ) {
              // eslint-disable-next-line no-console
              console.warn(
                "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"
              ); // eslint-disable-next-line no-console

              console.warn(new Error().stack);
            }

            return new Date(NaN);
          }
        }

        module.exports = exports.default;
      },
      { "../_lib/requiredArgs/index.js": 2 },
    ],
    10: [
      function (require, module, exports) {
        let parserISO = require("date-fns/parseISO");
        let differenceInDays = require("date-fns/differenceInDays");

        // ===============================================
        // ============ COUNT (URGENT) ORDERS ============
        // ===============================================

        async function getListOfOrders() {
          try {
            const response = await fetch(`/api/getListOfOrders`);
            const data = await response.json();
            return data;
          } catch (error) {
            throw error;
          }
        }

        //Load orders from db
        addEventListener("load", countUrgentOrders);

        async function countUrgentOrders() {
          let allOrders = await getListOfOrders();
          //Loop through orders and check if is Done and then if urgent
          urgentOrders = 0;
          activeOrders = 0;

          //Get all table rows first id elements which hold data-dbid attribute
          const allRowsFirstChildren = Array.from(
            document.querySelectorAll("table tr td:first-child label")
          );

          for (let order of allOrders) {
            if (order.status === "Done" || order.status === "Client called") {
              continue;
            } else if (
              //If current date compared to dueDate is less than 2 days then add counter to urgent and total
              differenceInDays(new Date(parserISO(order.dueDate)), new Date()) <
              2
            ) {
              for (item of allRowsFirstChildren) {
                if (item.dataset.dbid === order._id) {
                  const fireIcon = document.createElement("i");
                  fireIcon.setAttribute(
                    "class",
                    "fa-solid fa-fire text-xl grow-[1] text-center "
                  );
                  item.parentElement.classList.add(
                    "flex",
                    "items-center",
                    "border-none"
                  );
                  item.parentElement.insertBefore(fireIcon, item);
                }
              }
              // allRowsFirstChildren.map(order._id === )
              urgentOrders += 1;
              activeOrders += 1;
            } else {
              activeOrders += 1;
            }
          }
          document.querySelector(
            "#redOrdersNumber"
          ).innerHTML = `${urgentOrders} work orders(s)`;
          document.querySelector(
            "#greenOrdersNumber"
          ).innerHTML = `${activeOrders} work orders(s)`;
        }
      },
      { "date-fns/differenceInDays": 6, "date-fns/parseISO": 7 },
    ],
  },
  {},
  [10]
);
