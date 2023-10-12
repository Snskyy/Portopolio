window.addEventListener("load", () => {
    // Select the loader element
    const loader = document.querySelector(".loader");
    
    console.log(loader);
    // Delay the hiding of the loader (1 second in this example)
    setTimeout(() => {
        loader.classList.add("loader--hidden");

        // Add an event listener for the transition end
        loader.addEventListener("transitionend", () => {
            // Remove the loader element after the transition ends
            loader.remove();
        });
    }, 1000); // 1 second (1000 milliseconds) delay
});