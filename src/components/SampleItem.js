import strawberry from "../images/strawberry.png";
import "./SampleItem.css";

function SampleItem() {
  return (
    <h3 className="sample-item">
      {" "}
      This is a sample item! <img src={strawberry} width="50" height="50" />
    </h3>
  );
}

export default SampleItem;
