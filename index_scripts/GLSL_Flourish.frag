#ifdef GL_ES
precision highp float;
#endif

#include "lygia/generative/voronoi.glsl"

uniform vec2 u_mouse;
uniform float u_time;
uniform vec2 u_resolution;

void main() {
    vec2 st = 4. * gl_FragCoord.xy / u_resolution - vec2(3,0.);
    vec2 ts = u_mouse.xy / u_resolution;
    
    vec3 random = voronoi(st *(20.) - 2.* vec2(u_time,0.), ts.y);
	
    vec3 color;
    float alpha = clamp((st.x - (0.9 - random.x))*abs((st.x - (0.9 - random.y))), 0., 1.);
    color = vec3(0.3 + 0.5 * ts.x, 0.05 + 0.2 * ts.x, 0.3 + 0.5 * ts.x) + 0.2 * random;

    
    gl_FragColor = vec4(color, alpha);  
}
