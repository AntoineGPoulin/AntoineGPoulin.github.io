// shaderLoader.js, given by ChatGPT to help resolveLygia.

async function loadShader() {
    // Fetch and resolve the external fragment shader
    const fragSource = await fetch('index_scripts/GLSL_Flourish.frag').then(res => res.text()).then(resolveLygia);
  
    // A basic inline vertex shader
    const vertSource = `
      #version 300 es
      in vec4 a_position;
       main() {
        gl_Position = a_position;
      } 
    `;

    console.log('Hello')
    // Apply the shaders to the canvas
    const canvas = document.querySelector('.glslCanvas');
    const glsl = new GlslCanvas(canvas);
    console.log('yo')
    glsl.load(vertSource, fragSource);
    console.log('Helloagain')
  }
  
  if (!gl) {
    console.error("WebGL not supported in this browser.");
  } else {
    // For WebGL 1.0 (GLSL 1.10) or WebGL 2.0 (GLSL 3.00), check the version
    const glVersion = gl.getParameter(gl.VERSION);
    console.log("WebGL Version:", glVersion);
  
    if (gl.getParameter(gl.VERSION).indexOf("WebGL 2.0") !== -1) {
      console.log("You're using WebGL 2.0, which supports GLSL 3.00.");
    } else {
      console.log("You're using WebGL 1.0, which supports GLSL 1.10.");
    }
    
    // Optionally: Check the GLSL version used
    const glslVersion = gl.getExtension("WEBGL_debug_renderer_info");
    if (glslVersion) {
      console.log("GLSL Version:", gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT).precision);
    }
  }

  // Load the shaders when the page is ready
  window.onload = loadShader;