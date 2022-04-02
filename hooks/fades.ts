

const fadeInFromLeft = (elements:IntersectionObserverEntry[]) => {
    elements.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add("animate-fadeInFromLeft");
      } else {
          entry.target.classList.remove("animate-fadeInFromLeft");
          entry.target.classList.remove("opacity-0");
      }
    });
}

const fadeInFromRight = (elements:IntersectionObserverEntry[]) => {
    elements.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fadeInFromRight");
      } else {
        entry.target.classList.remove("animate-fadeInFromRight");
        entry.target.classList.remove("opacity-0");

      }
    });
}

const fadeInFromBottom = (elements:IntersectionObserverEntry[]) => {
  elements.forEach(entry => {
    setTimeout(() => {
      const now:number = Date.now();
      if (entry.isIntersecting) {
        entry.target.setAttribute("last_time_animated", now.toString());
        entry.target.classList.add("animate-fadeInFromBottom");
      } else {
        const lastTimeStr:string|null = entry.target.getAttribute("last_time_animated");
        if(lastTimeStr != null) {
          const lastTimeAnimted:number = parseInt(lastTimeStr);
          if(now - lastTimeAnimted < 1000) {
            return;
          }
        }
        entry.target.classList.remove("animate-fadeInFromBottom");
        entry.target.classList.remove("opacity-0");
      }
    }, 1)

  });
}

export {fadeInFromLeft, fadeInFromRight, fadeInFromBottom} ;