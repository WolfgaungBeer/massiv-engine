import { quat, mat4 } from 'gl-matrix';
import Object3D from './';

test('it should be a instance of an EventEmitter', () => {
    const test = new Object3D();
    let called;
    test.on('test', ({ prop }) => {
        called = prop;
    });
    test.emit('test', { prop: 'value' });
    expect(called).toEqual('value');
});

test('it should have a uuid property', () => {
    const test = new Object3D();
    expect(test).toHaveProperty('uuid');
    expect(test.uuid).not.toBeUndefined();
});

test('it should have a name property', () => {
    const test = new Object3D();
    expect(test).toHaveProperty('name');
    expect(test.name).not.toBeUndefined();
});

test('it should have a type property', () => {
    const test = new Object3D();
    expect(test).toHaveProperty('type');
    expect(test.type).not.toBeUndefined();
});

test('it should have a parent property', () => {
    const test = new Object3D();
    expect(test).toHaveProperty('parent');
    expect(test.parent).toBeUndefined();
});

test('it should have a children property', () => {
    const test = new Object3D();
    expect(test).toHaveProperty('children');
    expect(test.children).not.toBeUndefined();
});

test('it should have a position property', () => {
    const test = new Object3D();
    expect(test).toHaveProperty('position');
    expect(test.position).not.toBeUndefined();
});

test('it should have a scaling property', () => {
    const test = new Object3D();
    expect(test).toHaveProperty('scaling');
    expect(test.scaling).not.toBeUndefined();
});

test('it should have a quaternion property', () => {
    const test = new Object3D();
    expect(test).toHaveProperty('quaternion');
    expect(test.quaternion).not.toBeUndefined();
});

test('it should have a matrixTouched property', () => {
    const test = new Object3D();
    expect(test).toHaveProperty('matrixTouched');
    expect(test.matrixTouched).toEqual(false);
});

test('it should have a matrixNeedsUpdate property', () => {
    const test = new Object3D();
    expect(test).toHaveProperty('matrixNeedsUpdate');
    expect(test.matrixNeedsUpdate).toEqual(false);
});

test('it should have a modelMatrix property', () => {
    const test = new Object3D();
    expect(test).toHaveProperty('modelMatrix');
    expect(test.modelMatrix).not.toBeUndefined();
});

test('it should get the uuid property', () => {
    const test = new Object3D();
    expect(test.getUuid()).not.toBeUndefined();
});

test('it should get the name property', () => {
    const test = new Object3D();
    expect(test.getName()).toEqual('Object3D');
});

test('it should set the name property', () => {
    const test = new Object3D();
    test.setName('Test');
    expect(test.getName()).toEqual('Test');
});

test('it should get the type property', () => {
    const test = new Object3D();
    expect(test.getType()).toEqual('Object3D');
});

test('it should set the type property', () => {
    const test = new Object3D();
    test.setType('PerspectiveCamera');
    expect(test.getType()).toEqual('PerspectiveCamera');
});

test('it should get the parent property', () => {
    const parent = new Object3D();
    const child = new Object3D();
    expect(child.getParent()).toBeUndefined();
});

test('it should set the parent property', () => {
    const parent = new Object3D();
    const child = new Object3D();
    child.setParent(parent);
    expect(child.getParent().getUuid()).toEqual(parent.getUuid());
    expect(parent.getChildren()[0].getUuid()).toEqual(child.getUuid());
});

test('it should get the children property', () => {
    const parent = new Object3D();
    const child = new Object3D();
    expect(parent.getChildren()).toEqual([]);
});

test('it should set the children property', () => {
    const parent = new Object3D();
    const child1 = new Object3D();
    const child2 = new Object3D();
    const children = [child1, child2];
    parent.setChildren(children);
    expect(parent.getChildren()[0].getUuid()).toEqual(child1.getUuid());
    expect(parent.getChildren()[1].getUuid()).toEqual(child2.getUuid());
    expect(child1.getParent().getUuid()).toEqual(parent.getUuid());
    expect(child2.getParent().getUuid()).toEqual(parent.getUuid());
});

