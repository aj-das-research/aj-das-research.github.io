import { AspectRatio } from '@chakra-ui/react'

// Accepts a YouTube video id or any youtube.com / youtu.be URL.
const youtubeId = video => {
  const m = video.match(/(?:v=|youtu\.be\/|embed\/|shorts\/)([\w-]{11})/)
  return m ? m[1] : video
}

const Video = ({ video, title }) => (
  <AspectRatio maxW="full" ratio={16 / 9} my={3}>
    <iframe
      src={`https://www.youtube-nocookie.com/embed/${youtubeId(video)}`}
      title={title}
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      style={{ border: 0, borderRadius: 12 }}
    />
  </AspectRatio>
)

export default Video
