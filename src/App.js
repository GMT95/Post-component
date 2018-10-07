import React, { Component } from 'react';
import './App.css';
import Post from './components/post';

const PropsObject = {
  createdBy: 'Talha',
  avatar: 'T',
  images: ['https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/SDAR.doi.320.high.imageLargeThreeQuarterNodePath.png/1522248411370.png',
          'https://media.performancebike.com/images/performance/products/product-hi/31-6715-BLK-ANGLE.jpg?resize=415px:415px&output-quality=85',
          'http://rnbquarterhorses.com/wp-content/uploads/sites/34/2017/09/55b87914990116205b4aa75205f900d2-american-quarter-horse-horse-breeds-300x294.jpg'        
  ],
  description: 'Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.',
  createdAt: Date.now(),
  likes: ['Kashif','Sohail','Ahsan']
}

class App extends Component {
  render() {
    return (
      <div>      
        <Post data={PropsObject}/>
      </div>
    );
  }
}

export default App;
