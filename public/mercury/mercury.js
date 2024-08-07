function mercury() {
    document.getElementById("mercury").innerHTML = " Буд гараг нь 4,879 км диаметр-тэй , 170,505 км цагийн хурдтайгаар Нарыг 88 өдөрт нэг бүтэн тойрдог , 4.6 тэрбум жилийн настай.";

}
document.getElementById('backButton').addEventListener('click', function() {
   
    window.history.back();
});
const img = document.querySelector(".mercury");
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
    

    
    pointer.style.backgroundImage = `url('./mercury.jpg')`;
 
    pointer.style.backgroundPosition = `-${x}px -${y}px`;
}

function hidePointer() {
    pointer.style.display = 'none';
}

img.addEventListener('mousemove', showPointer);
img.addEventListener('mouseleave', hidePointer);