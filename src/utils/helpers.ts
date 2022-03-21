export const formatTime = (time: number) => {
    return Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2);
};

export const playTrack = async (
    isTrackPlaying: boolean,
    audioRef: React.RefObject<HTMLAudioElement>,
): Promise<void> => {
    if (isTrackPlaying && audioRef.current) {
        const playPromise = audioRef.current.play();
        if (!playPromise !== undefined) {
            playPromise.then((audio) => {
                audioRef.current && audioRef.current.play();
            });
        }
    }
};
