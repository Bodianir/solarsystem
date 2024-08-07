function mars() {
    document.getElementById("mars").innerHTML = "Ангараг гараг нь 6,791 км диаметр тэй  , 86,871км цагийн хурдтайгаар нарыг 687 өдөрт Нарыг нэг бүтэн тойрно, 4,6 тэрбум жилийн настай";
    
}
document.getElementById('backButton').addEventListener('click', function() {
   
    window.history.back();
});
const img = document.querySelector(".mars");
const pointer = document.getElementById('pointer');


const backgroundSize = 2; 
const pointerSize = 200; 

function showPointer(event) {
    const rect = img.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Show and position the pointer
    pointer.style.display = 'block';
    pointer.style.right = "50px"
    pointer.style.top = "300px"
    

    
    pointer.style.backgroundImage = `url('./mars2.webp')`;
 
    pointer.style.backgroundPosition = `-${x}px -${y}px`;
}

function hidePointer() {
    pointer.style.display = 'none';
}

img.addEventListener('mousemove', showPointer);
img.addEventListener('mouseleave', hidePointer);