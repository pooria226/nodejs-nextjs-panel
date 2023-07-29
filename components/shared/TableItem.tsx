/** @jsxRuntime classic */
/** @jsx jsx */

import { ReactNode, useState } from "react";
import { css, jsx } from "@emotion/react";
import {
  Button,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  Paper,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

interface Column {
  id: "fullname" | "email" | "role" | "action";
  label: string;
  minWidth?: number;
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "fullname", label: "Full Name" },
  { id: "email", label: "Email" },
  {
    id: "role",
    label: "Role",
  },
  {
    id: "action",
    label: "Action",
  },
];

interface Data {
  fullname: string;
  email: string;
  role: string;
  action: ReactNode;
}

function createData(
  fullname: string,
  email: string,
  role: string,
  action: ReactNode
): Data {
  return { fullname, email, role, action };
}

const rows = [
  createData(
    "Pooria Mohamamdi",
    "pooria@gmail.com",
    "Admin",
    <Button color="error" variant="contained">
      <DeleteIcon />
    </Button>
  ),
  createData(
    "Pooria Mohamamdi",
    "pooria@gmail.com",
    "Admin",
    <Button color="error" variant="contained">
      <DeleteIcon />
    </Button>
  ),
  createData(
    "Pooria Mohamamdi",
    "pooria@gmail.com",
    "Admin",
    <Button color="error" variant="contained">
      <DeleteIcon />
    </Button>
  ),
  createData(
    "Pooria Mohamamdi",
    "pooria@gmail.com",
    "Admin",
    <Button color="error" variant="contained">
      <DeleteIcon />
    </Button>
  ),
  createData(
    "Pooria Mohamamdi",
    "pooria@gmail.com",
    "Admin",
    <Button color="error" variant="contained">
      <DeleteIcon />
    </Button>
  ),
  createData(
    "Pooria Mohamamdi",
    "pooria@gmail.com",
    "Admin",
    <Button color="error" variant="contained">
      <DeleteIcon />
    </Button>
  ),
  createData(
    "Pooria Mohamamdi",
    "pooria@gmail.com",
    "Admin",
    <Button color="error" variant="contained">
      <DeleteIcon />
    </Button>
  ),
  createData(
    "Pooria Mohamamdi",
    "pooria@gmail.com",
    "Admin",
    <Button color="error" variant="contained">
      <DeleteIcon />
    </Button>
  ),
  createData(
    "Pooria Mohamamdi",
    "pooria@gmail.com",
    "Admin",
    <Button color="error" variant="contained">
      <DeleteIcon />
    </Button>
  ),
  createData(
    "Pooria Mohamamdi",
    "pooria@gmail.com",
    "Admin",
    <Button color="error" variant="contained">
      <DeleteIcon />
    </Button>
  ),
  createData(
    "Pooria Mohamamdi",
    "pooria@gmail.com",
    "Admin",
    <Button color="error" variant="contained">
      <DeleteIcon />
    </Button>
  ),
  createData(
    "Pooria Mohamamdi",
    "pooria@gmail.com",
    "Admin",
    <Button color="error" variant="contained">
      <DeleteIcon />
    </Button>
  ),
  createData(
    "Pooria Mohamamdi",
    "pooria@gmail.com",
    "Admin",
    <Button color="error" variant="contained">
      <DeleteIcon />
    </Button>
  ),
  createData(
    "Pooria Mohamamdi",
    "pooria@gmail.com",
    "Admin",
    <Button>
      <DeleteIcon />
    </Button>
  ),
  createData(
    "Pooria Mohamamdi",
    "pooria@gmail.com",
    "Admin",
    <Button>
      <DeleteIcon />
    </Button>
  ),
];

const styles = css({
  button: {
    minWidth: "36px",
    height: "36px",
    borderRadius: "50%",
    padding: 0,
    margin: "0 !important",
    display: "flex",
  },
  ".MuiTableHead-root": {
    th: {
      background: "#000",
      color: "white",
    },
  },
});

export default function TableItem() {
  const [page] = useState(0);
  const [rowsPerPage] = useState(10);

  return (
    <Paper css={styles}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return <TableCell key={column.id}>{value}</TableCell>;
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
