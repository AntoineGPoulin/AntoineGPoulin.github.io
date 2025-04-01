#version 300 es

#ifdef GL_ES
precision highp float;
#endif

in vec4 gl_FragCoord; 
out vec4 fragColor;  // Define output variable

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution; // Use gl_FragCoord to get fragment coordinates

    vec3 color = vec3(0.5, 0.2, 0.6);
    if (st.x < 0.7) {
        color = vec3(1.0);
    }

    fragColor = vec4(color, 1.0);  // Output the color to fragColor (not gl_FragColor)
}
