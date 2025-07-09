import {BusDetails} from "./busQueries";

function getTimeToArrival(bus: BusDetails) {
    return Math.floor(bus.timeToStation / 60);
}

const ArrivalTable = ({busDetails}:{busDetails:BusDetails[]|undefined}): React.ReactElement => {
    console.log("ArrivalTable", busDetails);
    if(busDetails==undefined){
        return <></>
    }
    if(busDetails.length == 0){
        return <>Sorry nothing running!</>
    }

    return <table>
        <tbody>
            <tr>
                <td>
                    Destination
                </td>
                {busDetails.map(busDetail => <td>{busDetail.destinationName}</td>)}
            </tr>
            <tr>
                <td>
                    Lines
                </td>
                {busDetails.map(busDetail => <td>{busDetail.lineName}</td>)}
            </tr>
            <tr>
                <td> Arrives In (minutes)</td>
                {busDetails.map(busDetail => <td>{getTimeToArrival(busDetail)}</td>)}
            </tr>
        </tbody>


    </table>
}

export {ArrivalTable};