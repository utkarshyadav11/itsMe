import React, { useEffect } from 'react';
import './Projects.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { fetchProjects } from '../store/ProjectsSlice';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects.projects);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <div className="projects" id="projects">
      <h1 className="title projects-title">featuRed pRojecTs</h1>
      <p className="projects-para">
      Buckle up and explore a showcase of my dynamic projects, fueled by 2 years of experience and crafted with React, Next.js, and GSAP. Get ready to be wowed!"
      </p>
      <div className="projects-container">
        {
          projects.map((project, id) => (
            <ProjectCard

              image={project.image_url}
              title={project.project_name}
              description={project.description}
              stacks={project.tech_stack}
              source_link={project.source_link}

            />
          ))
        }
      </div>
      <p className="projects-para">
  For more adrenaline-fueled creations, check out my other projects on GitHub <a className='hover' href="https://github.com/utkarshyadav11" target="_blank">here</a>.
</p>

    </div>
  );
};

export default Projects;
