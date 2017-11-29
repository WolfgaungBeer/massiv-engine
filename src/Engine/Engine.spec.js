import Engine from './';

// ===================================================
// check all properties of the object ================
// ===================================================

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

// ===================================================
// check all getters and setters of the object =======
// ===================================================


// ===================================================
// check the non-getter-setter functions of the object
// ===================================================
