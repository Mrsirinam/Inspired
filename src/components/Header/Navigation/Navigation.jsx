import { Container } from "../../Layout/Container/Container";
import { Gender } from "./Gender/Gender";
import { Category } from "./Category/Category";

export const Navigation = () => (
  <nav>
    <Container>
      <Gender />
      <Category />
    </Container>
  </nav>
);
