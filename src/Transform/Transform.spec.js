import { quat, mat4 } from 'gl-matrix';
import Transform from './';

// ===================================================
// check all properties of the object ================
// ===================================================

test('it should have a position property', () => {
    const test = new Transform();
    expect(test).toHaveProperty('position');
    expect(test.position).not.toBeUndefined();
});

test('it should have a scaling property', () => {
    const test = new Transform();
    expect(test).toHaveProperty('scaling');
    expect(test.scaling).not.toBeUndefined();
});

test('it should have a quaternion property', () => {
    const test = new Transform();
    expect(test).toHaveProperty('quaternion');
    expect(test.quaternion).not.toBeUndefined();
});

test('it should have a matrixTouched property', () => {
    const test = new Transform();
    expect(test).toHaveProperty('matrixTouched');
    expect(test.matrixTouched).toEqual(false);
});

test('it should have a matrixNeedsUpdate property', () => {
    const test = new Transform();
    expect(test).toHaveProperty('matrixNeedsUpdate');
    expect(test.matrixNeedsUpdate).toEqual(false);
});

test('it should have a modelMatrix property', () => {
    const test = new Transform();
    expect(test).toHaveProperty('modelMatrix');
    expect(test.modelMatrix).not.toBeUndefined();
});

// ===================================================
// check all getters and setters of the object =======
// ===================================================

test('it should get the position property', () => {
    const test = new Transform();
    expect(test.getPosition()).not.toBeUndefined();
    expect(test.getPosition()[0]).toEqual(0);
    expect(test.getPosition()[1]).toEqual(0);
    expect(test.getPosition()[2]).toEqual(0);
});

test('it should set the position property', () => {
    const test = new Transform();
    expect(test.matrixTouched).toEqual(false);
    expect(test.matrixNeedsUpdate).toEqual(false);
    test.setPosition(1, 2, 3);
    expect(test.matrixTouched).toEqual(true);
    expect(test.matrixNeedsUpdate).toEqual(true);
    expect(test.getPosition()).not.toBeUndefined();
    expect(test.getPosition()[0]).toEqual(1);
    expect(test.getPosition()[1]).toEqual(2);
    expect(test.getPosition()[2]).toEqual(3);
});

test('it should get the scaling property', () => {
    const test = new Transform();
    expect(test.getScale()).not.toBeUndefined();
    expect(test.getScale()[0]).toEqual(1);
    expect(test.getScale()[1]).toEqual(1);
    expect(test.getScale()[2]).toEqual(1);
});

test('it should set the scaling property', () => {
    const test = new Transform();
    expect(test.matrixTouched).toEqual(false);
    expect(test.matrixNeedsUpdate).toEqual(false);
    test.setScale(1, 2, 3);
    expect(test.matrixTouched).toEqual(true);
    expect(test.matrixNeedsUpdate).toEqual(true);
    expect(test.getScale()).not.toBeUndefined();
    expect(test.getScale()[0]).toEqual(1);
    expect(test.getScale()[1]).toEqual(2);
    expect(test.getScale()[2]).toEqual(3);
});

test('it should get the quaternion property', () => {
    const test = new Transform();
    expect(test.getQuaternion()).not.toBeUndefined();
    expect(test.getQuaternion()[0]).toEqual(0);
    expect(test.getQuaternion()[1]).toEqual(0);
    expect(test.getQuaternion()[2]).toEqual(0);
    expect(test.getQuaternion()[3]).toEqual(1);
});

test('it should set the quaternion property', () => {
    const test = new Transform();
    expect(test.matrixTouched).toEqual(false);
    expect(test.matrixNeedsUpdate).toEqual(false);
    test.setQuaternion(1, 2, 3, 4);
    expect(test.matrixTouched).toEqual(true);
    expect(test.matrixNeedsUpdate).toEqual(true);
    expect(test.getQuaternion()).not.toBeUndefined();
    expect(test.getQuaternion()[0]).toEqual(1);
    expect(test.getQuaternion()[1]).toEqual(2);
    expect(test.getQuaternion()[2]).toEqual(3);
    expect(test.getQuaternion()[3]).toEqual(4);
});

test('it should get the modelMatrix property', () => {
    const test = new Transform();
    expect(test.getModelMatrix()).not.toBeUndefined();
    expect(test.getModelMatrix()[0]).toEqual(1);
    expect(test.getModelMatrix()[1]).toEqual(0);
    expect(test.getModelMatrix()[2]).toEqual(0);
    expect(test.getModelMatrix()[3]).toEqual(0);
});

