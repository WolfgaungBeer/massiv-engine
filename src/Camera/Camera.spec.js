import { mat4 } from 'gl-matrix';
import Camera from './';

// ===================================================
// check all properties of the object ================
// ===================================================

test('it should have a upVector property', () => {
    const test = new Camera();
    expect(test).toHaveProperty('upVector');
    expect(test.upVector).not.toBeUndefined();
});

test('it should have a viewMatrix property', () => {
    const test = new Camera();
    expect(test).toHaveProperty('viewMatrix');
    expect(test.viewMatrix).not.toBeUndefined();
});

test('it should have a projectionMatrix property', () => {
    const test = new Camera();
    expect(test).toHaveProperty('projectionMatrix');
    expect(test.projectionMatrix).not.toBeUndefined();
});

// ===================================================
// check all getters and setters of the object =======
// ===================================================

test('it should get the upVector property', () => {
    const test = new Camera();
    expect(test.getUpVector()[0]).toEqual(0);
    expect(test.getUpVector()[1]).toEqual(1);
    expect(test.getUpVector()[2]).toEqual(0);
});

test('it should set the upVector property', () => {
    const test = new Camera();
    test.setUpVector(0, 0, 1);
    expect(test.getUpVector()[0]).toEqual(0);
    expect(test.getUpVector()[1]).toEqual(0);
    expect(test.getUpVector()[2]).toEqual(1);
});

test('it should get the viewMatrix property', () => {
    const test = new Camera();
    expect(test.getViewMatrix()[0]).toEqual(1);
    expect(test.getViewMatrix()[1]).toEqual(0);
    expect(test.getViewMatrix()[2]).toEqual(0);
});

test('it should set the viewMatrix property', () => {
    const test = new Camera();
    test.setViewMatrix(mat4.fromValues(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1));
    expect(test.getViewMatrix()[0]).toEqual(1);
    expect(test.getViewMatrix()[1]).toEqual(1);
    expect(test.getViewMatrix()[2]).toEqual(1);
});

test('it should get the projectionMatrix property', () => {
    const test = new Camera();
    expect(test.getProjectionMatrix()[0]).toEqual(1);
    expect(test.getProjectionMatrix()[1]).toEqual(0);
    expect(test.getProjectionMatrix()[2]).toEqual(0);
});

test('it should set the projectionMatrix property', () => {
    const test = new Camera();
    test.setProjectionMatrix(mat4.fromValues(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1));
    expect(test.getProjectionMatrix()[0]).toEqual(1);
    expect(test.getProjectionMatrix()[1]).toEqual(1);
    expect(test.getProjectionMatrix()[2]).toEqual(1);
});

// ===================================================
// check the non-getter-setter functions of the object
// ===================================================

test('it should set the viewMatrix correctly if lookAt is called', () => {
    const test = new Camera();
    expect(test.getViewMatrix()[0]).toEqual(1);
    expect(test.getViewMatrix()[1]).toEqual(0);
    expect(test.getViewMatrix()[2]).toEqual(0);
    test.getTransform().setPosition(5, 10, 10);
    test.lookAt(0, 0, 0);
    expect(test.getViewMatrix()[0]).not.toEqual(1);
    expect(test.getViewMatrix()[1]).not.toEqual(0);
    expect(test.getViewMatrix()[2]).not.toEqual(0);
});
