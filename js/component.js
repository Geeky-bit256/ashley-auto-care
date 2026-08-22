async function loadComponent(id, file){
  
  const element = document.getElementById(id);
  
  const res = await fetch(file);
  const html = await res.text();
  
  console.log(html)
  
  element.innerHTML = html;
  
}

loadComponent("header", "components/header.html");
loadComponent("cta", "components/cta.html");
loadComponent("footer", "components/footer.html");