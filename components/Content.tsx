import Card from "./Card";
import { research } from "./research";
export default function Content() {
    return (
        <>
        <div className=" w-1/2 mb-[2000px] p-10 mt-10 bg-green-400/50 rounded-2xl">

        <h1 className="text-2xl">Start of the Universe</h1>
        <h2 className="italic">14 Billion Years Ago</h2>
        </div>
        {research.map((point) => (
            <>
            <Card
            key={point.id}
            time={point.time}
            id={point.id}
            title={point.title}
            details={point.details}
            refs={point.refs}
            image={point.image}
            />
            <div className={`h-${point.gap}`}></div>
            </>
        ))}
        <h1 className="text-2xl w-1/2 p-10 mt-10 bg-green-400/50 rounded-2xl">Today</h1>
        </>
    )
}