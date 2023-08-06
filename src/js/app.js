import CollapseWidget from './CollapseWidget'
import CallBackChatWidget from './CallBackChatWidget'
import HeartWidget from './HeartWidget'

document.addEventListener('DOMContentLoaded', () => {
    const collapseContainer = document.querySelectorAll('.collapse')
    collapseContainer.forEach((container) => {
        const collapseWidget = new CollapseWidget(container)
        collapseWidget.init()
    })

    const callBackChatContainer = document.querySelector('.callback-chat')
    const callbackChatWidget = new CallBackChatWidget(callBackChatContainer)
    callbackChatWidget.init()

    const heartsContainer = document.querySelector('.hearts')
    const heartsWidget = new HeartWidget(heartsContainer)
    heartsWidget.init()
})
