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

    float red = voronoise( vec2(23.*st + 0.3*u_time), pow(2., sin(ts.x)), abs(0.5*sin(u_time)));
    float green = voronoise( vec2(25.*st -0.2*u_time), pow(2., sin(ts.y)), 1 - 0.3*cos(u_time));
    float blue = voronoise( vec2(26.*st +0.5*vec2(u_time, -u_time)), pow(2., cos(ts.x)), abs(0.4*cos(u_time)));
	
    vec3 color;
    if (st.x < 0.7) {
        color = vec3(1.0);  
    } else {
        color = vec3(0.7*red, 0.5*green, blue);
    }

    gl_FragColor = vec4(color, 1.0);  
}
