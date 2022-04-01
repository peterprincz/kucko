const fadeInFromLeft = (elements:IntersectionObserverEntry[]) => {
    elements.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add("animate-fadeInFromLeft");
      } else {
          entry.target.classList.remove("animate-fadeInFromLeft");
      }
    });
}

const fadeInFromRight = (elements:IntersectionObserverEntry[]) => {
    elements.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fadeInFromRight");
      } else {
        entry.target.classList.remove("animate-fadeInFromRight");
      }
    });
}

const fadeInFromBottom = (elements:IntersectionObserverEntry[]) => {
  elements.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fadeInFromBottom");
    } else {
      entry.target.classList.remove("animate-fadeInFromBottom");
    }
  });
}

export {fadeInFromLeft, fadeInFromRight, fadeInFromBottom} ;