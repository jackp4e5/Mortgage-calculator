export const validationFields = (e) => {
  if (e.target.value === "" || e.target.checked === false) {
    e.target.style.borderColor = "red";
    e.target.parentNode.children[1].style.backgroundColor = "red";
    e.target.parentNode.children[1].style.color = "white";
    e.target.parentNode.parentNode.childNodes[2].style.display = "block";
    console.log(e.target.parentNode.children[1]);
    
  } else {
    e.target.style.borderColor = "";
    e.target.parentNode.children[1].style.backgroundColor = "";
    e.target.parentNode.children[1].style.color = "";
    e.target.parentNode.parentNode.childNodes[2].style.display = "";

  }
};
