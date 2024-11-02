import { BsDownload } from "react-icons/bs";
import Icon from "./SvgComponent";

export const DocumentCard = ({ data}) => {
    return(
    <div className="d-flex flex-row gap-3 align-items-center justify-content-between py-2 px-3" style={{border: "1px solid #D1EAFF", borderRadius:"15px"}}>
        <div className="d-flex flex-row gap-3 align-items-center">
            <Icon iconName={"Pdf"} />
            <span>{data?.name}</span>
        </div>
        <a href={data?.downloadUrl} download className="d-flex align-items-center justify-content-center" style={{width:"40px", height:"40px", borderRadius:"10px", backgroundColor:"#F6EDE6"}}>
            <BsDownload size={"20px"} color="#A8550E" />
        </a>
    </div>
)
};