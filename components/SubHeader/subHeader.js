import styles from "./subHeader.module.css";
import subHeader from "../../utils/subHeader.json";
export default function SubHeader() {
  return (
    <div className={styles.subHeader}>
      <div className="d-flex align-items-center container justify-content-center">
        <div className={`address mx-3`}>Deliver to: 87888</div>
        <div class="dropdown">
          <a
            className={`btn btn-secondary dropdown-toggle ${styles.dropdown_btn}`}
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Groceries
          </a>

          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Fruits
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Dairy
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Snacks
              </a>
            </li>
          </ul>
        </div>

        <div class="dropdown">
          <a
            className={`btn btn-secondary dropdown-toggle ${styles.dropdown_btn}`}
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Premium Fruits
          </a>

          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Fruits
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Dairy
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Snacks
              </a>
            </li>
          </ul>
        </div>

        <div class="dropdown">
          <a
            className={`btn btn-secondary dropdown-toggle ${styles.dropdown_btn}`}
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Home and Kitchen
          </a>

          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Fruits
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Dairy
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Snacks
              </a>
            </li>
          </ul>
        </div>

        <div class="dropdown">
          <a
            className={`btn btn-secondary dropdown-toggle ${styles.dropdown_btn}`}
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Electronics
          </a>

          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Fruits
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Dairy
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Snacks
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
