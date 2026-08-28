import Styles from './Container.module.css';

type Props = {
  children: React.ReactNode;
};

export default function Container({ children }: Props) {
  return <div className={Styles.container}>{children}</div>;
}
