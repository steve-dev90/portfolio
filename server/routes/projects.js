const express = require('express')
const router = express.Router()

const db = require('../db/projects')

router.get('/', (req, res) => {
  db.getProjects()
    .then(projects => {
      let projectsParsed = projects.map(project => {
        return {'id': project.id, 'title': project.title, 'image': project.image,
          'copy': JSON.parse(project.copy), 'old_project': project.old_project}
      })
      res.json(projectsParsed)
    })
})

module.exports = router
