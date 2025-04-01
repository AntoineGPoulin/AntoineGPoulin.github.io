// shaderLoader.js, given by ChatGPT to help resolveLygia.

async function loadShader() {
    // Fetch and resolve the external fragment shader
    const fragSource = await fetch('index_scripts/GLSL_Flourish.frag').then(res => res.text()).then(resolveLygia);
  
    // A basic inline vertex shader
    const vertSource = `
      attribute vec3 position;
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `;
  
    // Apply the shaders to the canvas
    const canvas = document.querySelector('.glslCanvas');
    const glsl = new GLSLCanvas(canvas);
    glsl.load(vertSource, fragSource);
  }
  
  // Load the shaders when the page is ready
  window.onload = loadShader;