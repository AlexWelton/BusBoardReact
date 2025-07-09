import React, {useState} from 'react';
import {showArrivalsByPostCode} from './busQueries'
import {ArrivalTable} from './ArrivalTable'

async function getBuses(postcode: string): Promise<string> {
  // very basic testing string, you'll likely return a list of strings or JSON objects instead!
  const busDetails = await showArrivalsByPostCode(postcode);
  return "Bus details: " + busDetails;
}

function App(): React.ReactElement {
  const [postcode, setPostcode] = useState<string>("");
  const [tableData, setTableData] = useState<string>("");

  async function formHandler(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault(); // to stop the form refreshing the page when it submits
    const data = await getBuses(postcode);
    setTableData(data);
  }

  function updatePostcode(data: React.ChangeEvent<HTMLInputElement>): void {
    setPostcode(data.target.value)
  }

  return <>
    <h1> BusBoard </h1>
    <form action="" onSubmit={formHandler}>
      <label htmlFor="postcodeInput"> Postcode: </label>
      <input type="text" id="postcodeInput" onChange={updatePostcode}/>
      <input type="submit" value="Submit"/>
    </form>
    < ArrivalTable />
    {JSON.stringify(tableData, null, 4) /* this will just render the string - try creating a table 'dynamically'! */}
  </>;
}

export default App;