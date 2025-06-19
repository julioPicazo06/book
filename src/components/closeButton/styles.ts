import { styled } from '@mui/material/styles';

export const CloseButtonContainer = styled('div')({
    position: 'fixed',
    top: '20px',
    right: '20px',
    zIndex: 1000,
    backgroundColor: 'rgba(40, 44, 52, 0.863)',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    padding: '0',
    cursor: 'pointer',
    fontSize: '32px',
    fontFamily: 'inherit',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.2s ease-in-out',
    fontWeight: 'bold',
    '&:hover': {
        transform: 'scale(1.1)'
    },
    '@media (max-width: 600px)': {
        width: 'auto',
        height: 'auto',
        backgroundColor: 'transparent',
        color: 'white',
        fontSize: '26px',
        borderRadius: '0',
        top: '10px',
        right: '10px',
        padding: 0,
        minWidth: 0,
        minHeight: 0,
        boxShadow: 'none'
    }
});

export {}; 