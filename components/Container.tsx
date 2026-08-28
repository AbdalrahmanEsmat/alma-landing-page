type Props = {
  children: React.ReactNode;
};

export default function Container({ children }: Props) {
  return <div style={{ padding: '3rem 8.75rem' }}>{children}</div>;
}
