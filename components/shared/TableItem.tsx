/** @jsxRuntime classic */
/** @jsx jsx */

import { FC, ReactNode, useState } from "react";
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

interface Data {
  first_name: string;
  last_name: string;
  phone: string;
  role: string;
  _id: string;
}

interface Props {
  data: Data[];
  handleDelteUser(id: string): void;
}

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

const TableItem: FC<Props> = ({ data = [], handleDelteUser }) => {
  const [page] = useState(0);
  const [rowsPerPage] = useState(10);

  return (
    <Paper css={styles}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Full Name</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item: Data, index: number) => {
              return (
                <TableRow key={index} hover role="checkbox" tabIndex={-1}>
                  <TableCell>
                    {item?.first_name + " " + item?.last_name}
                  </TableCell>
                  <TableCell>{item.phone}</TableCell>
                  <TableCell>{item.role}</TableCell>
                  <TableCell>
                    <Button
                      onClick={() => handleDelteUser(item?._id)}
                      color="error"
                      variant="contained"
                    >
                      <DeleteIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default TableItem;
