import ArrowDownIcon from "../../../public/assets/svg/ArrowDownIcon";
import styles from "./Select.module.css"
export default function Select() {
  return (
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
  );
}
