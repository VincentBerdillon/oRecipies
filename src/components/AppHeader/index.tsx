import './styles.scss';
import clsx from 'clsx';
import logo from '../../assets/logo.png';
import LoginForm from '../LoginForm';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { changeField, handleLogout, login } from '../../store/reducers/user';

function AppHeader() {
  const dispatch = useAppDispatch();
  const emailValue = useAppSelector((state) => state.user.credentials.email);
  const passwordValue = useAppSelector(
    (state) => state.user.credentials.password
  );
  const isLoading = useAppSelector((state) => state.user.isLoading);
  const error = useAppSelector((state) => state.user.error);
  const loggedValue = useAppSelector((state) => state.user.isLogged);
  const loggedMsg = useAppSelector((state) => state.user.loggedMsg);

  const handleChangeField = (value: string, name: 'email' | 'password') => {
    dispatch(changeField({ value, name }));
  };

  const HandleSubmit = () => {
    dispatch(
      login({
        email: emailValue,
        password: passwordValue,
      })
    );
  };

  const HandleOutForm = () => {
    dispatch(handleLogout());
  };

  return (
    <header className="header">
      <img src={logo} className="header-logo" alt="Logo oRecipes" />
      <div
        className={clsx({
          loader: isLoading,
        })}
      >
        <LoginForm
          email={emailValue}
          password={passwordValue}
          changeField={handleChangeField}
          handleLogin={HandleSubmit}
          isLogged={loggedValue}
          loggedMessage={loggedMsg}
          handleLogout={HandleOutForm}
        />
      </div>
      {error && <p className="error">{error}</p>}
    </header>
  );
}
export default AppHeader;
