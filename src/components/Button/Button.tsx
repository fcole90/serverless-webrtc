import styles from './Button.module.css'

const Button: React.FC<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> = ({ className, children, ...props }) => (
  <button className={styles.button} {...props}>
    {children}
  </button>  
)

export default Button