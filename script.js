function clicou(){
    const html = document.documentElement
    html.classList.toggle("light")
  
    const img = document.querySelector("#profile img")
  
    if (html.classList.contains("light")) {
      img.setAttribute("src", "foto uber.jpg")
    } else {
      img.setAttribute("src", "foto perfil.jpg")
    }
  }