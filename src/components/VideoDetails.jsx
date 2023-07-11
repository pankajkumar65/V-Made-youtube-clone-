import {useState,useEffect} from 'react';
import {Link,useParams} from 'react-router-dom';
import ReactPlayer from 'react-player';
import {Box,Typography,Stack} from '@mui/material';
import {CheckCircle} from '@mui/icons-material';
import {Videos} from './';
import { fetchFromAPi } from '../utils/fetchFromApi';

const VideoDetails = () => {
  const{ id } = useParams();
  const[videoDetail, setVideoDetail] = useState(null);

  useEffect(()=>{
      fetchFromAPi(`videos?part=snippet,statistics&id=${id}`)
      .then((data)=> setVideoDetail(data.items[0]));
  },[id]);

  console.log(videoDetail);
  //  const {snippet:{title,channelId,channelTitle}} = videoDetail;
  return (
     <Box minHeight='95vh'>
       <Stack direction={{xs:'column', md:'row'}}>
        <Box flex={1}>
         <Box sx={{width:'100%' ,position:'sticky',top:'86px'}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
            className="react-player" controls/>
            <Typography color='#fff' varient='h5' fontWeight='bold'>
              {/* { title} */}
            </Typography>
         </Box>
        </Box>
       </Stack>
     </Box>
  )
}

export default VideoDetails