test('it should set the modelMatrix property', () => {
    const test = new Transform();
    test.setModelMatrix(mat4.fromValues(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1));
    expect(test.getModelMatrix()).not.toBeUndefined();
    expect(test.getModelMatrix()[0]).toEqual(1);
    expect(test.getModelMatrix()[1]).toEqual(1);
    expect(test.getModelMatrix()[2]).toEqual(1);
    expect(test.getModelMatrix()[3]).toEqual(1);
});

// ===================================================
// check the non-getter-setter functions of the object
// ===================================================

test('it should translate this Transform', () => {
    const test = new Transform();
    expect(test.getPosition()[0]).toEqual(0);
    expect(test.getPosition()[1]).toEqual(0);
    expect(test.getPosition()[2]).toEqual(0);
    expect(test.matrixTouched).toEqual(false);
    expect(test.matrixNeedsUpdate).toEqual(false);
    test.translate(1, 2, 3);
    expect(test.getPosition()[0]).toEqual(1);
    expect(test.getPosition()[1]).toEqual(2);
    expect(test.getPosition()[2]).toEqual(3);
    expect(test.matrixTouched).toEqual(true);
    expect(test.matrixNeedsUpdate).toEqual(true);
});

test('it should translate this Transform on the X axis', () => {
    const test = new Transform();
    expect(test.getPosition()[0]).toEqual(0);
    expect(test.getPosition()[1]).toEqual(0);
    expect(test.getPosition()[2]).toEqual(0);
    expect(test.matrixTouched).toEqual(false);
    expect(test.matrixNeedsUpdate).toEqual(false);
    test.translateX(2);
    expect(test.getPosition()[0]).toEqual(2);
    expect(test.getPosition()[1]).toEqual(0);
    expect(test.getPosition()[2]).toEqual(0);
    expect(test.matrixTouched).toEqual(true);
    expect(test.matrixNeedsUpdate).toEqual(true);
});

test('it should translate this Transform on the Y axis', () => {
    const test = new Transform();
    expect(test.getPosition()[0]).toEqual(0);
    expect(test.getPosition()[1]).toEqual(0);
    expect(test.getPosition()[2]).toEqual(0);
    expect(test.matrixTouched).toEqual(false);
    expect(test.matrixNeedsUpdate).toEqual(false);
    test.translateY(2);
    expect(test.getPosition()[0]).toEqual(0);
    expect(test.getPosition()[1]).toEqual(2);
    expect(test.getPosition()[2]).toEqual(0);
    expect(test.matrixTouched).toEqual(true);
    expect(test.matrixNeedsUpdate).toEqual(true);
});

test('it should translate this Transform on the Z axis', () => {
    const test = new Transform();
    expect(test.getPosition()[0]).toEqual(0);
    expect(test.getPosition()[1]).toEqual(0);
    expect(test.getPosition()[2]).toEqual(0);
    expect(test.matrixTouched).toEqual(false);
    expect(test.matrixNeedsUpdate).toEqual(false);
    test.translateZ(2);
    expect(test.getPosition()[0]).toEqual(0);
    expect(test.getPosition()[1]).toEqual(0);
    expect(test.getPosition()[2]).toEqual(2);
    expect(test.matrixTouched).toEqual(true);
    expect(test.matrixNeedsUpdate).toEqual(true);
});

test('it should scale this Transform', () => {
    const test = new Transform();
    expect(test.getScale()[0]).toEqual(1);
    expect(test.getScale()[1]).toEqual(1);
    expect(test.getScale()[2]).toEqual(1);
    expect(test.matrixTouched).toEqual(false);
    expect(test.matrixNeedsUpdate).toEqual(false);
    test.scale(1, 2, 3);
    expect(test.getScale()[0]).toEqual(2);
    expect(test.getScale()[1]).toEqual(3);
    expect(test.getScale()[2]).toEqual(4);
    expect(test.matrixTouched).toEqual(true);
    expect(test.matrixNeedsUpdate).toEqual(true);
});

test('it should scale this Transform on the X axis', () => {
    const test = new Transform();
    expect(test.getScale()[0]).toEqual(1);
    expect(test.getScale()[1]).toEqual(1);
    expect(test.getScale()[2]).toEqual(1);
    expect(test.matrixTouched).toEqual(false);
    expect(test.matrixNeedsUpdate).toEqual(false);
    test.scaleX(2);
    expect(test.getScale()[0]).toEqual(3);
    expect(test.getScale()[1]).toEqual(1);
    expect(test.getScale()[2]).toEqual(1);
    expect(test.matrixTouched).toEqual(true);
    expect(test.matrixNeedsUpdate).toEqual(true);
});

