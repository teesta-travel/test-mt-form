import { Button } from 'antd';
import Link from 'next/link';
import { FC } from 'react';
import Image from 'next/image';  // Fix: Use default import

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Pages', href: '#' },
  { label: 'Contact', href: '#' },
];

interface NavbarProps {
  onToggle: () => void;  
}

const Navbar: FC<NavbarProps> = ({ onToggle }) => {
  return (
    <nav style={styles.navbar} >
      <div style={styles.logoContainer}>
        <Image src="/logo.png" alt="logo" width={50} height={50} />
        <p style={styles.logoText}>Teesta</p>
      </div>

      <ul style={styles.navList}>
        {navItems.map((item) => (
          <li key={item.href} style={styles.navItem} className=' hover:bg-[#1677FF] hover:text-white p-3 rounded-full'>
            <Link href={item.href}>
              <span style={styles.navLink} className=' text-[1rem]'>{item.label}</span>
            </Link>
          </li>
        ))}

        <Button type='primary' onClick={onToggle} className='p-6 text-[1rem] font-semibold ml-14'>Book Appointment</Button>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#202124',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'fixed', 
    top: 0,
    width: '100%',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    item : 'center',
  },
  logoText: {
    color: '#fff',
    fontSize: '1.2rem',
    margin:0,
    marginLeft: '0.5rem',
    fontWeight: 'bold',
  },
  navList: {
    display: 'flex',
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    alignItems: 'center', 
  },
  navItem: {
    marginRight: '2rem',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'semibold',
  },
};

export default Navbar;
