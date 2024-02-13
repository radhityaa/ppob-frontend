import { Notyf } from "notyf";

const notyf = new Notyf({
    position: {
        x: 'center',
        y: 'top'
    }
})

const showNotification = (message, type = 'info') => {
    notyf.open({
        type: type,
        message: message
    })
}

export { showNotification }