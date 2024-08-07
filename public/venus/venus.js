function venus() {
    document.getElementById("venus").innerHTML = "Баасан гараг нь 12,104 км диаметр тэй, 78,341км хурдтайгаар 243  өдөрт Нарыг нэг бүтэн тойрно, 4,6тэрбум жилийн настай  .";
    
}
document.getElementById('backButton').addEventListener('click', function() {
   
    window.history.back();
});
const img = document.querySelector(".venus");
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
    

    
    pointer.style.backgroundImage = `url('./venus surface.jpg')`;
 
    pointer.style.backgroundPosition = `-${x}px -${y}px`;
}

function hidePointer() {
    pointer.style.display = 'none';
}

img.addEventListener('mousemove', showPointer);
img.addEventListener('mouseleave', hidePointer);