import infinitySpinner from "../../assets/svgs/infinity_spinner.svg";
export default function InfinySpinner() {
    return(
        <img style={{filter: "drop-shadow(0 0 5px blue)",}} className="d-block mx-auto" src={infinitySpinner} alt="infinity spinner" />
    )
};
