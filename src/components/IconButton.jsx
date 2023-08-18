import React from 'react';
import styled from 'styled-components';
import CardSound from '../assets/sounds/card-sounds-35956.mp3'
import { SiReact, SiPython, SiCplusplus, SiC, SiHtml5, SiCss3, SiBootstrap, SiTailwindcss, SiSass, SiJavascript,SiNodedotjs, SiNpm,SiJquery, SiFlask, SiDjango,SiFirebase, SiVisualstudio, SiGit, SiGithub,SiGooglecloud, SiAmazonaws, SiFigma, SiAdobeillustrator, SiJson, SiNextdotjs, SiTypescript, SiMysql, SiPostgresql, SiPostman  } from '@icons-pack/react-simple-icons';

const IconButton = ({ platform, link }) => {
  const icons = {
    cplusplus: SiCplusplus,
    python: SiPython,
    c: SiC ,
    html: SiHtml5,
    css: SiCss3,
    bootstrap: SiBootstrap ,
    tailwind: SiTailwindcss,
    sass: SiSass,
    js: SiJavascript,
    node: SiNodedotjs,
    npm: SiNpm,
    jquery: SiJquery,
    json: SiJson,
    react: SiReact,
    next: SiNextdotjs,
    typescript: SiTypescript,
    mysql: SiMysql,
    postgres: SiPostgresql,
    postman: SiPostman,
    flask: SiFlask,
    django: SiDjango,
    firebase: SiFirebase,
    vscode: SiVisualstudio ,
    git: SiGit,
    github: SiGithub,
    gcloud: SiGooglecloud,
    aws: SiAmazonaws,
    figma: SiFigma,
    illustrator: SiAdobeillustrator,
    
  };

  const bgcolor = platform === 'facebook' ? '#3B5998' :
                  platform === 'twitter' ? '#3CF' :
                  platform === 'google' ? '#DC4A38' :
                  platform === 'dribbble' ? '#F26798' :
                  platform === 'cplusplus' ? '#00599C' :
                  platform === 'python' ? '#00599C' :
                  platform === 'c' ? '#A8B9CC' :
                  platform === 'html' ? '#E34F26' :
                  platform === 'css' ? '#1572B6' :
                  platform === 'bootstrap' ? '#7952B3' :
                  platform === 'tailwind' ? '#06B6D4' :
                  platform === 'sass' ? '#CC6699' :
                  platform === 'js' ? '#F7DF1E' :
                  platform === 'node' ? '#339933' :
                  platform === 'npm' ? '#CB3837' :
                  platform === 'jquery' ? '#0769AD' :
                  platform === 'json' ? '#000000' :
                  platform === 'react' ? '#61DAFB' :
                  platform === 'next' ? '#000000' :
                  platform === 'typescript' ? '#3178C6' :
                  platform === 'mysql' ? '#4479A1' :
                  platform === 'postgres' ? '#4169E1' :
                  platform === 'postman' ? '#FF6C37' :
                  platform === 'flask' ? '#000' :
                  platform === 'django' ? '#092E20' :
                  platform === 'firebase' ? '#4285F4' :
                  platform === 'vscode' ? '#007ACC' :
                  platform === 'git' ? '#F05032' :
                  platform === 'github' ? '#181717' :
                  platform === 'gcloud' ? '#4285F4' :
                  platform === 'aws' ? '#232F3E' :
                  platform === 'figma' ? '#F24E1E' :
                  platform === 'illustrator' ? '#FF9A00' :
                  platform === 'skype' ? '#00AFF0' : '#fff';

  const iconcolor = platform === 'xyz' ? '#fff' : bgcolor;

  const IconComponent = icons[platform];

  const handleMouseEnter=()=>{
    const audio= new Audio(CardSound);
    audio.play();
  }

  return (
    <IconButtonWrapper href={link} bgcolor={bgcolor} iconcolor={iconcolor} onMouseEnter={handleMouseEnter}>
      <IconComponent className="icon w-10 h-10" />
    </IconButtonWrapper>
  );
};

const size = '70px';
const transition = 'all 0.35s cubic-bezier(0.310, -0.105, 0.430, 1.590)';

const IconButtonWrapper = styled.a.attrs(props => ({
  bgcolor: props.bgcolor,
  iconcolor: props.iconcolor,
}))`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: ${size};
  height: ${size};
  line-height: ${size};
  margin: 0 0px;
  position: relative;
  overflow: hidden;
  opacity: 0.99;
  border-radius: 28%;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.2);
  transition: ${transition};
  &:before {
    content: '';
    background-color: ${props => props.bgcolor};
    width: 120%;
    height: 120%;
    position: absolute;
    top: 90%;
    left: -110%;
    transform: rotate(45deg);
    transition: ${transition};
    z-index: -1;
  }
  .icon {
    font-size: 38px;
    transform: scale(0.8);
    transition: ${transition};
    color: ${props => props.iconcolor};
  }
  &:hover:before {
    top: -10%;
    left: -10%;
  }
  &:hover .icon {
    transform: scale(1);
    color: #fff;
  }
`;

export default IconButton;




