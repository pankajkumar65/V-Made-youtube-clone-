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
  const[video, setVideos] = useState(null);


  useEffect(()=>{
      fetchFromAPi(`videos?part=snippet,statistics&id=${id}`)
      .then((data)=> setVideoDetail(data.items[0]));

      fetchFromAPi(`search?part=snippet&relatedToVideoId=${id}`)
      .then((data)=> setVideos(data.items));
  },[id]);

  if(!videoDetail?.snippet) return "Loading";
   const {snippet:{title,channelId,channelTitle}, statistics:{viewCount,likeCount}} = videoDetail;
  return (
     <Box minHeight='95vh'>
       <Stack direction={{xs:'column', md:'row'}}>
        <Box flex={1}>
         <Box sx={{width:'100%' ,position:'sticky',top:'86px'}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
            className="react-player" controls/>
            <Typography color='#fff' varient='h5' fontWeight='bold' p={2}>
              { title}
            </Typography>
            <Stack direction='row' justifyContent='space-between' sx={{color:'#fff'}} py={1} px={2}>

                <Link to={`/channel/${channelId}`}>
                  <Typography varient={{sm:'subtitle1', md:'h6'}} color='#fff'>
                  {channelTitle}
                  <CheckCircle sx={{fontSize:'12px', color:'grey', ml:'5px'}}/>
                  </Typography>
                </Link>
                <Stack direction='row' alignItems='center' gap='20px'>
                  <Typography varient='body1' sx={{opacity: 0.7}}>
                    {parseInt(viewCount).toLocaleString()} views
                  </Typography>
                  <Typography varient='body1' sx={{opacity: 0.7}}>
                    {parseInt(likeCount).toLocaleString()} Likes
                  </Typography>
                </Stack>
            </Stack>
         </Box>
        </Box>
        <Box px={2} py={{md:1, xs:2}} justifyContent='center' alignItems='center' >
          <Videos videos={video} direction="column"/>
        </Box>
       </Stack>
     </Box>
  )
}

export default VideoDetails
