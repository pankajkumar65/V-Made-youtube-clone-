import {Box, CardContent, CardMedia, Typography} from '@mui/material';
import {CheckCircle} from '@mui/icons-material';
import {Link} from 'react-router-dom';
import { demoProfilePicture } from '../utils/constant';

const ChannelCard = ({channelDetails ,marginTop}) => {
  return (
     <Box
     sx={{
      boxShadow: 'none',
      borderRadius:'20px',
      display:'flex',
      justifyContent:'center',
      alignItem:'center',
      margin:'auto',
      width: {xs:'356px', md:'320px'},
      height:'326px',
      marginTop:marginTop
     }}
     >
      <Link to={`/channel/${channelDetails?.id?.channelId}`}>
      <CardContent sx={{display:'flex', flexDirection:'column'
      ,justifyContent:'center',textAlign:'center', color:'#fff'}}>
        <CardMedia
        image={channelDetails?.snippet?.thumbnails?.high?.url   }
        alt={channelDetails?.snippet?.title}
        sx={{borderRadius: '50%',height:'180px',width:'180px',mb:2,border:'1px solid #e3e3e3'}}
        />
        <Typography varient='h6'>
            {channelDetails?.snippet?.title}
            <CheckCircle sx={{fontsize:14, color:'gray', ml:'5px'}}/>
        </Typography>
        {channelDetails?.statistics?.subscriberCount && (
          <Typography>
            {parseInt(channelDetails?.statistics?.subscriberCount).toLocaleString()} Subscribers
          </Typography>
        )}
      </CardContent>
      </Link>
     </Box>
  )
}

export default ChannelCard
