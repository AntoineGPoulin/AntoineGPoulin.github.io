#ifdef GL_ES
precision highp float;
#endif

#include "lygia/generative/voronoise.glsl"

uniform vec2 u_mouse;
uniform float u_time;
uniform vec2 u_resolution;

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;
    vec2 ts = u_mouse.xy / u_resolution;

    float red = voronoise( 23.*st, ts.x,  0.);
    float green =voronoise( 25.*st, 1.- ts.x, 0.);
    float blue = voronoise( 26.*st, ts.y, 0.);
	
    vec3 color;
    if (st.x < 0.7) {
        color = vec3(1.0);  
    } else {
        color = vec3(0.5 + 0.2*red, 0.25 + 0.1 * green, 0.5 + 0.2*blue);
    }

    gl_FragColor = vec4(color, 1.0);  
}
