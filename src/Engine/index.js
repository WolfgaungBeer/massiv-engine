import EventEmitter from 'eventemitter3';
import Object3D from '../Object3D';

class Engine extends EventEmitter {

    constructor() {
        super();
        this.scene = new Object3D();
    }

    start() {
        this.emit('init', { scene: this.scene });
        this.emit('update', { scene: this.scene });
        this.emit('render', { scene: this.scene });
    }

}

export default Engine;
