//CSS styling with a module
import styles from './Button.module.css';

function ModuleCssButton() {
  return (
      <>
        <button className={styles.button}>Module Css Button</button>
      </>
  );
}

export default ModuleCssButton;