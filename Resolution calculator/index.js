const messageDiv = document.getElementById('message');
const screenResolutionDisplay = document.createElement('div');
const browserResolutionDisplay = document.createElement('div');

setTimeout(() => {
    const screenWidth = screen.width;
    const screemHeight = screen.height;
    const browserWidth = window.innerWidth;
    const browerHeight = window.innerHeight;
    messageDiv.textContent = 'Calculation completed'
    screenResolutionDisplay.textContent = `Your screen resolution is ${screenWidth} x ${screemHeight}.`;
    messageDiv.appendChild(screenResolutionDisplay);
    browserResolutionDisplay.textContent = `Your browser resolution is ${browserWidth} x ${browerHeight}.`;
    messageDiv.appendChild(browserResolutionDisplay);
}, 5000)