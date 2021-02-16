import score from '../img/score.png';

const setScoreImage = () => {
  let music = document.getElementById('music-box');
  console.log('yes hello');
  return (music.innerHTML = `<img src="${score}" alt="music score" >`);
};

export default setScoreImage;
