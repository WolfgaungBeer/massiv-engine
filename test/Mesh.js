import { mat4 } from 'gl-matrix';
import { Object3D } from '../';
import vertexShaderSource from './VertexShader';
import fragmentShaderSource from './FragmentShader';

export default class Mesh extends Object3D {

    constructor() {
        super();
    }

    getVertexShaderSource() {
        return vertexShaderSource;
    }

    getFragmentShaderSource() {
        return fragmentShaderSource;
    }

    getVertexData() {
        return [
          0.0,  0.5, 0.0,
          0.5, -0.5, 0.0,
         -0.5, -0.5, 0.0
        ];
    }

}
