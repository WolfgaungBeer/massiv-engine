const shader =
`#version 300 es

in vec3 position;

uniform mat4 mvp;

void main() {
  gl_Position = mvp * vec4(position, 1.0);
}
`;

export default shader;
