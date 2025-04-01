
#ifdef GL_ES
precision highp float;
#endif

#include "lygia/generative/voronoise.glsl"

uniform vec2 u_mouse;
uniform float u_time;
uniform vec2 u_resolution;

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;

    vec3 color = vec3(0.5, 0.2, 0.6);

    color += voronoise( vec2(24.0*st), pow(2., sin(u_time)), pow(2., cos(u_time)) );

    if (st.x < 0.65) {
        color = vec3(1.0);  // white
    } elif (st. x < 0.75) {
        color = mix(color, white, 10.*(0.75-0.65))
    }

    gl_FragColor = vec4(color, 1.0);  
}
