import React from 'react';

import cpp from '../../media/cpp.png';
import java from '../../media/java.png';
import linux from '../../media/linux.png';
import git from '../../media/git.png';
import webdev from '../../media/webdev.png';
import mongo from '../../media/mongo.png';
import redis from '../../media/redis.png';
import next from '../../media/next.png';
import aws from '../../media/aws.png';
import './Experience.css';

const calcYear = year => {
  const result = new Date().getFullYear() - year + 1;

  return result + (result === 1 ? ' year' : ' years');
};

const Language = ({ name, path, years, desc }) => {
  const display = name;
  name = name.replace(/ /g, '-').toLowerCase();

  return (
    <div className="experience-lang card">
      <div id={`lang-img-container-${name}`} className="lang-img-container">
        <img id={`lang-img-${name}`} src={path} alt={name} />
      </div>
      <div>{display}</div>
      <div>{years}</div>
      <div className="lang-desc">{desc}</div>
    </div>
  );
};

export default () => {
  return (
    <div id="experience">
      <Language
        name="Amazon Web Services (AWS)"
        path={aws}
        years={calcYear(2018)}
        desc="Most of my projects heavily rely on popular AWS services such as Lambda, API Gateway, DynamoDB, Cognito, and more."
      />

      <Language
        name="Redis"
        path={redis}
        years={calcYear(2018)}
        desc="My recent projects have heavily used Redis as an in-memory cache to improve the performance of my applications."
      />

      <Language
        name="Node JS, React JS, &amp; Next JS"
        path={next}
        years={calcYear(2017)}
        desc="In 2017 I started learning how to host web servers with Node JS. A year later I was using React JS to build SPAs. In late 2018 I learned about Next JS which I still use today."
      />

      <Language
        name="MongoDB"
        path={mongo}
        years={calcYear(2017)}
        desc="Most of my own projects have either used MongoDB or another NoSQL database technology such as AWS's DynamoDB."
      />

      <Language
        name="JS, HTML5, CSS3"
        path={webdev}
        years={calcYear(2016)}
        desc="In 2016 I quickly learned the common web dev languages and decided to shift my software development focus to website development."
      />

      <Language
        name="Git"
        path={git}
        years={calcYear(2014)}
        desc="I have frequently used Git and GitHub while collaborating with other software developers and for my own personal projects."
      />

      <Language
        name="Linux"
        path={linux}
        years={calcYear(2013)}
        desc="I've been actively using Linux since 2013 to run various server networks and websites."
      />

      <Language
        name="Java"
        path={java}
        years={calcYear(2013)}
        desc="After learning Java I got job offers on various Minecraft server networks. From there I made a living off of my own server for multple years."
      />

      <Language
        name="C++"
        path={cpp}
        years="2008 - 2012"
        desc="My first programming language was C++. As a hobby I would teach myself programming concepts for a few years."
      />
    </div>
  );
};
