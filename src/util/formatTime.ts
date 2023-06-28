const formatNumber = (number: number, digits: number) => {
    return number.toString().padStart(digits, '0');
}

export default function formatTime(time: number) {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliSec = time % 1000;

    let finalTime = `${formatNumber(minutes, 2)}:${formatNumber(seconds, 2)}.${formatNumber(milliSec, 3)}`;

    if (hours !== 0) {
        finalTime = `${formatNumber(hours, 2)}:` + finalTime;
    }
    return finalTime;
}