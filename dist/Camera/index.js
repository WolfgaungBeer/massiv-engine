'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _glMatrix = require('gl-matrix');

var _Object3D2 = require('../Object3D');

var _Object3D3 = _interopRequireDefault(_Object3D2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Camera = function (_Object3D) {
    _inherits(Camera, _Object3D);

    function Camera() {
        _classCallCheck(this, Camera);

        var _this = _possibleConstructorReturn(this, (Camera.__proto__ || Object.getPrototypeOf(Camera)).call(this));

        _this.type = 'Camera';
        _this.upVector = _glMatrix.vec3.fromValues(0, 1, 0);
        _this.viewMatrix = _glMatrix.mat4.create();
        _this.projectionMatrix = _glMatrix.mat4.create();
        return _this;
    }

    _createClass(Camera, [{
        key: 'getUpVector',
        value: function getUpVector() {
            return this.upVector;
        }
    }, {
        key: 'setUpVector',
        value: function setUpVector(x, y, z) {
            this.upVector = _glMatrix.vec3.fromValues(x, y, z);
        }
    }, {
        key: 'getViewMatrix',
        value: function getViewMatrix() {
            return this.viewMatrix;
        }
    }, {
        key: 'setViewMatrix',
        value: function setViewMatrix(viewMatrix) {
            this.viewMatrix = viewMatrix;
        }
    }, {
        key: 'getProjectionMatrix',
        value: function getProjectionMatrix() {
            return this.projectionMatrix;
        }
    }, {
        key: 'setProjectionMatrix',
        value: function setProjectionMatrix(projectionMatrix) {
            this.projectionMatrix = projectionMatrix;
        }
    }, {
        key: 'lookAt',
        value: function lookAt(x, y, z) {
            var position = this.getPosition();
            this.viewMatrix = _glMatrix.mat4.lookAt(_glMatrix.mat4.create(), position, _glMatrix.vec3.fromValues(x, y, z), this.upVector);
        }
    }]);

    return Camera;
}(_Object3D3.default);

exports.default = Camera;