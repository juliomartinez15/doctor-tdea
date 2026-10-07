import { Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Consultation from "../pages/Consultation";
import Doctors from "../pages/Doctors";

export default function RouterPublic() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/consultation" element={<Consultation />} />
            <Route path="/doctors" element={<Doctors />} />
        </Routes>
    )
}