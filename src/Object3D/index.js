import v4 from 'uuid/v4';

export default class Object3D {

    constructor() {
        this.uuid = v4();
    }

    getUuid() {
        return this.uuid;
    }

}
