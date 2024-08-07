function uranus() {
    document.getElementById("uranus").innerHTML = "Тэнгэрийн ван гараг нь 120,500 км диаметр тэй , 24,607км цагийн хурдтайгаар 84 жилд Нарыг нэг бүтэн тойрно.";
  
}
document.getElementById('backButton').addEventListener('click', function() {
   
    window.history.back();
});
const img = document.querySelector(".uranus");
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
    

    
    pointer.style.backgroundImage = `url('./uranus.webp')`;
 
    pointer.style.backgroundPosition = `-${x}px -${y}px`;
}

function hidePointer() {
    pointer.style.display = 'none';
}

img.addEventListener('mousemove', showPointer);
img.addEventListener('mouseleave', hidePointer);