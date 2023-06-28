import LappedTime from "../components/LappedTime";

export default function LapList({ laps, deleteLapTime }: { laps: { timeStamp: number }[], deleteLapTime: (sno: number) => void }) {

    if (laps.length) {
        return (
            <div className="flex flex-col-reverse mt-10 mx-24">
                {laps.map((value, index) => {
                    return <LappedTime timeStamp={value.timeStamp} sno={index + 1} deleteLapTime={deleteLapTime} key={index} />
                })}
            </div>
        )
    }
}
