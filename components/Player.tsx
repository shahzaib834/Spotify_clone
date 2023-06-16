'use client';

import usePlayer from '@/hooks/usePlayer';
import useLoadSongUrl from '@/hooks/useLoadSongUrl';
import useGetSongById from '@/hooks/useGetSongById';
import PlayerContent from './PlayerContent';

const Player = () => {
  const player = usePlayer();
  console.log(player.activeId);
  const { song } = useGetSongById(player.activeId);

  const songUrl = useLoadSongUrl(song!);

  if (!song || !songUrl || !player.activeId) {
    console.log('no songs');
    return null;
  }

  return (
    <div
      className='
        fixed 
        bottom-0 
        bg-black 
        w-full 
        py-2 
        h-[80px] 
        px-4
      '
    >
      <PlayerContent
        key={songUrl}
        song={
          song || {
            id: '1',
            user_id: '2',
            author: 'shah',
            image_path: '',
            song_path: '',
            title: 'test',
          }
        }
        songUrl={songUrl}
      />
      {/* NOTES on key
        assigning songUrl here because whenever key changes the whole component is destroyed and re rendered and we need that for playing songs
      */}
    </div>
  );
};

export default Player;
