"use strict";

const content = document.querySelector("#content");
const scrollThumbContainer = document.querySelector("#scrollthumb-container");
const slider = document.querySelector("#slider");

function calculateActualWidth(ele) {
    const computedStyles = getComputedStyle(ele);
    return ele.offsetWidth - (parseInt(computedStyles.paddingLeft) + parseInt(computedStyles.paddingRight));
}

function syncContentScroll() {
    content.scrollLeft = slider.value;
}

function syncSlider() {
    slider.max = (content.scrollWidth - content.offsetWidth);
    slider.value = content.scrollLeft;
}

window.addEventListener("resize", function() {
    
    const scrollThumbAreaWidth = calculateActualWidth(scrollThumbContainer);

    const scrollThumbWidth = (scrollThumbAreaWidth * content.offsetWidth) / content.scrollWidth;

    slider.style.setProperty('--thumb-width', `${scrollThumbWidth}px`);
    syncSlider();
});
window.dispatchEvent(new Event("resize"));


content.addEventListener("scroll", syncSlider);

function attachEventHandlersToSlider() {
    let isDragging = false;

    slider.addEventListener("mousedown", function() {
        isDragging = true;
    });
    slider.addEventListener("mousemove", function() {
        if (isDragging)
            syncContentScroll();
    });
    slider.addEventListener("mouseup", function() {
        isDragging = false;
    });

    slider.addEventListener("touchstart", function() {
        isDragging = true;
    });
    slider.addEventListener("touchmove", function() {
        if (isDragging)
            syncContentScroll();
    });
    slider.addEventListener("touchend", function() {
        isDragging = false;
    });
    
    slider.addEventListener("change", function() {
        isDragging = false;
        syncContentScroll();
    });
}

attachEventHandlersToSlider();
