let share_container = document.querySelector('.share-container');
let footer = document.querySelector('.footer');

function hideShare(){
  share_container.style.display = "none";
  footer.style.display = "grid";
}

function showShare(){
  footer.style.display = "none";
  share_container.style.display = "grid";
}