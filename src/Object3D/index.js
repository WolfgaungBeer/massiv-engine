import v4 from 'uuid/v4';

export default class Object3D {

    constructor() {
        this.uuid = v4();
        this.name = 'Object3D';
        this.type = 'Object3D';
        this.parent = undefined;
        this.children = [];
    }

    getUuid() {
        return this.uuid;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getType() {
        return this.type;
    }

    setType(type) {
        this.type = type;
    }

    getParent() {
        return this.parent;
    }

    setParent(parent) {
        parent.children.push(this);
        this.parent = parent;
    }

    getChildren() {
        return this.children;
    }

    setChildren(children) {
        for (let i = 0; i < children.length; i++) {
            children[i].setParent(this);
        }
        this.children = children;
    }

    addChild(child) {
        child.setParent(this);
        this.children.push(child);
    }

    addChildren(children) {
        for (let i = 0; i < children.length; i++) {
            children[i].setParent(this);
        }
        this.children = this.children.concat(children);
    }

    getChildByName(name, recursive) {
        for (let i = 0; i < this.children.length; i++) {
            if (this.children[i].getName() === name) {
                return this.children[i];
            }

            if (recursive) {
                const childChild = this.children[i].getChildByName(name, recursive);
                if (childChild) return childChild;
            }

        }
        return undefined;
    }

    getChildrenByName(name, recursive) {
        let children = [];
        for (let i = 0; i < this.children.length; i++) {
            if (this.children[i].getName() === name) {
                children.push(this.children[i]);
            }

            if (recursive) {
                const childChildren = this.children[i].getChildrenByName(name, recursive);
                children = children.concat(childChildren);
            }

        }
        return children;
    }

    getChildrenByType(type, recursive) {
        let children = [];
        for (let i = 0; i < this.children.length; i++) {
            if (this.children[i].getType() === type) {
                children.push(this.children[i]);
            }

            if (recursive) {
                const childChildren = this.children[i].getChildrenByType(type, recursive);
                children = children.concat(childChildren);
            }

        }
        return children;
    }

}
