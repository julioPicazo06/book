import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';

const LoaderContainer = styled('div')({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 9999,
    pointerEvents: 'none'
});

const GlobalLoader: React.FC = () => {
    const isLoading = useSelector((state: RootState) => state.loading.isLoading);

    if (!isLoading) return null;

    return (
        <LoaderContainer>
            <CircularProgress size={60} thickness={4} />
        </LoaderContainer>
    );
};

export default GlobalLoader; 