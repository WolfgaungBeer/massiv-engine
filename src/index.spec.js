import * as massiv from './';

test('it should export the Object3D class', () => {
    expect(massiv).toHaveProperty('Object3D');
});

test('it should export the PerspectiveCamera class', () => {
    expect(massiv).toHaveProperty('PerspectiveCamera');
});

test('it should export the OrthographicCamera class', () => {
    expect(massiv).toHaveProperty('OrthographicCamera');
});
