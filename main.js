$(document).ready(() => {

  $.scrollIt({
    topOffset: -70,
    activeClass: 'nav-active', 
  });

  // navbar 
  const navLinks = $(".nav-item")
  navLinks.on("click", () => {
    $(".navbar-collapse").removeClass("show")
  })

  // footer
  const footer_date = $(".footer-year")
  const current_year = new Date().getFullYear()
  footer_date.text(current_year)

})