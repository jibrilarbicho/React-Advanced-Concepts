import { useState } from "react";
import CabinTable from "../features/cabins/CabinTable";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
function Cabins() {
  const [ShowForm, setShowForm] = useState(false);
  // useEffect(function () {
  //   getCabins().then((data) => console.log("data", data));
  // }, []);
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter/sort</p>
      </Row>
      <Row>
        <CabinTable />
        <Button onClick={() => setShowForm((show) => !show)}>
          Add new Cabin
        </Button>
        {ShowForm && <CreateCabinForm />}
      </Row>
    </>
  );
}

export default Cabins;
