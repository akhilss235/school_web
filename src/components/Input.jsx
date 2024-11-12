import { useDispatch, useSelector } from "react-redux";
import clockIcon from "../img/clock.png";
import "../Styles/input.css";
import { toCamelCase } from "../utils/function";
import { RadioButton } from "./RadioButton";
import { onChange, selectAllModalData } from "../features/modal/modalSlice";

export const Input = ({
  label,
  type = "text",
  value = "",
  // onChange,
  options,
}) => {
  const dispatch = useDispatch()
  const data = useSelector(selectAllModalData)
  const handleChange = (e)=>{
    dispatch(onChange({name:e.target.name, value:e.target.value}))
  }
  const clockContent = ["start time", "end time", "from", "to"];
  const name = toCamelCase(label)
  
  return (
    <div
      className={`d-flex ${type === "radio" ? "flex-row" : "flex-column"} ${
        type === "radio" ? "gap-4" : "gap-2"
      }`}
      style={{ position: "relative", width: "100%" }}
    >
      <label className="fw-medium">{label}</label>
      {type === "radio" ? (
        <RadioButton label={label} options={options} />
      ) : (
        <input
          type={type}
          value={data[name]}
          onChange={handleChange}
          className="subjectInput"
          name={name}
        />
      )}

      {clockContent?.includes(label.toLowerCase()) && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: "10px",
            transform: "translateY(-50%)",
          }}
        >
          <img src={clockIcon} alt="clock-icon" className="clock-img" />
        </div>
      )}
    </div>
  );
};
