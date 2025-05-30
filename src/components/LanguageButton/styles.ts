import { styled } from '@mui/material/styles';

export const LanguageButtonContainer = styled('button')({
    position: 'fixed',
    top: '20px',
    left: '20px',
    zIndex: 1000,
    backgroundColor: 'rgba(40, 44, 52, 0.863)',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    width: '60px',
    height: '40px',
    padding: '0',
    cursor: 'pointer',
    fontSize: '18px',
    fontFamily: 'inherit',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.2s ease-in-out',
    fontWeight: 'bold',
    '&:hover': {
        transform: 'scale(1.1)'
    },
    '&:disabled': {
        cursor: 'wait'
    }
});

export {}; 