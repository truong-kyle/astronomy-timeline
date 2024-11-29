import Card from "./Card";
import { research } from "./research";
export default function Content() {
    return (
        <>
        <h1 className="text-2xl w-1/2 mb-[2500px] p-10 mt-10 bg-green-400/50 rounded-2xl">Start of the Universe</h1>
        {research.map((point) => (
            <Card
            key={point.id}
            time={point.time}
            id={point.id}
            title={point.title}
            details={point.details}
            refs={point.refs}
            gap={point.gap}
            image={point.image}
            />
        ))}
        <h1 className="text-2xl w-1/2 mb-[2500px] p-10 mt-10 bg-green-400/50 rounded-2xl">Today</h1>
        </>
    )
}