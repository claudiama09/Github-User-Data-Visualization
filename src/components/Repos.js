import { items } from 'fusioncharts';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { GithubContext } from '../context/context';
import { ExampleChart, Pie3D, Column2D, Bar2D, Doughnut2D } from './Charts';

const Repos = () => {
  const { repos } = useContext(GithubContext);

  const languages = repos.reduce((total, item) => {
    const { language, stargazers_count } = item;
    if (!language) return total;
    if (!total[language]) {
      total[language] = { label: language, value: 1, stars: stargazers_count }
    } else {
      total[language] = { ...total[language], value: total[language].value + 1, stars: total[language].stars + stargazers_count }
    }
    return total;
  }, {})

  const mostUsed = Object.values(languages)
    .sort((a, b) => {
      return b.value - a.value
    })

  const mostPopular = Object.values(languages)
    .sort((a, b) => {
      return b.stars - a.stars
    })
    .map(item => {
      return { ...item, value: item.stars }
    })
    .slice(0, 5)

  const { stars, forks } = repos.reduce((total, item) => {  //total is star counts of each repo
    console.log(item)
    const { stargazers_count, name, forks } = item
    total.stars[stargazers_count] = { label: name, value: stargazers_count };
    total.forks[forks] = {label: name, value: forks}
    return total
  }, {
    stars: {}, forks: {}
  })

  const mostStars = Object.values(stars).slice(-5).reverse()

  const mostForks = Object.values(forks).slice(-5).reverse()
  console.log(mostForks)

  return <section className='section'>
    <Wrapper className='section-center'>
      <Pie3D data={mostUsed} />
      <Column2D data={mostStars} />
      <Doughnut2D data={mostPopular} />
      <Bar2D data={mostForks} />
    </Wrapper>
  </section>

};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }
  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
