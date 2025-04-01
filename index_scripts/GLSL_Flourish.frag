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
    vec2 norm = 10.*(ts - vec2(0.5));

    float red = voronoise( 70.*st + vec2(norm.x, norm.y), ts.x,  0.1);
    float green =voronoise( 80.*st + vec2(norm.y, -norm.x), 1.- ts.x, 0.1);
    float blue = voronoise( 90.*st + 5.*vec2(cos(u_time), sin(u_time)), ts.y, 0.1);
	
	float param = clamp( 10.*(st.x - 0.65), 0., 1.);
    vec3 color = (1. + 0.1*cos(u_time)) *vec3(0.5 + 0.5*sin(u_time)*red, 0.25 + 0.5*cos(st.x) * green, 0.5 + 0.3* sin(st.x+st.y) * blue);

    gl_FragColor = vec4(color, param);  
}
