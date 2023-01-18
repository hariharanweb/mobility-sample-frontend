import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const PriceBreakdown = ({ quote }) => (
  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 280 }} aria-label="customized table">
      <TableHead>
        <TableRow>
          <StyledTableCell>Fare Breakup</StyledTableCell>
          <StyledTableCell />
        </TableRow>
      </TableHead>
      <TableBody>
        {quote?.breakup.map((row) => (
          <StyledTableRow key={row.title}>
            <StyledTableCell component="th" scope="row">
              {row.title}
            </StyledTableCell>
            <StyledTableCell align="right">
              {row.price.currency}
              {' '}
              {row.price.value}
            </StyledTableCell>
          </StyledTableRow>
        ))}
        <StyledTableRow key="total">
          <StyledTableCell component="th" scope="row">
            <Typography fontWeight="bold">
              Total
            </Typography>
          </StyledTableCell>
          <StyledTableCell align="right">
            <Typography fontWeight="bold">
              {quote.price.currency}
              {' '}
              {quote.price.value}
            </Typography>
          </StyledTableCell>
        </StyledTableRow>
      </TableBody>
    </Table>
  </TableContainer>
);

export default PriceBreakdown;
