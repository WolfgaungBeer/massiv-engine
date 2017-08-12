import { mat4 } from 'gl-matrix';
import { Transform } from '../';
import vertexShaderSource from './VertexShader';
import fragmentShaderSource from './FragmentShader';

export default class Mesh extends Transform {

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
