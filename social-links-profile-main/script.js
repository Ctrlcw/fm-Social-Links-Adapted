console.log('Script carregado com sucesso!');

// Adicionando funcionalidade aos botões
const buttons = document.querySelectorAll('.container ul li button');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    alert(`${button.innerText} clicado!`);
  });
});

document.getElementById("chk").addEventListener("change", function () {
    const themeIcon = document.getElementById("themeIcon");
    if (this.checked) {
        themeIcon.src = "https://img.icons8.com/sf-black-filled/64/moon-symbol.png";
        themeIcon.alt = "Ícone de lua para modo escuro";
        document.body.classList.add("dark-mode");
    } else {
        themeIcon.src = "https://img.icons8.com/sf-black-filled/64/sun.png";
        themeIcon.alt = "Ícone de sol para modo claro";
        document.body.classList.remove("dark-mode");
    }
});
document.getElementById("chk").addEventListener("change", function () {
    const themeIcon = document.getElementById("themeIcon");
    if (this.checked) {
        themeIcon.src = "https://img.icons8.com/sf-black-filled/64/moon-symbol.png";
        themeIcon.alt = "Ícone de lua para modo escuro";
        document.body.classList.add("dark-mode");
    } else {
        themeIcon.src = "https://img.icons8.com/sf-black-filled/64/sun.png";
        themeIcon.alt = "Ícone de sol para modo claro";
        document.body.classList.remove("dark-mode");
    }
});

function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  
  document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

// Atualiza o relógio imediatamente e, em seguida, a cada segundo
updateClock(); // Chama uma vez para exibir instantaneamente ao carregar
setInterval(updateClock, 1000);
