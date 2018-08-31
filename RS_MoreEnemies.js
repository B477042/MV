/*:
 * @plugindesc <RS_MoreEnemies>
 * @author biud436
 * 
 * @param Troop Settings
 * @type struct<Troop>[]
 * @desc Add the more enemies settings as you want!
 * @default []
 * 
 * @help
 * ======================================================
 * Change Log
 * ======================================================
 * 2018.08.31 (v1.0.0) - First Release.
 * 2018.08.31 (v1.0.1) : 
 * - Now this plugin will be included the struct named Enemy Reposition in the plugin parameter called Troop Settings.
 */
/*~struct~Troop:
 * 
 * @param troopId
 * @type troop
 * @min 1
 * @desc Specify troop's ID.
 * @default 1
 * 
 * @param moreEnemies
 * @type struct<Enemy>[]
 * @desc Add a new enemy in their troop and set up the position.
 * @default ["{\"enemyId\":\"1\",\"x\":\"300\",\"y\":\"200\",\"hidden\":\"false\"}"]
 * 
 * @param enemyReposition
 * @type struct<EnemyReposition>
 * @desc if you need to set up enemies' location automatically? it is here.
 * @default {"reposition":"false","width":"4","height":"6","x":"96 + (96 * x);","y":"Graphics.boxHeight / 3 + (96 * y);"}
 * 
 */
 /*~struct~Enemy:
  *
  * @param enemyId
  * @text enemyId
  * @type enemy
  * @desc Specify the ID for enemy.
  * @default 1
  * 
  * @param x
  * @text x
  * @type number
  * @min 0
  * @desc Specify the screen x position for enemy
  * @default 300
  *
  * @param y
  * @text y
  * @type number
  * @min 0
  * @desc Specify the screen y position for enemy
  * @default 200
  * 
  * @param hidden
  * @type boolean
  * @desc Visible or hidden settings. this sets up as the hiding state basically. This state can be changed later
  * @default false
  * @on true
  * @off false
  * 
  */
  /*~struct~EnemyReposition:
  *
  * @param reposition
  * @type boolean
  * @desc if you are added a lot of monsters to your game? to use this, it could set the location automatically.
  * @default false
  * @on true
  * @off false
  * 
  * @param width
  * @type number
  * @desc The field is represented by a two-dimensional array. I used a double loop to set its location in the entries.
  * @default 4
  * @min 3
  * 
  * @param height
  * @type number
  * @desc The field is represented by a two-dimensional array. I used a double loop to set its location in the entries.
  * @default 6
  * @min 3
  * 
  * @param x
  * @desc make it possible for the game to place enemies' x position when initializing the combat.
  * @default 96 + (96 * x);
  * 
  * @param y
  * @desc make it possible for the game to place enemies' y position when initializing the combat.
  * @default Graphics.boxHeight / 3 + (96 * y);
  * 
  */ 
/*:ko
 * @plugindesc <RS_MoreEnemies>
 * @author biud436
 * 
 * @param Troop Settings
 * @text 적 그룹 설정
 * @type struct<Troop>[]
 * @desc 적 그룹을 설정하십시오.
 * @default []
 *
 * @help
 * ======================================================
 * Change Log
 * ======================================================
 * 2018.08.31 (v1.0.0) - First Release.
 * 2018.08.31 (v1.0.1) - 적 그룹 매개변수 안에 위치 재설정 기능이 포함되게 수정하였습니다.
 */
