
#ifdef GL_ES
precision highp float;
#endif

uniform vec2 u_mouse;
uniform float u_time;
uniform vec2 u_resolution;

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;

    vec3 color = vec3(0.5, 0.2, 0.6);
    
    if (st.x < 0.7) {
        color = vec3(1.0);  // white
    }

    gl_fragColor = vec4(color, 1.0);  // Set alpha to 1.0 for full opacity
}
