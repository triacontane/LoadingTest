//=============================================================================
// ForceMenu.js
// ----------------------------------------------------------------------------
// Copyright (c) 2015 Triacontane
// This software is released under the MIT License.
// http://opensource.org/licenses/mit-license.php
// ----------------------------------------------------------------------------
// Version
// 1.0.0 2015/12/03 初版
// ----------------------------------------------------------------------------
// [Blog]   : http://triacontane.blogspot.jp/
// [Twitter]: https://twitter.com/triacontane/
// [GitHub] : https://github.com/triacontane/
//=============================================================================

/*:
 * @plugindesc 強制メニュー表示
 * @author トリアコンタン
 *
 * @help 強制的にメインメニューを連続開閉します。
 * 負荷テストを行うための特別なプラグインです。ゲームには使用できません。
 *
 * このプラグインにはプラグインコマンドはありません。
 *
 * 利用規約：
 *  作者に無断で改変、再配布が可能で、利用形態（商用、18禁利用等）
 *  についても制限はありません。
 *  このプラグインはもうあなたのものです。
 */
(function () {
    var i = 0;
    var _Scene_Map_isMenuCalled = Scene_Map.prototype.isMenuCalled;
    Scene_Map.prototype.isMenuCalled = function() {
        if (i > 20) {
            _Scene_Map_isMenuCalled.apply(this, arguments);
            return;
        }
        document.title = 'メニュー表示:' + i++ + '回目';
        return true;
    };

    Window_MenuCommand.prototype.update = function() {
        this.callHandler('cancel');
    };
})();