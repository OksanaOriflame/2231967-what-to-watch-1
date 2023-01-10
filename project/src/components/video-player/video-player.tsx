import { FC, useEffect, useRef } from 'react';
import Film from '../../types/film';

type Props = {
  film: Film;
  isPlay: boolean;
  width: number;
  height: number;
}

const VideoPlayer: FC<Props> = ({film, isPlay, width, height}) =>{
  const {previewImage, videoLink} = film;
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() =>{
    if (isPlay)
    {
      videoRef.current?.play();
    }
    else
    {
      videoRef.current?.load();
    }
  }, [isPlay]);

  return (
    <video ref={videoRef} muted width={width} height={height} src={videoLink} poster={previewImage} />
  );
};

export default VideoPlayer;
