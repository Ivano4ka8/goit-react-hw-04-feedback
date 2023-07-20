import { LoginForm } from './Class';

export const App = () => {
  return <LoginForm onSubmit={values => console.log(values)} />;
};
