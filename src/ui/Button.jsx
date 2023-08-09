import { Link } from 'react-router-dom';

function Button({ children, type, onClick, to, disabled }) {
  const styles = {
    card: 'text-sm bg-secondary text-primary font-semibold px-3 py-1.5 rounded-lg hover:bg-secondary-1 transition-all duration-300 self-stretch',
    login:
      'text-sm bg-card-background text-text-color-1 uppercase tracking-wider font-semibold px-3 py-1.5 rounded-lg hover:bg-secondary-1 transition-all duration-300',
    cardDisabled:
      'text-sm bg-secondary text-primary font-semibold px-3 py-1.5 rounded-lg hover:bg-secondary-1 transition-all duration-300 self-stretch cursor-not-allowed',
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (disabled) {
    return (
      <button
        disabled={disabled}
        className={styles.cardDisabled}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }

  return (
    <button className={styles[type]} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
