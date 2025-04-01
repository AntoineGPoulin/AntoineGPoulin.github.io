#version 300 es

#ifdef GL_ES
precision highp float;
#endif

// Declare uniforms for resolution, time, and mouse position
uniform vec2 u_mouse;
uniform float u_time;
uniform vec2 u_resolution;

// Declare the output variable for the fragment color
out vec4 fragColor;

void main() {
    // Normalize fragment coordinates (pixel coordinates to range [0, 1])
    vec2 st = gl_FragCoord.xy / u_resolution;

    // Default color
    vec3 color = vec3(0.5, 0.2, 0.6);
    
    // Change color based on x coordinate
    if (st.x < 0.7) {
        color = vec3(1.0);  // white
    }

    // Set the fragment color
    fragColor = vec4(color, 1.0);  // Set alpha to 1.0 for full opacity
}
