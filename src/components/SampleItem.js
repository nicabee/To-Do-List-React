import strawberry from "../images/strawberry.png";
import "./SampleItem.css";

function SampleItem(props) {
  return (
    <h3 className="sample-item">
      This is a sample item! <br /> Hello, {props.name} <br />
      <img src={strawberry} width="50" height="50" />
    </h3>
  );
}

export default SampleItem;
