const express = require('express')
const router = express.Router()

const db = require('../db/projects')

router.get('/', (req, res) => {
  db.getProjects()
    .then(projects => {
      let projectsParsed = projects.map(project => {
        return {'project_image': project.project_image,
          'project_copy': JSON.parse(project.project_copy)}
      })
      res.json(projectsParsed)
    })
})

module.exports = router