test('it should scale this Transform on the Y axis', () => {
    const test = new Transform();
    expect(test.getScale()[0]).toEqual(1);
    expect(test.getScale()[1]).toEqual(1);
    expect(test.getScale()[2]).toEqual(1);
    expect(test.matrixTouched).toEqual(false);
    expect(test.matrixNeedsUpdate).toEqual(false);
    test.scaleY(2);
    expect(test.getScale()[0]).toEqual(1);
    expect(test.getScale()[1]).toEqual(3);
    expect(test.getScale()[2]).toEqual(1);
    expect(test.matrixTouched).toEqual(true);
    expect(test.matrixNeedsUpdate).toEqual(true);
});

test('it should scale this Transform on the Z axis', () => {
    const test = new Transform();
    expect(test.getScale()[0]).toEqual(1);
    expect(test.getScale()[1]).toEqual(1);
    expect(test.getScale()[2]).toEqual(1);
    expect(test.matrixTouched).toEqual(false);
    expect(test.matrixNeedsUpdate).toEqual(false);
    test.scaleZ(2);
    expect(test.getScale()[0]).toEqual(1);
    expect(test.getScale()[1]).toEqual(1);
    expect(test.getScale()[2]).toEqual(3);
    expect(test.matrixTouched).toEqual(true);
    expect(test.matrixNeedsUpdate).toEqual(true);
});

test('it should rotate this Transform', () => {
    const test = new Transform();
    const rotation1 = quat.fromEuler(quat.create(), 1, 2, 3);
    expect(test.getQuaternion()[0]).toEqual(0);
    expect(test.getQuaternion()[1]).toEqual(0);
    expect(test.getQuaternion()[2]).toEqual(0);
    expect(test.getQuaternion()[3]).toEqual(1);
    expect(test.matrixTouched).toEqual(false);
    expect(test.matrixNeedsUpdate).toEqual(false);
    test.rotate(1, 2, 3);
    expect(test.getQuaternion()[0]).toEqual(rotation1[0]);
    expect(test.getQuaternion()[1]).toEqual(rotation1[1]);
    expect(test.getQuaternion()[2]).toEqual(rotation1[2]);
    expect(test.getQuaternion()[3]).toEqual(rotation1[3]);
    expect(test.matrixTouched).toEqual(true);
    expect(test.matrixNeedsUpdate).toEqual(true);
});

test('it should rotate this Transform on the X axis', () => {
    const test = new Transform();
    const rotation1 = quat.fromEuler(quat.create(), 2, 0, 0);
    expect(test.getQuaternion()[0]).toEqual(0);
    expect(test.getQuaternion()[1]).toEqual(0);
    expect(test.getQuaternion()[2]).toEqual(0);
    expect(test.getQuaternion()[3]).toEqual(1);
    expect(test.matrixTouched).toEqual(false);
    expect(test.matrixNeedsUpdate).toEqual(false);
    test.rotateX(2);
    expect(test.getQuaternion()[0]).toEqual(rotation1[0]);
    expect(test.getQuaternion()[1]).toEqual(rotation1[1]);
    expect(test.getQuaternion()[2]).toEqual(rotation1[2]);
    expect(test.getQuaternion()[3]).toEqual(rotation1[3]);
    expect(test.matrixTouched).toEqual(true);
    expect(test.matrixNeedsUpdate).toEqual(true);
});

test('it should rotate this Transform on the Y axis', () => {
    const test = new Transform();
    const rotation1 = quat.fromEuler(quat.create(), 0, 2, 0);
    expect(test.getQuaternion()[0]).toEqual(0);
    expect(test.getQuaternion()[1]).toEqual(0);
    expect(test.getQuaternion()[2]).toEqual(0);
    expect(test.getQuaternion()[3]).toEqual(1);
    expect(test.matrixTouched).toEqual(false);
    expect(test.matrixNeedsUpdate).toEqual(false);
    test.rotateY(2);
    expect(test.getQuaternion()[0]).toEqual(rotation1[0]);
    expect(test.getQuaternion()[1]).toEqual(rotation1[1]);
    expect(test.getQuaternion()[2]).toEqual(rotation1[2]);
    expect(test.getQuaternion()[3]).toEqual(rotation1[3]);
    expect(test.matrixTouched).toEqual(true);
    expect(test.matrixNeedsUpdate).toEqual(true);
});

