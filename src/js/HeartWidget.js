export default class HeartWidget {
    constructor (container) {
        this.container = container
        this.heartBtn = container.querySelector('.heart-btn')
    }

    init () {
        this.setHandlers()
    }

    setHandlers () {
        this.heartBtn.addEventListener('click', () => {
            this.createHeart()
        })
    }

    createHeart () {
        const div = document.createElement('div')
        div.classList.add('heart')

        const animationNumber = Math.ceil(Math.random() * 4)
        div.style.animationName = `heart${animationNumber}`

        this.container.appendChild(div)
        div.addEventListener('animationend', () => {
            div.remove()
        })
    }
}
