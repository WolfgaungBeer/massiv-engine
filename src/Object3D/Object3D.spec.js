import Object3D from './';

test('it should have a uuid property', () => {
    const test = new Object3D();
    expect(test).toHaveProperty('uuid');
});

test('it should return the uuid property', () => {
    const test = new Object3D();
    expect(test.getUuid()).not.toBeUndefined();
});
