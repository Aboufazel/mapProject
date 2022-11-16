import {Button, Grid, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import Theme from "../components/theme/Theme"

const Home = (props) => {

    return (
        <Grid container mt={25} justifyContent={'center'} alignItems={'center'}>
            <Grid container item height={300} xs={10} lg={4} borderRadius={10} paddingY={2} boxShadow={5}>
                <Grid container item justifyContent={'center'}>
                    <Typography variant={'h5'} theme={Theme} sx={{marginTop: 3 , marginBottom:0 , textShadow: "0 0 5px lightgray"}} color={'red'}>
                        به پیشگامان خوش آمدید
                    </Typography>
                </Grid>
                <Grid item xs={12} padding={5} sx={{}} justifyContent={'center'}>
                    <Grid xs={12} justifyContent={'center'} textAlign={'center'} >
                        <Typography variant={'h6'} theme={Theme} sx={{marginTop: 1}}>
                            برای بهره مندی از خدمات ما میتوانید وارد شوید
                        </Typography>
                        <Link to={'/login'}>
                            <Button type={'submit'} variant="outlined" component="label" color={'error'} theme={Theme}
                                    sx={{py: 2, borderRadius: 50, marginTop: 2, width: 150}}>
                                ورود
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}


export default Home;