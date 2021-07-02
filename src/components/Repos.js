import React, { useContext } from 'react';
import styled from 'styled-components';
import { GithubContext } from '../context/context';
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts';

const Repos = () => {
  const {repos} = useContext(GithubContext);

  let languages = repos.reduce((total, item) => {
    const { language } = item;
    if (!language) return total;
    if (!total[language]){
      total[language] = {label: language, value: 1}
    } else {
      total[language] = {...total[language], value: total[language] + 1}
    }
    return total;
  },{})

  languages = Object.values(languages)

  console.log(languages)

  const chartData = [
    {
      label: "HTML",
      value: "13"
    },
    {
      label: "CSS",
      value: "26"
    },
    {
      label: "Javascript",
      value: "90"
    }
  ];
  
  return <section className='section'>
    <Wrapper className='section-center'>
      <Pie3D data={chartData} />
      {/* <ExampleChart data={chartData}/> */}
    </Wrapper>
  </section>
  
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    flex-direction: column;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  // svg {
  //   width: 100% !important;
  //   border-radius: var(--radius) !important;
  // }
`;

export default Repos;
