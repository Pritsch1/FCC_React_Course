import { Icon } from '@iconify/react';

function Footer() {
    return (
        <footer>
            <Icon className='footer-icons' icon="fa6-brands:square-twitter" />
            <Icon className='footer-icons' icon="fa6-brands:square-facebook"  />
            <Icon className='footer-icons' icon="fa6-brands:square-instagram"  />
            <Icon className='footer-icons' icon="fa-brands:github-square" hFlip={true} vFlip={true} />
        </footer>
    );
}

export default Footer;