test('it should get the position property', () => {
    const test = new Object3D();
    expect(test.getPosition()).not.toBeUndefined();
    expect(test.getPosition()[0]).toEqual(0);
    expect(test.getPosition()[1]).toEqual(0);
    expect(test.getPosition()[2]).toEqual(0);
});

test('it should set the position property', () => {
    const test = new Object3D();
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
    const test = new Object3D();
    expect(test.getScale()).not.toBeUndefined();
    expect(test.getScale()[0]).toEqual(1);
    expect(test.getScale()[1]).toEqual(1);
    expect(test.getScale()[2]).toEqual(1);
});

test('it should set the scaling property', () => {
    const test = new Object3D();
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
    const test = new Object3D();
    expect(test.getQuaternion()).not.toBeUndefined();
    expect(test.getQuaternion()[0]).toEqual(0);
    expect(test.getQuaternion()[1]).toEqual(0);
    expect(test.getQuaternion()[2]).toEqual(0);
    expect(test.getQuaternion()[3]).toEqual(1);
});

test('it should set the quaternion property', () => {
    const test = new Object3D();
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
    const test = new Object3D();
    expect(test.getModelMatrix()).not.toBeUndefined();
    expect(test.getModelMatrix()[0]).toEqual(1);
    expect(test.getModelMatrix()[1]).toEqual(0);
    expect(test.getModelMatrix()[2]).toEqual(0);
    expect(test.getModelMatrix()[3]).toEqual(0);
});

test('it should set the modelMatrix property', () => {
    const test = new Object3D();
    test.setModelMatrix(mat4.fromValues(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1));
    expect(test.getModelMatrix()).not.toBeUndefined();
    expect(test.getModelMatrix()[0]).toEqual(1);
    expect(test.getModelMatrix()[1]).toEqual(1);
    expect(test.getModelMatrix()[2]).toEqual(1);
    expect(test.getModelMatrix()[3]).toEqual(1);
});

test('it should add a child and set the parent correctly', () => {
    const parent = new Object3D();
    const child = new Object3D();
    parent.addChild(child);
    expect(parent.getChildren()[0].getUuid()).toEqual(child.getUuid());
    expect(child.getParent().getUuid()).toEqual(parent.getUuid());
});

test('it should add a array of children and set the parent correctly', () => {
    const parent = new Object3D();
    const child1 = new Object3D();
    const child2 = new Object3D();
    parent.addChildren([child1, child2]);
    expect(parent.getChildren()[0].getUuid()).toEqual(child1.getUuid());
    expect(parent.getChildren()[1].getUuid()).toEqual(child2.getUuid());
    expect(child1.getParent().getUuid()).toEqual(parent.getUuid());
    expect(child2.getParent().getUuid()).toEqual(parent.getUuid());
});

test('it should get the first child with the given name (not recursive)', () => {
    const parent = new Object3D();
    const child1 = new Object3D();
    const child2 = new Object3D();
    const child3 = new Object3D();
    child1.setName('test1');
    child2.setName('test2');
    child3.setName('test3');
    parent.setChildren([child1, child2, child3]);
    const child = parent.getChildByName('test1');
    expect(child.getUuid()).toEqual(child1.getUuid());
});

test('it should return undefined because no child has the given name (not recursive)', () => {
    const parent = new Object3D();
    const child1 = new Object3D();
    const child2 = new Object3D();
    const child3 = new Object3D();
    child1.setName('test1');
    child2.setName('test2');
    child3.setName('test3');
    parent.setChildren([child1, child2, child3]);
    const child = parent.getChildByName('test4');
    expect(child).toBeUndefined();
});

