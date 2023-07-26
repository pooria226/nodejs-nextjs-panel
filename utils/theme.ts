import { createTheme } from '@mui/material/styles'
import createCache from '@emotion/cache'
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl'

// create custome theme
export const theme = createTheme({
    direction: "rtl",
    typography: {
        fontFamily: "vazir",
    },
});

 
export const cacheRTL = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin]
})