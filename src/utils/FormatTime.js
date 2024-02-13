export default function FormatTime(epochTome) {
    const miliseconds = epochTome * 1000
    const date = new Date(miliseconds)
    const formattedTime = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

    return formattedTime
}