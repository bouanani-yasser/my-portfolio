import HomeStyles from '../../styles/Home.module.scss';

function Nav(props: { color: string }) {
   return (
      <nav className={HomeStyles.NavBar}>
         <div className={HomeStyles.Logo}>Bouanani Yasser</div>
         <div className={HomeStyles.NavMenu}>
            <ul>
               <li>Home</li>
               <li>Services</li>
               <li>Works</li>
               <li>Contact</li>
            </ul>
         </div>
      </nav>
   );
}

export default Nav;
