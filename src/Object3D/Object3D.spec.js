import Object3D from './';

// ===================================================
// check all properties of the object ================
// ===================================================

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

// ===================================================
// check all getters and setters of the object =======
// ===================================================

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

// ===================================================
// check the non-getter-setter functions of the object
// ===================================================

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
