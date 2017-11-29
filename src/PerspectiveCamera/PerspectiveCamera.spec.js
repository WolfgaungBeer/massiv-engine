import { mat4 } from 'gl-matrix';
import PerspectiveCamera from './';

test('it should have a fov property', () => {
    const test = new PerspectiveCamera(45, 4/3, 0.1, 1000);
    expect(test).toHaveProperty('fov');
    expect(test.fov).toEqual(45);
});

test('it should have a aspect property', () => {
    const test = new PerspectiveCamera(45, 4/3, 0.1, 1000);
    expect(test).toHaveProperty('aspect');
    expect(test.aspect).toEqual(4/3);
});

test('it should have a near property', () => {
    const test = new PerspectiveCamera(45, 4/3, 0.1, 1000);
    expect(test).toHaveProperty('near');
    expect(test.near).toEqual(0.1);
});

test('it should have a far property', () => {
    const test = new PerspectiveCamera(45, 4/3, 0.1, 1000);
    expect(test).toHaveProperty('far');
    expect(test.far).toEqual(1000);
});

test('it should set the projectionMatrix if updateProjectionMatrix is called', () => {
    const test = new PerspectiveCamera(45, 4/3, 0.1, 1000);
    expect(test.getProjectionMatrix()[0]).toEqual(1.3444432020187378);
    expect(test.getProjectionMatrix()[14]).toEqual(-0.20002000033855438);
    test.setPosition(5, 10, 10);
    test.updateProjectionMatrix(65, 16/9, 0.1, 100);
    expect(test.getProjectionMatrix()[0]).not.toEqual(1.3444432020187378);
    expect(test.getProjectionMatrix()[14]).not.toEqual(-0.20002000033855438);
});