test('it should get the first child with the given name (recursive)', () => {
    const parent = new Object3D();
    const child1 = new Object3D();
    const child2 = new Object3D();
    const child3 = new Object3D();
    const child4 = new Object3D();
    const child5 = new Object3D();
    child1.setName('test1');
    child2.setName('test2');
    child3.setName('test3');
    child4.setName('test4');
    child5.setName('test5');
    child4.setChildren([child5]);
    child1.setChildren([child4]);
    parent.setChildren([child1, child2, child3]);
    const child = parent.getChildByName('test5', true);
    expect(child.getUuid()).toEqual(child5.getUuid());
});

test('it should return undefined because no child has the given name (recursive)', () => {
    const parent = new Object3D();
    const child1 = new Object3D();
    const child2 = new Object3D();
    const child3 = new Object3D();
    const child4 = new Object3D();
    const child5 = new Object3D();
    child1.setName('test1');
    child2.setName('test2');
    child3.setName('test3');
    child4.setName('test4');
    child5.setName('test5');
    child4.setChildren([child5]);
    child1.setChildren([child4]);
    parent.setChildren([child1, child2, child3]);
    const child = parent.getChildByName('test6', true);
    expect(child).toBeUndefined();
});

test('it should get all children as a flat array (not recursive)', () => {
    const parent = new Object3D();
    const child1 = new Object3D();
    const child2 = new Object3D();
    const child3 = new Object3D();
    parent.setChildren([child1, child2, child3]);
    const children = parent.getChildrenAsFlatArray();
    expect(children.length).toEqual(3);
});

test('it should get all children as a flat array (recursive)', () => {
    const parent = new Object3D();
    const child1 = new Object3D();
    const child2 = new Object3D();
    const child3 = new Object3D();
    const child4 = new Object3D();
    const child5 = new Object3D();
    child4.setChildren([child5]);
    child1.setChildren([child4]);
    parent.setChildren([child1, child2, child3]);
    const children = parent.getChildrenAsFlatArray(true);
    expect(children.length).toEqual(5);
});

test('it should get all children with the given name (not recursive)', () => {
    const parent = new Object3D();
    const child1 = new Object3D();
    const child2 = new Object3D();
    const child3 = new Object3D();
    child1.setName('test1');
    child2.setName('test1');
    child3.setName('test2');
    parent.setChildren([child1, child2, child3]);
    const children = parent.getChildrenByName('test1');
    expect(children[0].getUuid()).toEqual(child1.getUuid());
    expect(children[1].getUuid()).toEqual(child2.getUuid());
});

test('it should return a empty array because no child has the given name (not recursive)', () => {
    const parent = new Object3D();
    const child1 = new Object3D();
    const child2 = new Object3D();
    const child3 = new Object3D();
    child1.setName('test1');
    child2.setName('test2');
    child3.setName('test3');
    parent.setChildren([child1, child2, child3]);
    const children = parent.getChildrenByName('test4');
    expect(children).toEqual([]);
});

test('it should get all children with the given name (recursive)', () => {
    const parent = new Object3D();
    const child1 = new Object3D();
    const child2 = new Object3D();
    const child3 = new Object3D();
    const child4 = new Object3D();
    const child5 = new Object3D();
    child1.setName('test');
    child2.setName('test2');
    child3.setName('test3');
    child4.setName('test');
    child5.setName('test');
    child4.setChildren([child5]);
    child1.setChildren([child4]);
    parent.setChildren([child1, child2, child3]);
    const children = parent.getChildrenByName('test', true);
    expect(children[0].getUuid()).toEqual(child1.getUuid());
    expect(children[1].getUuid()).toEqual(child4.getUuid());
    expect(children[2].getUuid()).toEqual(child5.getUuid());
});

test('it should return a empty array because no child has the given name (recursive)', () => {
    const parent = new Object3D();
    const child1 = new Object3D();
    const child2 = new Object3D();
    const child3 = new Object3D();
    const child4 = new Object3D();
    const child5 = new Object3D();
    child1.setName('test1');
    child2.setName('test2');
    child3.setName('test3');
    child4.setName('test4');
    child5.setName('test5');
    child4.setChildren([child5]);
    child1.setChildren([child4]);
    parent.setChildren([child1, child2, child3]);
    const children = parent.getChildrenByName('test6', true);
    expect(children).toEqual([]);
});

