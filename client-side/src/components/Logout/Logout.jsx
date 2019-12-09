export default function Logout({ logout, history }) {
  logout(history);
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