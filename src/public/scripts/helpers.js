var format = require('date-format');

var register = function(Handlebars) {
    var helpers = {
      // all heapers in here
      dateFormat: function(date, formatString) {
        return format(formatString, date);
      },

      ifEqual: function(arg1, arg2, options) {
        return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
      },

      multi: function(arg1, arg2) {
        return arg1*arg2
      },

      count: function(array) {
        try {
          return array.length
        }
        catch (err) {
          return 0
        }
      },

      averageRating: function(reviewArray) {
        try {
          let total = 0;
          reviewArray.forEach((review) => {
            total += Number(review.rating);
          })

          return Math.round(total/reviewArray.length*2)/2*10;
        }
        catch (err) {
          return 0
        }
      },

      humanFileSize: function (bytes, dp=1) {
        const thresh = 1024;
      
        if (Math.abs(bytes) < thresh) {
          return bytes + ' B';
        }
      
        const units = ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
        let u = -1;
        const r = 10**dp;
      
        do {
          bytes /= thresh;
          ++u;
        } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);
      
      
        return bytes.toFixed(0) + ' ' + units[u];
      }
    };
  
    if (Handlebars && typeof Handlebars.registerHelper === "function") {
      // register helpers
      for (var prop in helpers) {
          Handlebars.registerHelper(prop, helpers[prop]);
      }
    } else {
        // just return helpers object if we can't register helpers here
        return helpers;
    }
  
  };
  
  module.exports.register = register;
  module.exports.helpers = register(null);   