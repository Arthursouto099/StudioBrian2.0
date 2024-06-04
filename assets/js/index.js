

function menu() {

    const x = document.querySelector("nav");
            if (x.style.display === "none") {
              x.style.display = "block";
            } else {
              x.style.display = "none";
            }
          
    }


    const myObserver = new IntersectionObserver( (entries) => {
      entries.forEach( (entry) => {
          if(entry.isIntersecting  = true)  {
              entry.target.classList.add('show')
          }
  
          else {
              entry.target.classList.remove('show')
          }
      })
  })
  
  const webAnimation = document.querySelectorAll(".animation-web") 
  
  
  webAnimation.forEach(element => {
      myObserver.observe(element)
  });


