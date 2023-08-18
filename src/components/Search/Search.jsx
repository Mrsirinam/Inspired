import { useDispatch, useSelector } from "react-redux";
import { Container } from "../Layout/Container/Container.jsx";
import s from "./Search.module.scss";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { toggleSearch } from "../../features/searchSlice.js";

export const Search = () => {
  const { openSearch } = useSelector((state) => state.search);

  const initialValues = {
    search: "",
  };

  const validationSchema = Yup.object({
    search: Yup.string().required("Поле обязательно для заполнения"),
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = ({ search }, { resetForm }) => {
    if (search.trim()) {
      navigate(`/search?q=${search}`);
      resetForm();
      dispatch(toggleSearch(false));
    }
  };

  return (
    openSearch && (
      <div className={s.search}>
        <Container>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className={s.form}>
              <Field
                className={s.input}
                type="search"
                name="search"
                placeholder="Найти..."
              />
              <ErrorMessage name="search" component={"p"} className={s.error} />
              <button className={s.btn} type="submit">
                Искать
              </button>
            </Form>
          </Formik>
        </Container>
      </div>
    )
  );
};
