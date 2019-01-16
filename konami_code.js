const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];



function init() {
  let index = 0
<<<<<<< HEAD

  document.body.addEventListener("keydown", (e) => {
    const key = e.key

    index = (codes[index] === key) ? ++index : 0


=======
  
  document.body.addEventListener('keydown', function(e) => {
    const key = e.key;
    if (codes[index] === key) {
     index++
     index = 0;
>>>>>>> 8374a057b06b21a82f8fa16296c2773c599d0d1a
     if (index === codes.length) {
       window.alert("Hurray!");
       index = 0
     }

 });
 }
