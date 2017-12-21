/*:
 * @plugindesc This plugin allows you to get the color without calling function getPixel <RS_ChangeWindowTextColorSafely>
 * @author biud436
 *
 * @param windowList
 * @text Window List
 * @type note
 * @desc Refer to a help documentation
 * @default ""
 *
 * @help
 * In the plugin parameter called 'Window List', Include these note tags :
 *
 *    <Window_ItemList normalColor #ff0000>
 *    <Window_SkillList normalColor #ffff00>
 *
 * =============================================================================
 * Change Log
 * =============================================================================
 * 2017.12.21 - First Release.
 * 2017.12.21 - Added notetags.
 */

var Imported = Imported || {};
Imported.RS_ChangeWindowTextColorSafely = true;

var RS = RS || {};
RS.Utils = RS.Utils || {};

(function () {

  var parameters = $plugins.filter(function (i) {
    return i.description.contains('<RS_ChangeWindowTextColorSafely>');
  });

  parameters = (parameters.length > 0) && parameters[0].parameters;

  RS.Utils.jsonParse = function (str) {
    var retData = JSON.parse(str, function (k, v) {
      try { return RS.Utils.jsonParse(v); } catch (e) { return v; }
    });
    return retData;
  };

  var defaultWindowClasses = RS.Utils.jsonParse(parameters['windowList']);

  Utils.changeWindowTextColorSafely = function(NOTETAGS) {

      var clsName = "";
      var funcName = "";
      var color = "";
      var done = false;

      var notetags = NOTETAGS.split(/[\r\n]+/);

      notetags.forEach(function (note) {

        if(note.match(/<(.*)[ ](.*)[ ](.*)>/)) {

          clsName = String(RegExp.$1);
          funcName = String(RegExp.$2);
          color = String(RegExp.$3);
          done = true;

        }

        if(done) {

          var CLASS_NAME = window[clsName];
          var FUNC_NAME = funcName.slice(0);
          var COLOR_NAME = color.slice(0);

          if(typeof(CLASS_NAME) === 'function') {

            var prototypeName = CLASS_NAME.prototype[FUNC_NAME];

            if(typeof(prototypeName) === 'function') {
              CLASS_NAME.prototype[funcName] = function() { return COLOR_NAME; };
            }

          }

        }

      }, this);

  };

  Utils.changeWindowTextColorSafely(defaultWindowClasses);

})();
