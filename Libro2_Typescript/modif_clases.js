var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var FooBase = /** @class */ (function () {
    function FooBase() {
    }
    return FooBase;
}());
//EFECTOS EN UNA INSTANCIA
var foo = new FooBase();
foo.x;
// error : private foo.y;
// error : protected foo.z;
//EFECTOS EN UNA CLASE HIJA
var FooChild = /** @class */ (function (_super) {
    __extends(FooChild, _super);
    function FooChild() {
        var _this = _super.call(this) || this;
        _this.x; //ok
        // error : private this.y;
        _this.z; //ok
        return _this;
    }
    return FooChild;
}(FooBase));
