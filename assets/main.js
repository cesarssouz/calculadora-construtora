function Calculadora() {
    this.display = document.querySelector(".display")

    this.inicia = () => {
        this.capClick()
        this.capEnter()
    }

    this.capEnter = () => {
        this.display.addEventListener('keypress', e => {
            if (e.key === 'Enter') {
                this.resul()
            }
        })
    }

    this.capClick = () => {
        document.addEventListener('click', event => {
            const el = event.target
            if (el.classList.contains('btn-numero')) this.addNum(el)
            if (el.classList.contains('btn-clear')) this.clear()
            if (el.classList.contains('btn-del')) this.delete()
            if (el.classList.contains('btn-el')) this.resul()
        })
    }

    this.addNum = el => {
        this.display.value += el.innerText
        this.display.focus() // corrigido aqui
    }

    this.clear = () => this.display.value = ''

    this.delete = () => this.display.value = this.display.value.slice(0, -1)

    this.resul = () => {
        try {
            const conta = eval(this.display.value)

            if (conta === undefined || conta === null) {
                alert("Conta inválida")
                return
            }

            this.display.value = conta
        } catch (e) {
            alert("Conta inválida")
        }
    }
}

const calculadora = new Calculadora()
calculadora.inicia()
