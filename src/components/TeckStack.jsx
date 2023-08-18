import React from 'react';
import styled from 'styled-components';
import IconButton from './IconButton';

const TechStackWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
  grid-gap: 50px 20px;
  align-items: center;
  margin: auto;
  padding: 0;
  max-width: 1000px;

`;

const colors = ['cplusplus', 'python', 'c', 'html' ,'css', 'bootstrap', 'tailwind', 'sass', 'js','node', 'npm' , 'jquery', 'json', 'react', 'next', 'typescript' , 'mysql', 'postgres', 'postman', 'flask', 'django', 'firebase', 'vscode', 'git','github', 'gcloud', 'aws', 'figma' , 'illustrator'];

const TechStack = () => {
  return (
    <TechStackWrapper>
      {colors.map((platform) => (
        <IconButton key={platform} link="#" platform={platform}  icon={platform}/>
      ))}
    </TechStackWrapper>
  );
};

export default TechStack;



