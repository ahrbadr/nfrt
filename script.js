document.addEventListener('DOMContentLoaded', () => {
    const testBox = document.getElementById('js-test');
    
    // If this runs, the JS file is correctly linked
    testBox.style.color = '#4ade80'; 
    testBox.innerText = '✓ JavaScript is active';
    
    console.log("Site loaded successfully on nfrt.net");
});