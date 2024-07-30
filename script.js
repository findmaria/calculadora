function Calculadora(){
    this.display = document.querySelector('.display');

    this.capturaCliques = () => {
        document.addEventListener('click', e => {
            const el = e.target;
            if (el.classList.contains('btn-num'))this.addNumDisplay(el);
            if (el.classList.contains('op'))this.addNumDisplay(el);
            if (el.classList.contains('clear'))this.clear();
            if (el.classList.contains('del'))this.del(el);
            if (el.classList.contains('equal'))this.realizaConta(el);
        });
    };

    //el.innerText adiciona o texto interno do botão na tela (display)

    this.addNumDisplay = el => this.display.value += el.innerText;
    this.clear = () => this.display.value = '';
    this.inicia = () => this.capturaCliques();

    this.del = () =>
        this.display.value = this.display.value.slice(0, -1);
}
const calculadora = new Calculadora();
calculadora.inicia();