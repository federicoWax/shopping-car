import { connect } from 'react-redux';
import { getUserAuth, setUserAuth } from '../ducks/userAuth';
import Header from '../components/Header';

const mapStateToProps = (state) => ({
  userAuth: getUserAuth(state)
});

const mapDispatchToProps = (dispatch) => ({
  setUserAuth: () => dispatch(setUserAuth(null))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);