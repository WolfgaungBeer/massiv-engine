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

var PerspectiveCamera = function (_Camera) {
    _inherits(PerspectiveCamera, _Camera);

    function PerspectiveCamera(fov, aspect, near, far) {
        _classCallCheck(this, PerspectiveCamera);

        var _this = _possibleConstructorReturn(this, (PerspectiveCamera.__proto__ || Object.getPrototypeOf(PerspectiveCamera)).call(this));

        _this.type = 'PerspectiveCamera';
        _this.fov = fov;
        _this.aspect = aspect;
        _this.near = near;
        _this.far = far;
        _this.updateProjectionMatrix(fov, aspect, near, far);
        return _this;
    }

    _createClass(PerspectiveCamera, [{
        key: 'updateProjectionMatrix',
        value: function updateProjectionMatrix(fov, aspect, near, far) {
            this.fov = fov;
            this.aspect = aspect;
            this.near = near;
            this.far = far;
            this.projectionMatrix = _glMatrix.mat4.perspective(_glMatrix.mat4.create(), fov, aspect, near, far);
        }
    }]);

    return PerspectiveCamera;
}(_Camera3.default);

exports.default = PerspectiveCamera;