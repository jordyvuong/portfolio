/**
 * @copyright 2024 Jordy VUONG
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import {useRef} from "react";
import PropTypes from "prop-types";

const Navbar = ({ navOpen })=> {
    const lastActiveLink = useRef();
    const activeBox = useRef();

    const navItems = [
        {
          label: 'Accueil',
          link: '#home',
          className: 'nav-link active',
          ref: lastActiveLink
        },
        {
          label: 'A propos',
          link: '#about',
          className: 'nav-link'
        },
        {
          label: 'Experiences',
          link: '#work',
          className: 'nav-link'
        },
        {
          label: 'Avis',
          link: '#reviews',
          className: 'nav-link'
        },
        {
          label: 'Contact',
          link: '#contact',
          className: 'nav-link md:hidden'
        }
      ];

    return (
       <nav className={'navbar' + (navOpen ? 'active' : '')}>
        {
            navItems.map(({ label, link, className, ref}, key)=> (
                <a href={link}
                key={key}
                ref={ref}
                className={className}
                onClick={null}
                >
                    {label}
                </a>
            ))
        }
        <div 
        className="active-box"
        ref={activeBox}>

        </div>
       </nav>
    )
}

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired
}

export default Navbar