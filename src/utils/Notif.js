import { Notyf } from "notyf";

const notyf = new Notyf({
    position: {
        x: 'center',
        y: 'top'
    },
    types: [
        {
            type: 'info',
            background: '#7C3AED',
            position: {
                x: 'center',
                y: 'bottom'
            }
        }
    ]
})

const showNotification = (message, type = 'info') => {
    notyf.open({
        type: type,
        message: message
    })
}

export { showNotification }