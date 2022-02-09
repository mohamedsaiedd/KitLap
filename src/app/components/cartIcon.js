import * as React from 'react';
import {Badge} from '@material-ui/core';
import { styled } from '@material-ui/core';
import{ IconButton } from '@material-ui/core';
import { Icon } from '@iconify/react';

// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function CartIcon() {
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={4} color="secondary">
      <Icon className="shoppingCart"  icon="bi:cart" />
      </StyledBadge>
    </IconButton>
  );
}