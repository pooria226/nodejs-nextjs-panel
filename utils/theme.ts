import { createTheme } from '@mui/material/styles'
import createCache from '@emotion/cache'
import { prefixer } from 'stylis';

// create custome theme
export const theme = createTheme({
    direction: "ltr",
});

 
export const cacheRTL = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer]
})