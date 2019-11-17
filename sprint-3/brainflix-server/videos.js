const express = require('express');
const data = require('./data');
const uniqid = require('uniqid');


const router = express.Router();



router.get('/', (request, response) => {
 
  response.send(data);
});

router.get('/:id', (request, response) => {
  const video = data.find(video => {
    return video.id === request.params.id
  })
  response.send(video)
})

router.post('/', (request, response) => {
  console.log(request.body);
  const newVideo = {
    id: uniqid.process(),
    title: request.body.title,
    channel: "Red Cow",
    image: request.body.image,
    description: request.body.description,
    views: "1,001,023",
    likes: "110,985",
    duration: "4:01",
    video: "https://project-2-api.herokuapp.com/stream",
    timestamp: 1545162149000,
    comments: [
      {
        name: "Micheal Lyons",
        comment:
          "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
        id: "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
        likes: 0,
        timestamp: 1545162149000
      },
      {
        name: "Gary Wong",
        comment:
          "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
        id: "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
        likes: 0,
        timestamp: 1544595784046
      },
      {
        name: "Theodore Duncan",
        comment:
          "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
        id: "993f950f-df99-48e7-bd1e-d95003cc98f1",
        likes: 0,
        timestamp: 1542262984046
      }
    ]
  }
  data.unshift(newVideo)
  response.send(newVideo);
})


module.exports = router;