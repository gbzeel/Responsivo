const elemento = (id) => document.getElementById(id);

  elemento('hamburguer').addEventListener('click', () => {
    elemento('myNav').style.width = '100%';
  })

  elemento('closebtn').addEventListener('click', () => {
    elemento('myNav').style.width = '0%';
  })