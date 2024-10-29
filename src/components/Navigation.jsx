import { Link, useLocation } from 'react-router-dom';

const styles = {
    navigationStyle: {

        position: 'relative',
        display: 'flex',
        justifyContent: 'flex-end',
        bottom: 10,
        right: 0,
        fontSize: '20px',
        color: 'rgb(195 154 76 / 70%)',
        textDecoration: 'none',
        listStyleType: 'none',

    },
    link: {
        marginTop: '20px',
        marginRight: '20px',
        textDecoration: 'none',
        listStyleType: 'none',
        color: 'rgb(195 154 76 / 70%)',

    },
    activeLink: {
        color: 'rgb(195 154 76 / 100%)',
        fontWeight: 'bold',
    }
};



function Navigation() {
    const location = useLocation();
    return (
        <nav style={styles.navigationStyle}>
            <ul style={styles.navigationStyle}>
                <Link style={location.pathname === '/About' ? { ...styles.link, ...styles.activeLink } : styles.link} to="/About">about</Link>
                <Link style={location.pathname === '/Portfolio' ? { ...styles.link, ...styles.activeLink } : styles.link} to="/Portfolio">portfolio</Link>
                <Link style={location.pathname === '/Contact' ? { ...styles.link, ...styles.activeLink } : styles.link} to="/Contact">contact</Link>
                <Link style={location.pathname === '/Resume' ? { ...styles.link, ...styles.activeLink } : styles.link} to="/Resume">resume</Link>
            </ul>
        </nav>
    );
}

export default Navigation;