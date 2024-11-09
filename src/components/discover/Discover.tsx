import styles from "./Discover.module.css";
import InputDiscover from "../basic/inputDiscover/InputDiscover";
import ArrowDownIcon from "../../../public/assets/svg/ArrowDownIcon";
export default function Discover() {
  return (
    <div className={styles.discoverBlock}>
      <form>
        <div className={styles.dropdown}>
          <h2>Destinations</h2>
          <div className={styles.customSelect}>
            <select name="country" id="country">
              <option value="Arab Egypt">Arab Egypt</option>
              <option value="Arab Egypt2">Arab Egypt</option>
              <option value="Arab Egypt3">Arab Egypt</option>
            </select>
            <div className={styles.customArrow}>
              <ArrowDownIcon /> 
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
