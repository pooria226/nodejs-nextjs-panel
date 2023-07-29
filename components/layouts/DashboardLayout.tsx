/** @jsxRuntime classic */
/** @jsx jsx */

import { FC } from 'react'
import { css, jsx } from '@emotion/react'
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import SideBarItem from '@/components/shared/SideBarItem';
import { AppBar } from '@mui/material';



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
            height: "calc(100vh - 96px)",
            overflow: "hidden",
        }
    }
})


interface Props {
    children: any
}

const DashboardLayout: FC<Props> = ({ children }) => {

    return (
        <Typography component={'div'} css={styles}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Typography className='wrapper-content' component='div'>
                <List component="nav">
                    <SideBarItem />
                </List>
                <Typography className='content' component={'div'}>
                    {children}
                </Typography>
            </Typography>
        </Typography>
    );
}

export default DashboardLayout