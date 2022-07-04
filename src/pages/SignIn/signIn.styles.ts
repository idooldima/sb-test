import Background from '../../assets/img/background.jpg';

export const styles = {
  pageContaier: {
    height: '100vh',
  },
  signInContainer: {
    display: 'flex',
    flexDirection: 'column ',
  },
  signInTitleContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '5px',
    marginLeft: '5px',
  },
  signInTitlePoint: {
    width: '15px',
    height: '15px',
    backgroundColor: 'common.black',
    borderRadius: '50%',
    marginRight: '5px',
  },
  signInFormContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
  },
  signInFormCard: {
    minWidth: '500px',
  },
  signInFormTitle: {
    textAlign: 'start',
    marginBottom: '15px',
  },
  signInNotification: {
    marginBottom: '25px',
  },
  signInInputContainer: {
    marginBottom: '20px',
  },
  signInCheckbox: {
    display: 'flex',
    alignItems: 'center',
  },
  signInNotificationPassword: {
    color: '#9200dd',
  },
  signInBtn: {
    marginBottom: '15px',
  },
  signInGoogleBtn: {
    marginBottom: '25px',
  },
  signInGoogleIcon: {
    marginRight: '10px',
  },
  signInFooterContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  signUpLink: {
    color: '#9200dd',
    marginLeft: '3px',
  },
  signInImage: {
    backgroundImage: `url(${Background})`,
    wrap: 'no-wrap',
  },
};
