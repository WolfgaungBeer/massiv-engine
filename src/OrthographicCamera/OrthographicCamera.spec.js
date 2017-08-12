import { mat4 } from 'gl-matrix';
import OrthographicCamera from './';

// ===================================================
// check all properties of the object ================
// ===================================================

test('it should have a left property', () => {
    const test = new OrthographicCamera(-100, 100, -100, 100, -100, 100);
    expect(test).toHaveProperty('left');
    expect(test.left).toEqual(-100);
});

test('it should have a right property', () => {
    const test = new OrthographicCamera(-100, 100, -100, 100, -100, 100);
    expect(test).toHaveProperty('right');
    expect(test.right).toEqual(100);
});

test('it should have a bottom property', () => {
    const test = new OrthographicCamera(-100, 100, -100, 100, -100, 100);
    expect(test).toHaveProperty('bottom');
    expect(test.bottom).toEqual(-100);
});

test('it should have a top property', () => {
    const test = new OrthographicCamera(-100, 100, -100, 100, -100, 100);
    expect(test).toHaveProperty('top');
    expect(test.top).toEqual(100);
});

test('it should have a near property', () => {
    const test = new OrthographicCamera(-100, 100, -100, 100, -100, 100);
    expect(test).toHaveProperty('near');
    expect(test.near).toEqual(-100);
});

test('it should have a far property', () => {
    const test = new OrthographicCamera(-100, 100, -100, 100, -100, 100);
    expect(test).toHaveProperty('far');
    expect(test.far).toEqual(100);
});

// ===================================================
// check all getters and setters of the object =======
// ===================================================


// ===================================================
// check the non-getter-setter functions of the object
// ===================================================

test('it should set the projectionMatrix if updateProjectionMatrix is called', () => {
    const test = new OrthographicCamera(-100, 100, -100, 100, -100, 100);
    expect(test.getProjectionMatrix()[0]).toEqual(0.009999999776482582);
    expect(test.getProjectionMatrix()[5]).toEqual(0.009999999776482582);
    test.getTransform().setPosition(5, 10, 10);
    test.updateProjectionMatrix(65, 16/9, 0.1, 100);
    expect(test.getProjectionMatrix()[0]).not.toEqual(0.009999999776482582);
    expect(test.getProjectionMatrix()[5]).not.toEqual(0.009999999776482582);
});
