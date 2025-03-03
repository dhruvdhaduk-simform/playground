"use strict";

const imgContainer = document.querySelector("#img-container");
const magnifier = document.querySelector("#magnifier");
const magnifiedResult = document.querySelector("#magnified-result");
const magnifiedImg = document.querySelector("#magnified-img");

function addEventListenersToImgContainer() {

    imgContainer.addEventListener("mouseenter", function(e) {
        magnifiedResult.style.opacity = 1;
        magnifiedImg.style.width = "500%"
        magnifier.style.display = "block";
    });
    
    imgContainer.addEventListener("mousemove", function(e) {
        let x = e.offsetX - (magnifier.offsetWidth / 2);
        let y = e.offsetY - (magnifier.offsetHeight / 2);

        if (e.target === magnifier) {
            x += magnifier.offsetLeft;
            y += magnifier.offsetTop;
        }
        
        x = Math.max(x, 0);
        y = Math.max(y, 0);
        
        x = Math.min(x, imgContainer.offsetWidth - (magnifier.offsetWidth));
        y = Math.min(y, imgContainer.offsetHeight - (magnifier.offsetHeight));
        
        magnifier.style.left = `${x}px`;
        magnifier.style.top = `${y}px`;

        magnifiedImg.style.left = `-${x * 5}px`;
        magnifiedImg.style.top = `-${y * 5}px`;
    });
    
    imgContainer.addEventListener("mouseleave", function(e) {
        magnifiedResult.style.opacity = 0;
        magnifiedImg.style.width = "100%"
        magnifier.style.display = "none";
        magnifiedImg.style.left = '';
        magnifiedImg.style.top = '';
    });
}

addEventListenersToImgContainer();