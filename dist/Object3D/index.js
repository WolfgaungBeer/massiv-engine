'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _v = require('uuid/v4');

var _v2 = _interopRequireDefault(_v);

var _glMatrix = require('gl-matrix');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Object3D = function () {
    function Object3D() {
        _classCallCheck(this, Object3D);

        this.uuid = (0, _v2.default)();
        this.name = 'Object3D';
        this.type = 'Object3D';
        this.parent = undefined;
        this.children = [];
        this.position = _glMatrix.vec3.fromValues(0, 0, 0);
        this.scaling = _glMatrix.vec3.fromValues(1, 1, 1);
        this.quaternion = _glMatrix.quat.create();
        this.matrixTouched = false;
        this.matrixNeedsUpdate = false;
        this.modelMatrix = _glMatrix.mat4.create();
    }

    _createClass(Object3D, [{
        key: 'getUuid',
        value: function getUuid() {
            return this.uuid;
        }
    }, {
        key: 'getName',
        value: function getName() {
            return this.name;
        }
    }, {
        key: 'setName',
        value: function setName(name) {
            this.name = name;
        }
    }, {
        key: 'getType',
        value: function getType() {
            return this.type;
        }
    }, {
        key: 'setType',
        value: function setType(type) {
            this.type = type;
        }
    }, {
        key: 'getParent',
        value: function getParent() {
            return this.parent;
        }
    }, {
        key: 'setParent',
        value: function setParent(parent) {
            parent.children.push(this);
            this.parent = parent;
        }
    }, {
        key: 'getChildren',
        value: function getChildren() {
            return this.children;
        }
    }, {
        key: 'setChildren',
        value: function setChildren(children) {
            for (var i = 0; i < children.length; i++) {
                children[i].setParent(this);
            }
            this.children = children;
        }
    }, {
        key: 'getPosition',
        value: function getPosition() {
            return this.position;
        }
    }, {
        key: 'setPosition',
        value: function setPosition(x, y, z) {
            this.position = _glMatrix.vec3.fromValues(x, y, z);
            this.matrixTouched = true;
            this.matrixNeedsUpdate = true;
        }
    }, {
        key: 'getScale',
        value: function getScale() {
            return this.scaling;
        }
    }, {
        key: 'setScale',
        value: function setScale(x, y, z) {
            this.scaling = _glMatrix.vec3.fromValues(x, y, z);
            this.matrixTouched = true;
            this.matrixNeedsUpdate = true;
        }
    }, {
        key: 'getQuaternion',
        value: function getQuaternion() {
            return this.quaternion;
        }
    }, {
        key: 'setQuaternion',
        value: function setQuaternion(x, y, z, w) {
            this.quaternion = _glMatrix.quat.fromValues(x, y, z, w);
            this.matrixTouched = true;
            this.matrixNeedsUpdate = true;
        }
    }, {
        key: 'getModelMatrix',
        value: function getModelMatrix() {
            return this.modelMatrix;
        }
    }, {
        key: 'setModelMatrix',
        value: function setModelMatrix(modelMatrix) {
            this.modelMatrix = modelMatrix;
        }
    }, {
        key: 'addChild',
        value: function addChild(child) {
            child.setParent(this);
            this.children.push(child);
        }
    }, {
        key: 'addChildren',
        value: function addChildren(children) {
            for (var i = 0; i < children.length; i++) {
                children[i].setParent(this);
            }
            this.children = this.children.concat(children);
        }
    }, {
        key: 'getChildByName',
        value: function getChildByName(name, recursive) {
            for (var i = 0; i < this.children.length; i++) {
                if (this.children[i].getName() === name) {
                    return this.children[i];
                }

                if (recursive) {
                    var childChild = this.children[i].getChildByName(name, recursive);
                    if (childChild) return childChild;
                }
            }
            return undefined;
        }
    }, {
        key: 'getChildrenAsFlatArray',
        value: function getChildrenAsFlatArray(recursive) {
            var children = [];
            for (var i = 0; i < this.children.length; i++) {
                children.push(this.children[i]);

                if (recursive) {
                    var childChildren = this.children[i].getChildrenAsFlatArray(recursive);
                    children = children.concat(childChildren);
                }
            }
            return children;
        }
    }, {
        key: 'getChildrenByName',
        value: function getChildrenByName(name, recursive) {
            var children = [];
            for (var i = 0; i < this.children.length; i++) {
                if (this.children[i].getName() === name) {
                    children.push(this.children[i]);
                }

                if (recursive) {
                    var childChildren = this.children[i].getChildrenByName(name, recursive);
                    children = children.concat(childChildren);
                }
            }
            return children;
        }
    }, {
        key: 'getChildrenByType',
        value: function getChildrenByType(type, recursive) {
            var children = [];
            for (var i = 0; i < this.children.length; i++) {
                if (this.children[i].getType() === type) {
                    children.push(this.children[i]);
                }

                if (recursive) {
                    var childChildren = this.children[i].getChildrenByType(type, recursive);
                    children = children.concat(childChildren);
                }
            }
            return children;
        }
    }, {
        key: 'translate',
        value: function translate(x, y, z) {
            this.position = _glMatrix.vec3.add(_glMatrix.vec3.create(), this.position, _glMatrix.vec3.fromValues(x, y, z));
            this.matrixTouched = true;
            this.matrixNeedsUpdate = true;
        }
    }, {
        key: 'translateX',
        value: function translateX(value) {
            this.translate(value, 0, 0);
        }
    }, {
        key: 'translateY',
        value: function translateY(value) {
            this.translate(0, value, 0);
        }
    }, {
        key: 'translateZ',
        value: function translateZ(value) {
            this.translate(0, 0, value);
        }
    }, {
        key: 'scale',
        value: function scale(x, y, z) {
            this.scaling = _glMatrix.vec3.add(_glMatrix.vec3.create(), this.scaling, _glMatrix.vec3.fromValues(x, y, z));
            this.matrixTouched = true;
            this.matrixNeedsUpdate = true;
        }
    }, {
        key: 'scaleX',
        value: function scaleX(value) {
            this.scale(value, 0, 0);
        }
    }, {
        key: 'scaleY',
        value: function scaleY(value) {
            this.scale(0, value, 0);
        }
    }, {
        key: 'scaleZ',
        value: function scaleZ(value) {
            this.scale(0, 0, value);
        }
    }, {
        key: 'rotate',
        value: function rotate(x, y, z) {
            var quaternion = _glMatrix.quat.fromEuler(_glMatrix.quat.create(), x, y, z);
            this.quaternion = _glMatrix.quat.multiply(_glMatrix.quat.create(), this.quaternion, quaternion);
            this.matrixTouched = true;
            this.matrixNeedsUpdate = true;
        }
    }, {
        key: 'rotateX',
        value: function rotateX(value) {
            this.rotate(value, 0, 0);
        }
    }, {
        key: 'rotateY',
        value: function rotateY(value) {
            this.rotate(0, value, 0);
        }
    }, {
        key: 'rotateZ',
        value: function rotateZ(value) {
            this.rotate(0, 0, value);
        }
    }, {
        key: 'computeModelMatrix',
        value: function computeModelMatrix() {
            var pos = this.position;
            var scl = this.scaling;
            var rot = this.quaternion;

            if (this.parent && this.parent.matrixTouched) {
                var transformationMatrix = _glMatrix.mat4.fromRotationTranslationScale(_glMatrix.mat4.create(), rot, pos, scl);
                this.modelMatrix = _glMatrix.mat4.multiply(_glMatrix.mat4.create(), this.parent.modelMatrix, transformationMatrix);
            } else {

                if (this.matrixNeedsUpdate) {
                    this.modelMatrix = _glMatrix.mat4.fromRotationTranslationScale(_glMatrix.mat4.create(), rot, pos, scl);
                }
            }

            this.matrixNeedsUpdate = false;
            return this.modelMatrix;
        }
    }]);

    return Object3D;
}();

exports.default = Object3D;