import Styles from './Title.module.css';

type Props = {
  children: React.ReactNode;
};

export default function Title({ children }: Props) {
  return <h2 className={Styles.title}>{children}</h2>;
}
