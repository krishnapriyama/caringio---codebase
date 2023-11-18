import { Box, Typography } from '@mui/material'
import React from 'react'

export const CardModal = ({ Title, Content }) => {
    return (
        <Box
            sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 300,
                maxHeight: '90vh',
                p: 2,
                bgcolor: 'background.paper',
                borderRadius: '8px',
                boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.2)',
                overflowY: 'auto',
            }}
        >
            <Typography id="modal-modal-title" fontSize="24px" fontWeight="900px">
                {Title}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }} fontSize="16px" fontWeight="300px">
                {Content}
            </Typography>
        </Box>
    )
}

export default CardModal