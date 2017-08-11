import Transform from './';

// ===================================================
// check all properties of the object ================
// ===================================================

test('it should have a position property', () => {
    const test = new Transform();
    expect(test).toHaveProperty('position');
    expect(test.position).not.toBeUndefined();
});

test('it should have a scale property', () => {
    const test = new Transform();
    expect(test).toHaveProperty('scale');
    expect(test.scale).not.toBeUndefined();
});

test('it should have a quaternion property', () => {
    const test = new Transform();
    expect(test).toHaveProperty('quaternion');
    expect(test.quaternion).not.toBeUndefined();
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

test('it should get the scale property', () => {
    const test = new Transform();
    expect(test.getScale()).not.toBeUndefined();
    expect(test.getScale()[0]).toEqual(1);
    expect(test.getScale()[1]).toEqual(1);
    expect(test.getScale()[2]).toEqual(1);
});

test('it should set the scale property', () => {
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
