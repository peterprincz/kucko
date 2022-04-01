const fadeInFromLeft = (elements:IntersectionObserverEntry[]) => {
    elements.forEach(entry => {

      // Is the element in the viewport?
      if (entry.isIntersecting) {
  
        // Add the fadeIn class:
        entry.target.classList.add("animate-fadeInFromLeft");
      } else {
  
        // Otherwise remove the fadein class
        entry.target.classList.remove("animate-fadeInFromLeft");
      }
    });
}

const fadeInFromRight = (elements:IntersectionObserverEntry[]) => {
    elements.forEach(entry => {

      // Is the element in the viewport?
      if (entry.isIntersecting) {
  
        // Add the fadeIn class:
        entry.target.classList.add("animate-fadeInFromRight");
      } else {
  
        // Otherwise remove the fadein class
        entry.target.classList.remove("animate-fadeInFromRight");
      }
    });
}

export {fadeInFromLeft, fadeInFromRight} ;