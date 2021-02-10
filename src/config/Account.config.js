import transfers from '../images/transfers.png';
import invite from '../images/invite.png';
import editProfile from '../images/editProfile.png';
import help from '../images/help.png';
import creditCard from '../images/creditCard.png';
import exit from '../images/exit.png';

const menuItems = [
    {
      image: transfers,
      title: 'Transfer to Bank',
      navigationDirection: 'Home',
      id: 1,
    },
    {
      image: invite,
      title: 'Invite a Friend',
      navigationDirection: 'Home',
      id: 2,
    },
    {
      image: editProfile,
      title: 'Edit Profile',
      navigationDirection: 'Home',
      id: 3,
    },
    {image: help, title: 'Help', navigationDirection: 'Home', id: 4},
    {
      image: creditCard,
      title: 'Payment Information',
      navigationDirection: 'Home',
      id: 5,
    },
    {image: exit, title: 'Sign Out', navigationDirection: 'Home', id: 6},
  ];

  export default menuItems;