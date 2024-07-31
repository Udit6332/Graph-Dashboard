import style from "./sidebar.module.css"

// ### Importing Icon's
import { FaChartLine } from "react-icons/fa";
import { MdHomeWork } from "react-icons/md";
import { FaBoxOpen } from "react-icons/fa6";
import { FaBox } from "react-icons/fa6";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaTruckMoving } from "react-icons/fa";
import { GiShop } from "react-icons/gi";
import { AiTwotoneShop } from "react-icons/ai";
import { FaCalculator } from "react-icons/fa6";
import { TbReportSearch } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";

const Sidebar = () => {
  return (
    <div id={style.Dashbord}>
      <div id={style.font}>
        <div id={style.dash}> 
          <FaChartLine />
          <p id={style.iconchart}>Dashboard</p>
        </div>

        <div>
          <MdHomeWork />
          <p>Inventory</p>
        </div>

        <div>
          <FaBoxOpen />
          <p>Order</p>
        </div>

        <div>
          <FaBox />
          <p>Returns</p>
        </div>
        <div>
          <BsFillPeopleFill />
          <p>Customers</p>
        </div>
        <div>
          <FaTruckMoving />
          <p>Shipping</p>
        </div>
        <div>
          <GiShop />
          <p>Channel</p>
        </div>
        <div>
          <AiTwotoneShop />
          <p>Integrations</p>
        </div>
        <div>
          <FaCalculator/>
          <p>
            <select name="" id="">
              <option value="calculators">Calculators</option>
            </select>
          </p>
        </div>
        <div>
        <TbReportSearch/>
          <p>
            <select name="" id="">
              <option value="report">Report</option>
            </select>
          </p>
        </div>
        <div>
          <IoMdSettings/>
          <p>
            <select name="" id="">
              <option value="report">Report</option>
            </select>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
