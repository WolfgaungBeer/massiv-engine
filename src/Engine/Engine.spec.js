import Engine from './';

test('it should', () => {
    const test = new Engine();

    test.on('init', (state) => {
        // console.log('Engine init: ', state);
    });
    test.on('update', (state) => {
        // console.log('Engine update: ', state);
    });
    test.on('render', (state) => {
        // console.log('Engine render: ', state);
    });

    test.start();
});
