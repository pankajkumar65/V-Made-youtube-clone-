import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import {Videos, ChannelCard} from './'
import { fetchFromAPi } from '../utils/fetchFromApi'
 

const ChannelDetail = () => {
  const {id} = useParams();
  const [channelDetail , setChannelDetail] = useState(null);
  const [videos , setVideos] = useState([]);
  useEffect(()=>{
    fetchFromAPi(`channels?part=snippet&id=${id}`)
    .then((data)=> setChannelDetail(data?.items[0]));
    
    fetchFromAPi(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=> setVideos(data?.items));
  },[id])
  
  return (
    <Box minHeight='95vh'>
      <Box> 
        <div style={{ background: "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
        zIndex:'10',
        height:'300px'
        }}
        />
        <ChannelCard channelDetails={channelDetail} marginTop="-110px" />
    </Box>
    <Box display='flex' p='2'>
        <Box sx={{mr:{sm:"100px"}}}/>
        <Videos videos={videos} />
    </Box>
    </Box>
  )
}

export default ChannelDetail
