import s from "./Development.module.scss";
import sc from "../Footer.module.scss";

export const Development = () => (
  <div className={s.development}>
    <ul className={s.developmentList}>
      <li>
        Designer:{" "}
        <a className={sc.link} target="_blank" href="http://t.me/Mrshmallowww">
          Anastasia Ilina
        </a>
      </li>
      <li>
        Developer:
        <a className={sc.link} target="_blank" href="https://t.me/mrsirinam">
          Melnichenko Irina
        </a>
      </li>
    </ul>
  </div>
);
