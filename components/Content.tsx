import Card from "./Card";
import { research } from "./research";
export default function Content() {
    return (
        <>
        {research.map((point) => (
            <Card
            key={point.id}
            time={point.time}
            id={point.id}
            title={point.title}
            details={point.details}
            refs={point.refs}
            />
        ))}
        </>
    )
}