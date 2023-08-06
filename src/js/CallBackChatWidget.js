export default class CallBackChatWidget {
    constructor (container) {
        this.callbackWindow = container.querySelector('.callback-window')
        this.closeButton = container.querySelector('.callback__close')
        this.redButton = container.querySelector('.red-button')
    }

    init () {
        this.setHandlers()
    }

    setHandlers () {
        this.closeButton.addEventListener('click', () => {
            this.callbackWindow.classList.toggle('closed')
            this.redButton.classList.toggle('closed')
        })

        this.redButton.addEventListener('click', () => {
            this.callbackWindow.classList.toggle('closed')
            this.redButton.classList.toggle('closed')
        })
    }
}
