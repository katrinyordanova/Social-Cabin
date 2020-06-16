export default function Logout({ logout, history }) {
  logout(history);
  localStorage.removeItem('user');
  return null;
}
// export default class Logout extends Component {
//   render() {
//     userService.logout().then(() => {
//       this.setState({ isLogged: false });
//       this.props.history.push('/');
//     });
//     return (
//     <Redirect to="/" />
//     ) 
//   }
// }