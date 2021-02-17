import score from '../img/score.png';
import skillsTree from '../img/skills.png';

const loadImage = () => {
  const imgGenerator = (id, img, alt) => {
    return (id.innerHTML = `<img src="${img}" alt=${alt} >`);
  };

  let music = document.getElementById('music-box');
  imgGenerator(music, score, 'music score');

  let skills = document.getElementById('skills');
  imgGenerator(skills, skillsTree, 'skills tree');
};

export default loadImage;
