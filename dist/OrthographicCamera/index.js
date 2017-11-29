'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _glMatrix = require('gl-matrix');

var _Camera2 = require('../Camera');

var _Camera3 = _interopRequireDefault(_Camera2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrthographicCamera = function (_Camera) {
    _inherits(OrthographicCamera, _Camera);

    function OrthographicCamera(left, right, bottom, top, near, far) {
        _classCallCheck(this, OrthographicCamera);

        var _this = _possibleConstructorReturn(this, (OrthographicCamera.__proto__ || Object.getPrototypeOf(OrthographicCamera)).call(this));

        _this.type = 'OrthographicCamera';
        _this.left = left;
        _this.right = right;
        _this.bottom = bottom;
        _this.top = top;
        _this.near = near;
        _this.far = far;
        _this.updateProjectionMatrix(left, right, bottom, top, near, far);
        return _this;
    }

    _createClass(OrthographicCamera, [{
        key: 'updateProjectionMatrix',
        value: function updateProjectionMatrix(left, right, bottom, top, near, far) {
            this.left = left;
            this.right = right;
            this.bottom = bottom;
            this.top = top;
            this.near = near;
            this.far = far;
            this.projectionMatrix = _glMatrix.mat4.ortho(_glMatrix.mat4.create(), left, right, bottom, top, near, far);
        }
    }]);

    return OrthographicCamera;
}(_Camera3.default);

exports.default = OrthographicCamera;