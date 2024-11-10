import "bootstrap/dist/css/bootstrap.min.css"
import './e.css'
import Navv from "./Navv"
import Banner from "./Banner"
import Menu from "./Menu"
import Pick from "./Pick"
import Comments from "./Comments"
function Pizza() {
    return (
        <div className="wholebody">
            <Navv />
            <Banner />
            <Menu />
            <Pick />
            <Comments />
            <div className="text-center my-3 small text-dark">Copyright 2024-2025</div>
        </div>
    )
}
export default Pizza