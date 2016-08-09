import React from 'react';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';

class Work extends React.Component {
  render () {
   return(
     <div className="work-container">
       <Card className="card">
          <CardMedia
            overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />} >
            <img src="http://7xopqp.com1.z0.glb.clouddn.com/contain1.jpg" />
          </CardMedia>
        </Card>
       <Card className="card">
          <CardMedia
            overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />} >
            <img src="http://7xopqp.com1.z0.glb.clouddn.com/contain1.jpg" />
          </CardMedia>
        </Card>
       <Card className="card">
          <CardMedia
            overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />} >
            <img src="http://7xopqp.com1.z0.glb.clouddn.com/contain1.jpg" />
          </CardMedia>
        </Card>
       <Card className="card">
          <CardMedia
            overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />} >
            <img src="http://7xopqp.com1.z0.glb.clouddn.com/contain1.jpg" />
          </CardMedia>
        </Card>
       <Card className="card">
          <CardMedia
            overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />} >
            <img src="http://7xopqp.com1.z0.glb.clouddn.com/contain1.jpg" />
          </CardMedia>
        </Card>
       <Card className="card">
          <CardMedia
            overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />} >
            <img src="http://7xopqp.com1.z0.glb.clouddn.com/contain1.jpg" />
          </CardMedia>
        </Card>
     </div>
   )
  }
}

export default Work;