test('it should get all children with the given type (not recursive)', () => {
    const parent = new Object3D();
    const child1 = new Object3D();
    const child2 = new Object3D();
    const child3 = new Object3D();
    child1.setType('test1');
    child2.setType('test1');
    child3.setType('test2');
    parent.setChildren([child1, child2, child3]);
    const children = parent.getChildrenByType('test1');
    expect(children[0].getUuid()).toEqual(child1.getUuid());
    expect(children[1].getUuid()).toEqual(child2.getUuid());
});

test('it should return a empty array because no child has the given type (not recursive)', () => {
    const parent = new Object3D();
    const child1 = new Object3D();
    const child2 = new Object3D();
    const child3 = new Object3D();
    child1.setType('test1');
    child2.setType('test2');
    child3.setType('test3');
    parent.setChildren([child1, child2, child3]);
    const children = parent.getChildrenByType('test4');
    expect(children).toEqual([]);
});

test('it should get all children with the given type (recursive)', () => {
    const parent = new Object3D();
    const child1 = new Object3D();
    const child2 = new Object3D();
    const child3 = new Object3D();
    const child4 = new Object3D();
    const child5 = new Object3D();
    child1.setType('test');
    child2.setType('test2');
    child3.setType('test3');
    child4.setType('test');
    child5.setType('test');
    child4.setChildren([child5]);
    child1.setChildren([child4]);
    parent.setChildren([child1, child2, child3]);
    const children = parent.getChildrenByType('test', true);
    expect(children[0].getUuid()).toEqual(child1.getUuid());
    expect(children[1].getUuid()).toEqual(child4.getUuid());
    expect(children[2].getUuid()).toEqual(child5.getUuid());
});

test('it should return a empty array because no child has the given type (recursive)', () => {
    const parent = new Object3D();
    const child1 = new Object3D();
    const child2 = new Object3D();
    const child3 = new Object3D();
    const child4 = new Object3D();
    const child5 = new Object3D();
    child1.setType('test1');
    child2.setType('test2');
    child3.setType('test3');
    child4.setType('test4');
    child5.setType('test5');
    child4.setChildren([child5]);
    child1.setChildren([child4]);
    parent.setChildren([child1, child2, child3]);
    const children = parent.getChildrenByType('test6', true);
    expect(children).toEqual([]);
});

test('it should translate this Object3D', () => {
    const test = new Object3D();
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

test('it should translate this Object3D on the X axis', () => {
    const test = new Object3D();
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

test('it should translate this Object3D on the Y axis', () => {
    const test = new Object3D();
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

test('it should translate this Object3D on the Z axis', () => {
    const test = new Object3D();
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

test('it should scale this Object3D', () => {
    const test = new Object3D();
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

test('it should scale this Object3D on the X axis', () => {
    const test = new Object3D();
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

test('it should scale this Object3D on the Y axis', () => {
    const test = new Object3D();
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

test('it should scale this Object3D on the Z axis', () => {
    const test = new Object3D();
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

test('it should rotate this Object3D', () => {
    const test = new Object3D();
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

test('it should rotate this Object3D on the X axis', () => {
    const test = new Object3D();
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

test('it should rotate this Object3D on the Y axis', () => {
    const test = new Object3D();
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

test('it should rotate this Object3D on the Z axis', () => {
    const test = new Object3D();
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

test('it should compute the modelMatrix if the Object3D has no parent', () => {
    const test = new Object3D();
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

test('it should not compute the modelMatrix if the Object3D has no parent and matrixNeedsUpdate is false', () => {
    const test = new Object3D();
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

test('it should compute the modelMatrix if the Object3D has a parent and parent matrix was not touched', () => {
    const parent = new Object3D();
    const child = new Object3D();
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

test('it should compute the modelMatrix if the Object3D has a parent and parent matrix was touched', () => {
    const parent = new Object3D();
    const child = new Object3D();
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
