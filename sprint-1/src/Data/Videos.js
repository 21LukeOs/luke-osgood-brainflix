import vid0 from '../Assets/Images/video-list-0.jpg';
import vid1 from '../Assets/Images/video-list-1.jpg';
import vid2 from '../Assets/Images/video-list-2.jpg';
import vid3 from '../Assets/Images/video-list-3.jpg';
import vid4 from '../Assets/Images/video-list-4.jpg';
import vid5 from '../Assets/Images/video-list-5.jpg';
import vid6 from '../Assets/Images/video-list-6.jpg';
import vid7 from '../Assets/Images/video-list-7.jpg';
import vid8 from '../Assets/Images/video-list-8.jpg';


// Side Video Object
const sideVideo = [
  // {
  //   id: 'vid-one', 
  //   title: 'BMX Rampage: 2018 Highlights', 
  //   channel: 'Red Cow', 
  //   image: vid0
  // },
  {
    id: 'vid-two', 
    title: 'Become A Travel Pro In One Easy Lesson', 
    channel: 'Scotty Cranmer', 
    image: vid1
  },
  {
    id: 'vid-three', 
    title: 'Les Houches The Hidden Gem Of The Chamonix', 
    channel: 'Scotty Cranmer', 
    image: vid2
  },
  {
    id: 'vid-four', 
    title: 'Travel Health Useful Medical Information For', 
    channel: 'Glen Harper', 
    image: vid3
  },
  {
    id: 'vid-five', 
    title: 'Cheap Airline Tickets Great Ways To Save', 
    channel: 'Emily Harper', 
    image: vid4
  },
  {
    id: 'vid-six', 
    title: 'Take A Romantic Break In A Boutique Hotel', 
    channel: 'Jeremy Brass', 
    image: vid5
  },
  {
    id: 'vid-seven', 
    title: 'Choose The Perfect Accommodations', 
    channel: 'Lydia Perez', 
    image: vid6
  },
  {
    id: 'vid-eight', 
    title: 'Cruising Destination Ideas', 
    channel: 'Timothy Austin', 
    image: vid7
  },
  {
    id: 'vid-nine', 
    title: 'Train Travel On Track For Safety', 
    channel: 'Ethan Owen', 
    image: vid8
  },
];


//Main Video Object
const mainVideo = {
  id: 'vid-one',
  title: 'BMX Rampage: 2018 Highlights',
  description: 'type of <string>',
  channel: 'Red Cow',
  image: vid0,
  views: '1,001,023',
  likes: '110,985',
  duration: '0:00 / 0:42',
  video: 'type of <string>',
  timestamp: '12/18/2018',
  comments: [
    {
      id: '20384597',
      name: 'Michael Lyons',
      comment: 'They BLEW the ROOF off at their last show',
      timestamp: '23/02/1979'
    },
    {
      id: '98345735',
      name: 'Chad Montgomery',
      comment: 'They were pretty alright...ya know?',
      timestamp: '4/11/1963'
    },
    {
      id: '63485749',
      name: 'Dorthy Everett',
      comment: 'Perfection',
      timestamp: '12/09/1931'
    },
  ] 
};

export default {
  sideVideo,
  mainVideo
}