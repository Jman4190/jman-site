import * as React from 'react'
import Page, { PageHeader } from '~/components/Page'
import { CenteredColumn } from '~/components/Layouts'
import { NextSeo } from 'next-seo'
import routes from '~/config/routes'
import ProjectsList from '~/components/ProjectsList'

function Projects() {
  return (
    <Page>
      <NextSeo
        title={routes.projects.seo.title}
        description={routes.projects.seo.description}
        openGraph={routes.projects.seo.openGraph}
      />

      <CenteredColumn>
        <div className="space-y-12" data-cy="projects-page">
          <PageHeader
            title="Projects"
            subtitle="Weekend side projects for fun"
          />

          <div className="space-y-16 md:space-y-24">
            <div className="space-y-6">
              <ProjectsList />
            </div>
            <div className="space-y-1">
              <a
                href="https://github.com/jman4190"
                className="inline-block font-medium highlight-link-hover"
              >
                Check out my code on GitHub &rarr;
              </a>
            </div>
          </div>
        </div>
      </CenteredColumn>
    </Page>
  )
}

export default Projects
