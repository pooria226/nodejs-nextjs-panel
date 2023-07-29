/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import SideBarItem from '@/components/shared/SideBarItem';
import { AppBar } from '@mui/material';
import DashboardLayout from '@/components/layouts/DashboardLayout';



const styles = css({
  '.MuiPaper-root': {
    boxShadow: "0 0 0px",
  },
  '.wrapper-content': {
    display: "flex",
    nav: {
      width: "260px",
      paddingTop: 0,
      a: {
        color: 'black'
      }
    },
    '.content': {
      padding: 16,
      background: "rgba(0, 0, 0, 0.04)",
      width: "100%",
      height: "calc(100vh - 80px)",
      overflow: "hidden",
    }
  }
})



export default function Dashboard() {

  return (
    <DashboardLayout>

    </DashboardLayout>
  );
}