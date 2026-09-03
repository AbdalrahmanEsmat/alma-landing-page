import Styles from './MiniTitle.module.css';

type Props = {
  children: React.ReactNode;
};

export default function MiniTitle({ children }: Props) {
  return <h2 className={Styles.title}>{children}</h2>;
}
