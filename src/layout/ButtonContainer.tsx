import Button from "../components/Button";

interface propTypes {
    running: boolean,
    allZero: boolean,
    timeAction: (action: "Start" | "Stop" | "Reset" | "Lap") => void
}

export default function ButtonContainer(props: propTypes) {
    const { running, allZero, timeAction } = props

    return (
        <div className="flex justify-center my-11">
            {running ?
                <>
                    <Button onClick={() => timeAction("Lap")} className="bg-green-700 text-white w-60 hover:bg-green-600" >Lap</Button>
                    <Button onClick={() => timeAction("Stop")} className="bg-red-800 text-white w-60 hover:bg-red-700" >Stop</Button>
                </>
                :
                <>
                    {!allZero &&
                        <Button onClick={() => timeAction("Reset")} className="bg-blue-800 text-white w-60 hover:bg-blue-700">Reset</Button>
                    }
                    <Button onClick={() => {
                        allZero ? timeAction("Start") : timeAction("Start")
                    }} className={`bg-black text-white ${allZero ? 'w-[17.5rem]' : 'w-60'} hover:bg-slate-800`}>
                        {allZero ? 'Start' : 'Resume'}
                    </Button>
                </>
            }
        </div>
    )
}