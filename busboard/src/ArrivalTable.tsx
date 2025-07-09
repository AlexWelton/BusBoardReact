import {BusDetails} from "./busQueries";

function getTimeToArrival(bus: BusDetails) {
    return Math.floor(bus.timeToStation / 60);
}

const ArrivalTable = ({busDetails}:{busDetails:BusDetails[]}): React.ReactElement => {
    console.log("ArrivalTable", busDetails);
    return <ul>
        {busDetails.map(busDetail=><li>{busDetail.destinationName} - Line {busDetail.lineName} - {getTimeToArrival(busDetail)} minutes </li>)}
    </ul>
}

export {ArrivalTable};