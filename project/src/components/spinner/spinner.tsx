import { FC } from 'react';

const Spinner: FC = () => {
  const styles = {
    width: '100%',
    height: '100%',
    background: '#180202',
    color: '#dfcf77',
    fontSize: '50px',
    position: 'fixed' as const,
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={styles}>
      {'LOADING'}
    </div>
  );
};

export default Spinner;
