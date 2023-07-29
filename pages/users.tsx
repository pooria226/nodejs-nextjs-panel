/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import DashboardLayout from '@/components/layouts/DashboardLayout';
import TableItem from '@/components/shared/TableItem';



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
            <TableItem />
        </DashboardLayout>
    );
}