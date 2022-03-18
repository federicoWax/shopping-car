import { connect } from 'react-redux';
import FormLogin from '../components/FormLogin';
import  { setUserAuth } from '../ducks/userAuth';

const mapDispatchToProps = (dispatch) => ({
  setUserAuth: (userAuth) => dispatch(setUserAuth(userAuth))
})

export default connect(null, mapDispatchToProps)(FormLogin);
