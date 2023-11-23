const innerRectangles = document.querySelectorAll('.rectangles');

innerRectangles.forEach(rectangle => {

    const content = rectangle.querySelector('.content');
    const img = rectangle.querySelector('img');
    const title = rectangle.querySelector('h3');
    const description = rectangle.querySelector('p');

    rectangle.addEventListener('mouseenter', () => {
        innerRectangles.forEach(rect => {
            if (rect !== rectangle) {
                rect.style.transition = 'all 1s';
                rect.style.opacity = '0'; 
            }
        });
        rectangle.style.transition = 'all 1s';
        rectangle.style.width = '100%';
        rectangle.style.height = '100%';
        rectangle.style.borderRadius = "20px"

        img.style.height = '55%';
        img.style.width = '98%';
        img.style.marginTop = "1%"; 
        img.style.borderRadius = "15px";

        title.style.fontSize = '3.5vh';
        title.style.marginTop = "20px";

        description.style.display = 'block';
        description.style.marginTop = "20px";
    });

    rectangle.addEventListener('mouseleave', () => {
        innerRectangles.forEach(rect => {
            rect.style.transition = 'all 1s';
            rect.style.opacity = '1'; 
            rect.style.width = '49.5%';
            rect.style.height = '49.5%';
            rect.style.borderRadius = "";

            img.style.width = '100%';
            img.style.height = '100%';
            img.style.borderRadius = "";
            img.style.marginTop = "";

            title.style.fontSize = ''; 
            title.style.marginTop = "";

            description.style.display = ''; 
            description.style.marginTop = "";
        });
    });
});


