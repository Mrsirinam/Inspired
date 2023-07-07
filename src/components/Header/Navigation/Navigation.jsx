import { Container } from "../../Layout/Container/Container";
import { Gender } from "./Gender/Gender";
import { Category } from "./Category/Category";

export const Navigation = ({ list }) => (
  <nav>
    <Container>
      <Gender list={list} />
      <Category list={list} />
    </Container>
  </nav>
);