test('it should rotate this Transform on the Z axis', () => {
    const test = new Transform();
    const rotation1 = quat.fromEuler(quat.create(), 0, 0, 2);
    expect(test.getQuaternion()[0]).toEqual(0);
    expect(test.getQuaternion()[1]).toEqual(0);
    expect(test.getQuaternion()[2]).toEqual(0);
    expect(test.getQuaternion()[3]).toEqual(1);
    expect(test.matrixTouched).toEqual(false);
    expect(test.matrixNeedsUpdate).toEqual(false);
    test.rotateZ(2);
    expect(test.getQuaternion()[0]).toEqual(rotation1[0]);
    expect(test.getQuaternion()[1]).toEqual(rotation1[1]);
    expect(test.getQuaternion()[2]).toEqual(rotation1[2]);
    expect(test.getQuaternion()[3]).toEqual(rotation1[3]);
    expect(test.matrixTouched).toEqual(true);
    expect(test.matrixNeedsUpdate).toEqual(true);
});

test('it should compute the modelMatrix if the Transform has no parent', () => {
    const test = new Transform();
    expect(test.getModelMatrix()[0]).toEqual(1);
    expect(test.getModelMatrix()[1]).toEqual(0);
    expect(test.getModelMatrix()[2]).toEqual(0);
    expect(test.getModelMatrix()[3]).toEqual(0);
    expect(test.matrixTouched).toEqual(false);
    expect(test.matrixNeedsUpdate).toEqual(false);
    test.translate(1, 2, 3);
    test.scale(2, 2, 2);
    test.rotate(2, 4, 6);
    expect(test.matrixTouched).toEqual(true);
    expect(test.matrixNeedsUpdate).toEqual(true);
    test.computeModelMatrix();
    expect(test.getModelMatrix()[0]).not.toEqual(1);
    expect(test.getModelMatrix()[1]).not.toEqual(0);
    expect(test.getModelMatrix()[2]).not.toEqual(0);
    expect(test.getModelMatrix()[3]).toEqual(0);
    expect(test.matrixTouched).toEqual(true);
    expect(test.matrixNeedsUpdate).toEqual(false);
});

test('it should not compute the modelMatrix if the Transform has no parent and matrixNeedsUpdate is false', () => {
    const test = new Transform();
    expect(test.getModelMatrix()[0]).toEqual(1);
    expect(test.getModelMatrix()[1]).toEqual(0);
    expect(test.getModelMatrix()[2]).toEqual(0);
    expect(test.getModelMatrix()[3]).toEqual(0);
    test.computeModelMatrix();
    expect(test.getModelMatrix()[0]).toEqual(1);
    expect(test.getModelMatrix()[1]).toEqual(0);
    expect(test.getModelMatrix()[2]).toEqual(0);
    expect(test.getModelMatrix()[3]).toEqual(0);
});

test('it should compute the modelMatrix if the Transform has a parent and parent matrix was not touched', () => {
    const parent = new Transform();
    const child = new Transform();
    parent.addChild(child);
    expect(child.getModelMatrix()[0]).toEqual(1);
    expect(child.getModelMatrix()[1]).toEqual(0);
    expect(child.getModelMatrix()[2]).toEqual(0);
    expect(child.getModelMatrix()[3]).toEqual(0);
    child.translate(1, 2, 3);
    child.scale(2, 2, 2);
    child.rotate(2, 4, 6);
    child.computeModelMatrix();
    expect(child.getModelMatrix()[0]).not.toEqual(1);
    expect(child.getModelMatrix()[1]).not.toEqual(0);
    expect(child.getModelMatrix()[2]).not.toEqual(0);
    expect(child.getModelMatrix()[3]).toEqual(0);
});

test('it should compute the modelMatrix if the Transform has a parent and parent matrix was touched', () => {
    const parent = new Transform();
    const child = new Transform();
    parent.addChild(child);
    expect(child.getModelMatrix()[0]).toEqual(1);
    expect(child.getModelMatrix()[1]).toEqual(0);
    expect(child.getModelMatrix()[2]).toEqual(0);
    expect(child.getModelMatrix()[3]).toEqual(0);
    parent.translate(1, 2, 3);
    parent.scale(2, 2, 2);
    parent.rotate(2, 4, 6);
    parent.computeModelMatrix();
    child.translate(1, 2, 3);
    child.scale(2, 2, 2);
    child.rotate(2, 4, 6);
    child.computeModelMatrix();
    expect(child.getModelMatrix()[0]).not.toEqual(1);
    expect(child.getModelMatrix()[1]).not.toEqual(0);
    expect(child.getModelMatrix()[2]).not.toEqual(0);
    expect(child.getModelMatrix()[3]).toEqual(0);
});
