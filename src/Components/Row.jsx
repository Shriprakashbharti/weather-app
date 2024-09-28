import { Typography, styled } from "@mui/material";

export const Row = styled(Typography)({
    padding: 10,
    fontSize: 20,
    letterSpacing: 2,
    '&> svg': {
        marginRight: 10
    }
});
