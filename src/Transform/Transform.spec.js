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

test('it should have a positionDirty property', () => {
    const test = new Transform();
    expect(test).toHaveProperty('positionDirty');
    expect(test.positionDirty).toEqual(false);
});

test('it should have a scalingDirty property', () => {
    const test = new Transform();
    expect(test).toHaveProperty('scalingDirty');
    expect(test.scalingDirty).toEqual(false);
});

test('it should have a rotationDirty property', () => {
    const test = new Transform();
    expect(test).toHaveProperty('rotationDirty');
    expect(test.rotationDirty).toEqual(false);
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
    test.setPosition(1, 2, 3);
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
    test.setScale(1, 2, 3);
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
    test.setQuaternion(1, 2, 3, 4);
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

test('it should translate this Transform', () => {
    const test = new Transform();
    expect(test.getPosition()[0]).toEqual(0);
    expect(test.getPosition()[1]).toEqual(0);
    expect(test.getPosition()[2]).toEqual(0);
    test.translate(1, 2, 3);
    expect(test.getPosition()[0]).toEqual(1);
    expect(test.getPosition()[1]).toEqual(2);
    expect(test.getPosition()[2]).toEqual(3);
    test.translate(2, 4, 6);
    expect(test.getPosition()[0]).toEqual(3);
    expect(test.getPosition()[1]).toEqual(6);
    expect(test.getPosition()[2]).toEqual(9);
    expect(test.positionDirty).toEqual(true);
});

test('it should translate this Transform on the X axis', () => {
    const test = new Transform();
    expect(test.getPosition()[0]).toEqual(0);
    expect(test.getPosition()[1]).toEqual(0);
    expect(test.getPosition()[2]).toEqual(0);
    test.translateX(2);
    expect(test.getPosition()[0]).toEqual(2);
    expect(test.getPosition()[1]).toEqual(0);
    expect(test.getPosition()[2]).toEqual(0);
    test.translateX(4);
    expect(test.getPosition()[0]).toEqual(6);
    expect(test.getPosition()[1]).toEqual(0);
    expect(test.getPosition()[2]).toEqual(0);
    expect(test.positionDirty).toEqual(true);
});

test('it should translate this Transform on the Y axis', () => {
    const test = new Transform();
    expect(test.getPosition()[0]).toEqual(0);
    expect(test.getPosition()[1]).toEqual(0);
    expect(test.getPosition()[2]).toEqual(0);
    test.translateY(2);
    expect(test.getPosition()[0]).toEqual(0);
    expect(test.getPosition()[1]).toEqual(2);
    expect(test.getPosition()[2]).toEqual(0);
    test.translateY(4);
    expect(test.getPosition()[0]).toEqual(0);
    expect(test.getPosition()[1]).toEqual(6);
    expect(test.getPosition()[2]).toEqual(0);
    expect(test.positionDirty).toEqual(true);
});

test('it should translate this Transform on the Z axis', () => {
    const test = new Transform();
    expect(test.getPosition()[0]).toEqual(0);
    expect(test.getPosition()[1]).toEqual(0);
    expect(test.getPosition()[2]).toEqual(0);
    test.translateZ(2);
    expect(test.getPosition()[0]).toEqual(0);
    expect(test.getPosition()[1]).toEqual(0);
    expect(test.getPosition()[2]).toEqual(2);
    test.translateZ(4);
    expect(test.getPosition()[0]).toEqual(0);
    expect(test.getPosition()[1]).toEqual(0);
    expect(test.getPosition()[2]).toEqual(6);
    expect(test.positionDirty).toEqual(true);
});

test('it should scale this Transform', () => {
    const test = new Transform();
    expect(test.getScale()[0]).toEqual(1);
    expect(test.getScale()[1]).toEqual(1);
    expect(test.getScale()[2]).toEqual(1);
    test.scale(1, 2, 3);
    expect(test.getScale()[0]).toEqual(2);
    expect(test.getScale()[1]).toEqual(3);
    expect(test.getScale()[2]).toEqual(4);
    test.scale(2, 4, 6);
    expect(test.getScale()[0]).toEqual(4);
    expect(test.getScale()[1]).toEqual(7);
    expect(test.getScale()[2]).toEqual(10);
    expect(test.scalingDirty).toEqual(true);
});

test('it should scale this Transform on the X axis', () => {
    const test = new Transform();
    expect(test.getScale()[0]).toEqual(1);
    expect(test.getScale()[1]).toEqual(1);
    expect(test.getScale()[2]).toEqual(1);
    test.scaleX(2);
    expect(test.getScale()[0]).toEqual(3);
    expect(test.getScale()[1]).toEqual(1);
    expect(test.getScale()[2]).toEqual(1);
    test.scaleX(4);
    expect(test.getScale()[0]).toEqual(7);
    expect(test.getScale()[1]).toEqual(1);
    expect(test.getScale()[2]).toEqual(1);
    expect(test.scalingDirty).toEqual(true);
});

test('it should scale this Transform on the Y axis', () => {
    const test = new Transform();
    expect(test.getScale()[0]).toEqual(1);
    expect(test.getScale()[1]).toEqual(1);
    expect(test.getScale()[2]).toEqual(1);
    test.scaleY(2);
    expect(test.getScale()[0]).toEqual(1);
    expect(test.getScale()[1]).toEqual(3);
    expect(test.getScale()[2]).toEqual(1);
    test.scaleY(4);
    expect(test.getScale()[0]).toEqual(1);
    expect(test.getScale()[1]).toEqual(7);
    expect(test.getScale()[2]).toEqual(1);
    expect(test.scalingDirty).toEqual(true);
});

test('it should scale this Transform on the Z axis', () => {
    const test = new Transform();
    expect(test.getScale()[0]).toEqual(1);
    expect(test.getScale()[1]).toEqual(1);
    expect(test.getScale()[2]).toEqual(1);
    test.scaleZ(2);
    expect(test.getScale()[0]).toEqual(1);
    expect(test.getScale()[1]).toEqual(1);
    expect(test.getScale()[2]).toEqual(3);
    test.scaleZ(4);
    expect(test.getScale()[0]).toEqual(1);
    expect(test.getScale()[1]).toEqual(1);
    expect(test.getScale()[2]).toEqual(7);
    expect(test.scalingDirty).toEqual(true);
});

test('it should rotate this Transform', () => {
    const test = new Transform();
    const rotation1 = quat.fromEuler(quat.create(), 1, 2, 3);
    expect(test.getQuaternion()[0]).toEqual(0);
    expect(test.getQuaternion()[1]).toEqual(0);
    expect(test.getQuaternion()[2]).toEqual(0);
    expect(test.getQuaternion()[3]).toEqual(1);
    test.rotate(1, 2, 3);
    expect(test.getQuaternion()[0]).toEqual(rotation1[0]);
    expect(test.getQuaternion()[1]).toEqual(rotation1[1]);
    expect(test.getQuaternion()[2]).toEqual(rotation1[2]);
    expect(test.getQuaternion()[3]).toEqual(rotation1[3]);
    expect(test.rotationDirty).toEqual(true);
});

test('it should rotate this Transform on the X axis', () => {
    const test = new Transform();
    const rotation1 = quat.fromEuler(quat.create(), 2, 0, 0);
    expect(test.getQuaternion()[0]).toEqual(0);
    expect(test.getQuaternion()[1]).toEqual(0);
    expect(test.getQuaternion()[2]).toEqual(0);
    expect(test.getQuaternion()[3]).toEqual(1);
    test.rotateX(2);
    expect(test.getQuaternion()[0]).toEqual(rotation1[0]);
    expect(test.getQuaternion()[1]).toEqual(rotation1[1]);
    expect(test.getQuaternion()[2]).toEqual(rotation1[2]);
    expect(test.getQuaternion()[3]).toEqual(rotation1[3]);
    expect(test.rotationDirty).toEqual(true);
});

test('it should rotate this Transform on the Y axis', () => {
    const test = new Transform();
    const rotation1 = quat.fromEuler(quat.create(), 0, 2, 0);
    expect(test.getQuaternion()[0]).toEqual(0);
    expect(test.getQuaternion()[1]).toEqual(0);
    expect(test.getQuaternion()[2]).toEqual(0);
    expect(test.getQuaternion()[3]).toEqual(1);
    test.rotateY(2);
    expect(test.getQuaternion()[0]).toEqual(rotation1[0]);
    expect(test.getQuaternion()[1]).toEqual(rotation1[1]);
    expect(test.getQuaternion()[2]).toEqual(rotation1[2]);
    expect(test.getQuaternion()[3]).toEqual(rotation1[3]);
    expect(test.rotationDirty).toEqual(true);
});

test('it should rotate this Transform on the Z axis', () => {
    const test = new Transform();
    const rotation1 = quat.fromEuler(quat.create(), 0, 0, 2);
    expect(test.getQuaternion()[0]).toEqual(0);
    expect(test.getQuaternion()[1]).toEqual(0);
    expect(test.getQuaternion()[2]).toEqual(0);
    expect(test.getQuaternion()[3]).toEqual(1);
    test.rotateZ(2);
    expect(test.getQuaternion()[0]).toEqual(rotation1[0]);
    expect(test.getQuaternion()[1]).toEqual(rotation1[1]);
    expect(test.getQuaternion()[2]).toEqual(rotation1[2]);
    expect(test.getQuaternion()[3]).toEqual(rotation1[3]);
    expect(test.rotationDirty).toEqual(true);
});

test('it should compute the modelMatrix (posDirty && sclDirty && rotDirty)', () => {
    const test = new Transform();
    expect(test.getModelMatrix()[0]).toEqual(1);
    expect(test.getModelMatrix()[1]).toEqual(0);
    expect(test.getModelMatrix()[2]).toEqual(0);
    expect(test.getModelMatrix()[3]).toEqual(0);
    expect(test.positionDirty).toEqual(false);
    expect(test.scalingDirty).toEqual(false);
    expect(test.rotationDirty).toEqual(false);
    test.translate(1, 2, 3);
    test.scale(2, 2, 2);
    test.rotate(2, 4, 6);
    expect(test.getModelMatrix()[0]).toEqual(1);
    expect(test.getModelMatrix()[1]).toEqual(0);
    expect(test.getModelMatrix()[2]).toEqual(0);
    expect(test.getModelMatrix()[3]).toEqual(0);
    expect(test.positionDirty).toEqual(true);
    expect(test.scalingDirty).toEqual(true);
    expect(test.rotationDirty).toEqual(true);
    test.computeModelMatrix();
    expect(test.getModelMatrix()[0]).not.toEqual(1);
    expect(test.getModelMatrix()[1]).not.toEqual(0);
    expect(test.getModelMatrix()[2]).not.toEqual(0);
    expect(test.getModelMatrix()[3]).toEqual(0);
    expect(test.positionDirty).toEqual(false);
    expect(test.scalingDirty).toEqual(false);
    expect(test.rotationDirty).toEqual(false);
});

test('it should compute the modelMatrix (posDirty && !sclDirty && !rotDirty)', () => {
    const test = new Transform();
    expect(test.getModelMatrix()[13]).toEqual(0);
    expect(test.getModelMatrix()[14]).toEqual(0);
    expect(test.positionDirty).toEqual(false);
    expect(test.scalingDirty).toEqual(false);
    expect(test.rotationDirty).toEqual(false);
    test.translate(1, 2, 3);
    expect(test.getModelMatrix()[13]).toEqual(0);
    expect(test.getModelMatrix()[14]).toEqual(0);
    expect(test.positionDirty).toEqual(true);
    expect(test.scalingDirty).toEqual(false);
    expect(test.rotationDirty).toEqual(false);
    test.computeModelMatrix();
    expect(test.getModelMatrix()[13]).not.toEqual(0);
    expect(test.getModelMatrix()[14]).not.toEqual(0);
    expect(test.positionDirty).toEqual(false);
    expect(test.scalingDirty).toEqual(false);
    expect(test.rotationDirty).toEqual(false);
});

test('it should compute the modelMatrix (!posDirty && sclDirty && !rotDirty)', () => {
    const test = new Transform();
    expect(test.getModelMatrix()[0]).toEqual(1);
    expect(test.getModelMatrix()[5]).toEqual(1);
    expect(test.positionDirty).toEqual(false);
    expect(test.scalingDirty).toEqual(false);
    expect(test.rotationDirty).toEqual(false);
    test.scale(1, 2, 3);
    expect(test.getModelMatrix()[0]).toEqual(1);
    expect(test.getModelMatrix()[5]).toEqual(1);
    expect(test.positionDirty).toEqual(false);
    expect(test.scalingDirty).toEqual(true);
    expect(test.rotationDirty).toEqual(false);
    test.computeModelMatrix();
    expect(test.getModelMatrix()[0]).not.toEqual(1);
    expect(test.getModelMatrix()[5]).not.toEqual(1);
    expect(test.positionDirty).toEqual(false);
    expect(test.scalingDirty).toEqual(false);
    expect(test.rotationDirty).toEqual(false);
});

test('it should compute the modelMatrix (!posDirty && !sclDirty && rotDirty)', () => {
    const test = new Transform();
    expect(test.getModelMatrix()[0]).toEqual(1);
    expect(test.getModelMatrix()[1]).toEqual(0);
    expect(test.positionDirty).toEqual(false);
    expect(test.scalingDirty).toEqual(false);
    expect(test.rotationDirty).toEqual(false);
    test.rotate(1, 2, 3);
    expect(test.getModelMatrix()[0]).toEqual(1);
    expect(test.getModelMatrix()[1]).toEqual(0);
    expect(test.positionDirty).toEqual(false);
    expect(test.scalingDirty).toEqual(false);
    expect(test.rotationDirty).toEqual(true);
    test.computeModelMatrix();
    expect(test.getModelMatrix()[0]).not.toEqual(1);
    expect(test.getModelMatrix()[1]).not.toEqual(0);
    expect(test.positionDirty).toEqual(false);
    expect(test.scalingDirty).toEqual(false);
    expect(test.rotationDirty).toEqual(false);
});

test('it should compute the modelMatrix (posDirty && sclDirty && !rotDirty)', () => {
    const test = new Transform();
    expect(test.getModelMatrix()[0]).toEqual(1);
    expect(test.getModelMatrix()[14]).toEqual(0);
    expect(test.positionDirty).toEqual(false);
    expect(test.scalingDirty).toEqual(false);
    expect(test.rotationDirty).toEqual(false);
    test.translate(1, 2, 3);
    test.scale(2, 2, 2);
    expect(test.getModelMatrix()[0]).toEqual(1);
    expect(test.getModelMatrix()[14]).toEqual(0);
    expect(test.positionDirty).toEqual(true);
    expect(test.scalingDirty).toEqual(true);
    expect(test.rotationDirty).toEqual(false);
    test.computeModelMatrix();
    expect(test.getModelMatrix()[0]).not.toEqual(1);
    expect(test.getModelMatrix()[14]).not.toEqual(0);
    expect(test.positionDirty).toEqual(false);
    expect(test.scalingDirty).toEqual(false);
    expect(test.rotationDirty).toEqual(false);
});

test('it should compute the modelMatrix (posDirty && !sclDirty && rotDirty)', () => {
    const test = new Transform();
    expect(test.getModelMatrix()[0]).toEqual(1);
    expect(test.getModelMatrix()[1]).toEqual(0);
    expect(test.getModelMatrix()[14]).toEqual(0);
    expect(test.positionDirty).toEqual(false);
    expect(test.scalingDirty).toEqual(false);
    expect(test.rotationDirty).toEqual(false);
    test.translate(1, 2, 3);
    test.rotate(2, 2, 2);
    expect(test.getModelMatrix()[0]).toEqual(1);
    expect(test.getModelMatrix()[1]).toEqual(0);
    expect(test.getModelMatrix()[14]).toEqual(0);
    expect(test.positionDirty).toEqual(true);
    expect(test.scalingDirty).toEqual(false);
    expect(test.rotationDirty).toEqual(true);
    test.computeModelMatrix();
    expect(test.getModelMatrix()[0]).not.toEqual(1);
    expect(test.getModelMatrix()[1]).not.toEqual(0);
    expect(test.getModelMatrix()[14]).not.toEqual(0);
    expect(test.positionDirty).toEqual(false);
    expect(test.scalingDirty).toEqual(false);
    expect(test.rotationDirty).toEqual(false);
});

test('it should compute the modelMatrix (!posDirty && sclDirty && rotDirty)', () => {
    const test = new Transform();
    expect(test.getModelMatrix()[0]).toEqual(1);
    expect(test.getModelMatrix()[1]).toEqual(0);
    expect(test.positionDirty).toEqual(false);
    expect(test.scalingDirty).toEqual(false);
    expect(test.rotationDirty).toEqual(false);
    test.scale(1, 2, 3);
    test.rotate(2, 2, 2);
    expect(test.getModelMatrix()[0]).toEqual(1);
    expect(test.getModelMatrix()[1]).toEqual(0);
    expect(test.positionDirty).toEqual(false);
    expect(test.scalingDirty).toEqual(true);
    expect(test.rotationDirty).toEqual(true);
    test.computeModelMatrix();
    expect(test.getModelMatrix()[0]).not.toEqual(1);
    expect(test.getModelMatrix()[1]).not.toEqual(0);
    expect(test.positionDirty).toEqual(false);
    expect(test.scalingDirty).toEqual(false);
    expect(test.rotationDirty).toEqual(false);
});

test('it should compute the modelMatrix (!posDirty && !sclDirty && !rotDirty)', () => {
    const test = new Transform();
    expect(test.getModelMatrix()[0]).toEqual(1);
    expect(test.getModelMatrix()[1]).toEqual(0);
    expect(test.positionDirty).toEqual(false);
    expect(test.scalingDirty).toEqual(false);
    expect(test.rotationDirty).toEqual(false);
    test.computeModelMatrix();
    expect(test.getModelMatrix()[0]).toEqual(1);
    expect(test.getModelMatrix()[1]).toEqual(0);
    expect(test.positionDirty).toEqual(false);
    expect(test.scalingDirty).toEqual(false);
    expect(test.rotationDirty).toEqual(false);
});
