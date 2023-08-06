export default class CollapseWidget {
    constructor (container) {
        this.collapseBtn = container.querySelector('.collapse-btn')
        this.textBox = container.querySelector('.text-box')
        this.height = `${this.textBox.getBoundingClientRect().height}px`
        this.textBox.style.height = this.height
    }

    init () {
        this.setHandlers()
    }

    setHandlers () {
        this.collapseBtn.addEventListener('click', () => {
            this.textBox.classList.toggle('collapsed')
            console.log(this.textBox.style.height)
            this.textBox.style.height = this.textBox.style.height !== '0px' ? 0 : this.height
        })
    }
}
