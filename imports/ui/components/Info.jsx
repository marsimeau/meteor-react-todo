import React from 'react'
import { Meteor } from 'meteor/meteor'
import { useTracker } from 'meteor/react-meteor-data'
import { Links } from '../../api/links'

const Info = () => {
  const links = useTracker(() => {
    Meteor.subscribe('links')

    return Links.find().fetch()
  })

  return (
    <div>
      <h2>Learn Meteor!</h2>
      <ul>{links.map(
        link => <li key={link._id}>
          <a href={link.url} target="_blank" rel="noopener noreferrer">{link.title}</a>
        </li>
      )}</ul>
    </div>
  )
}

export default Info
