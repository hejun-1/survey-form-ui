import { connect } from 'react-redux';

const ValidateAdminCredential = (nextState, replace, next) => {
  if (false) {
    replace('/login');
    next();
  } else {
    next();
  }
};

const mapStateToProps = ({session}) => ({
  session
});

export default ValidateAdminCredential;