/*~struct~Troop:ko
 * 
 * @param troopId
 * @text 적 그룹 ID
 * @type troop
 * @min 1
 * @desc 적 군단(적 그룹)의 ID 값을 선택하십시오.
 * @default 1
 * 
 * @param moreEnemies
 * @text 새로운 에너미 생성
 * @type struct<Enemy>[]
 * @desc 새로운 적을 생성하십시오.
 * @default ["{\"enemyId\":\"1\",\"x\":\"300\",\"y\":\"200\",\"hidden\":\"false\"}"]
 * 
 * @param enemyReposition
 * @text 에너미 위치 설정
 * @type struct<EnemyReposition>
 * @desc 에너미의 위치를 바둑판 형식으로 재정렬합니다.
 * @default {"reposition":"false","width":"4","height":"6","x":"96 + (96 * x);","y":"Graphics.boxHeight / 3 + (96 * y);"}
 * 
 */
 /*~struct~Enemy:ko
  *
  * @param enemyId
  * @text 에너미 ID
  * @text enemyId
  * @type enemy
  * @desc ID 값을 설정합니다
  * @default 1
  * 
  * @param x
  * @text x
  * @type number
  * @min 0
  * @desc x좌표를 설정합니다.
  * @default 300
  *
  * @param y
  * @text y
  * @type number
  * @min 0
  * @desc y좌표를 설정합니다.
  * @default 200
  * 
  * @param hidden
  * @text 숨김 여부
  * @type boolean
  * @desc 숨어있다가 중간에 나타날 지 여부를 설정합니다.
  * @default false
  * @on 숨긴다
  * @off 표시한다
  * 
  */
  /*~struct~EnemyReposition:ko
  *
  * @param reposition
  * @text 위치 재설정 여부
  * @type boolean
  * @desc 위치를 바둑판으로 재설정하는 기능을 사용하시겠습니까? (기본값 = 사용하지 않는다)
  * @default false
  * @on 사용한다.
  * @off 사용하지 않는다.
  * 
  * @param width
  * @text 폭
  * @type number
  * @desc 바둑판 배열 계산에 필요한 폭 값 (바둑판의 폭). 이중 루프를 사용하여 배치합니다.
  * @default 4
  * @min 3
  * 
  * @param height
  * @text 높이
  * @type number
  * @desc 바둑판 배열 계산에 필요한 높이 값 (바둑판의 높이). 이중 루프를 사용하여 배치합니다.
  * @default 6
  * @min 3
  * 
  * @param x
  * @desc 좌표 계산식을 입력하세요. (x는 이중 루프로 구성한 2차원 셀에서의 인덱스 값입니다)
  * @default 96 + (96 * x);
  * 
  * @param y
  * @desc 좌표 계산식을 입력하세요. (y는 이중 루프로 구성한 2차원 셀에서의 인덱스 값입니다)
  * @default Graphics.boxHeight / 3 + (96 * y);
  * 
  */

var Imported = Imported || {};
Imported.RS_MoreEnemies = true;

var RS = RS || {};
RS.MoreEnemies = RS.MoreEnemies || {};

(function($) {

    "use strict";

    var parameters = $plugins.filter(function(i) {
        return i.description.contains('<RS_MoreEnemies>');
    });
    
    parameters = (parameters.length > 0) && parameters[0].parameters;


    $.jsonParse = function (str) {
        var retData = JSON.parse(str, function (k, v) {
          try { return $.jsonParse(v); } catch (e) { return v; }
        });
        return retData;
    };    

    var troopSettings;
    if(parameters["Troop Settings"] !== "") {
        troopSettings = $.jsonParse(parameters["Troop Settings"]);
    }

    $.createMoreEnemies = function() {
        troopSettings.forEach(function(settings) {
            var troopId = settings.troopId;
            var troop = $dataTroops && $dataTroops[troopId];
            if(troop) {
                settings.moreEnemies.forEach(function(event) {
                    if($dataTroops[troopId].members instanceof Array) {
                        $dataTroops[troopId].members.push(event);
                    }
                }, this);
            }
        }, this);
    };

    var alias_Spriteset_Battle_createEnemies = Spriteset_Battle.prototype.createEnemies;
    Spriteset_Battle.prototype.createEnemies = function() {
        alias_Spriteset_Battle_createEnemies.call(this);
        this.setPositionForEnemies();
    };

    Spriteset_Battle.prototype.setPositionForEnemies = function() {

        let troopId = $gameTroop._troopId;

        if(!troopSettings) return;

        // if there has troop settings?
        var enemyReposition = troopSettings.filter(function(settings) {
            return settings.troopId === $gameTroop._troopId;
        });
        
        if(Array.isArray(enemyReposition) && enemyReposition.length <=0) return;

        enemyReposition = enemyReposition[0].enemyReposition;

        // if the reposition is enabled?
        if(!enemyReposition.reposition) return;
        
        let id = 0;
        const WIDTH = enemyReposition.width || 4;
        const HEIGHT = enemyReposition.height || 6;

        for(let y = 0; y < HEIGHT; y++) {
            for(let x = 0; x < WIDTH; x++) {
                let mx = eval(enemyReposition.x) || (96 + (96 * x));
                let my = eval(enemyReposition.y) || (Graphics.boxHeight / 3 + (96 * y));
                if(this._enemySprites[id]) this._enemySprites[id].setHome(mx, my);
                id += 1;
            }
        }
    };

    var alias_Scene_Boot_start = Scene_Boot.prototype.start;
    Scene_Boot.prototype.start = function() {
        $.createMoreEnemies();        
        alias_Scene_Boot_start.call(this);
    };
  
})(RS.MoreEnemies);