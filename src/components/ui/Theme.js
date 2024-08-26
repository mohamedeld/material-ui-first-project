import { createTheme } from "@material-ui/core";

const  arcBlue='#0B72B9';
const arcOrange='#FFBA60';
const theme = createTheme({
  palette:{
    common:{
      arcBlue:`${arcBlue}`,
      arcOrange:`${arcOrange}`,
    },
    primary:{
      main:`${arcBlue}`
    },
    secondary:{
      main:`${arcOrange}`
    }
  },
  typography:{
    tab:{
      textTransform:'none',
      fontWeight:700,
      fontSize:'1rem'
    },
    estimate:{
      fontSize:'1rem',
    textTransform:'none',
    color:'#fff'
    }
  }
});

export default theme;