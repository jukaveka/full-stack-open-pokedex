For a project written in Python, I would utilize the following tools to build a CI/CD pipeline, or more specifically handle the linting, testing and building.

For linting, Python ecosystem has both specific tools and more general tools for linting and formatting. I’d use Ruff due to the speed, large set of rules that also includes security and type checking, and option to use pre-commit hooks for running linter and formatter. 

Testing would need to include unit, integration, and acceptance testing. Doctest is an interesting option, with tests specified in the docstring of the tested function. However, pytest allows for more classic testing experience with relative ease. 

Integration and acceptance testing are rather similar parts of testing. I would utilize Robot Framework with SeleniumBase to test different use cases and behaviors of the application.  

For building, Python has separate tools for “frontend”, such as pip or build, which delegate actual distribution package building to “backend” tools. Flit is easy to use for distributions based purely on Python. For a non-pure Python project, hatchling would seem like a reasonable option. 

The tool chosen for building CI/CD-pipeline can vary based on multiple factors. For quick setup, Travis CI is an excellent alternative for GitHub Actions. Version control platforms like GitLab, Bitbucket, and Azure provide CI/CD-pipeline tools. Massive companies might prefer enterprise–type services capable of tighter control and multi-cloud deployments with services like TeamCity or Spinnaker. Tools like Circle CI allow to run jobs self-hosted or in cloud. 

I believe a relatively simple setup would be the correct choice here. While this can be achieved with both methods, cloud-based solutions would allow developers more focus on the application. If the need arises, self-hosted services can be brought into the fold for customizability, resource-intensive jobs, or for tighter access control. 
