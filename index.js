/**
 * Translates the given array into a formatted string
 *
 * @param  {Array} arr
 * @return {String}
 */
module.exports = {
  translate: function(arr) {
    return new Promise(function(resolve, reject) {
      var result = [];
      var start = null;
      var end = null;

      arr.forEach((item, key) => {
        if (arr[key+1] && arr[key+1] === item + 1) {
          if (!start) {
            start = item;
          }
        }
        else if (start && !end) {
          end = item;
          if (end === 2) {
            result.push(start, end);
          }
          else {
            result.push(start + '-' + end);
          }
          start = null;
          end = null;
        }
        else {
          result.push(item);
        }
      })

      resolve(result.join(','));
    })
  }
};