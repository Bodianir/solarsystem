function sun() {
    document.getElementById("sun").innerHTML = "Нар нь 1.4м км диаметр-тай, 720,000км цагийн хурдтай эргэдэг, 4.5 тэрбум жилийн настай.";

}

document.getElementById('backButton').addEventListener('click', function () {

    window.history.back();
});
const img = document.querySelector(".sun");
const pointer = document.getElementById('pointer');

// Adjust the zoom scale and pointer size
const backgroundSize = 2; // Scale of the zoom effect, e.g., 2 for 2x zoom
const pointerSize = 200; // Size of the pointer in pixels

function showPointer(event) {
    const rect = img.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Show and position the pointer
    pointer.style.display = 'block';
    pointer.style.right = "50px"
    pointer.style.top = "300px"
    

    
    pointer.style.backgroundImage = `url('./sun.jpg')`;
 
    pointer.style.backgroundPosition = `-${x}px -${y}px`;
}

function hidePointer() {
    // Hide the pointer
    pointer.style.display = 'none';
}

// Add event listeners for mouse movement and mouse leave
img.addEventListener('mousemove', showPointer);
img.addEventListener('mouseleave', hidePointer);