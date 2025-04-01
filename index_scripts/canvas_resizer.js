// canvas_resizer.js given by ChatGPT
window.onload = function() {
    const canvas = document.querySelector('canvas');
    const glsl = new GlslCanvas(canvas);
    
    // Fixing canvas resolution based on device pixel ratio
    function resizeCanvas() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        canvas.width = width * window.devicePixelRatio;
        canvas.height = height * window.devicePixelRatio;

        // Optional: update canvas CSS to match the resolution
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';

        glsl.resizeCanvas();
    }

    // Call the function on window resize
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas(); // Initial resize when page loads
}