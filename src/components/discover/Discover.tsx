import styles from "./Discover.module.css";
import Select from "../select/Select";
import Data from "../date/Date";
// import RangeSlider from '../range/Range';
export default function Discover() {
  return (
    <div className={styles.discoverBlock}>
      <form>
        <Select />
        <Data />
        {/* <RangeSlider /> */}
      </form>
    </div>
  );
}
