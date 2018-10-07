import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FbImageGrid from 'react-fb-image-grid';
import moment from 'moment'
import FacebookEmoji from 'react-facebook-emoji';
import '../App.css'
import { Icon } from '@material-ui/core';

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});


class Post extends React.Component {
  constructor() {
  super();
  this.state = { expanded: false, 
      showEmojis: false,
      liked: false,
      likeBtnColor: ''
  };
  this.hideEmoji = this.hideEmoji.bind(this);
  this.likedByMe = this.likedByMe.bind(this);

}

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  hideEmoji() {
    this.setState({showEmojis: false})
  }

  likedByMe() {
    const {liked,likeBtnColor} = this.state
    this.setState({liked: !liked,likeBtnColor: likeBtnColor == 'blue' ? '' : 'blue'})
  }

  
  render() {
    const { classes } = this.props;
    const {data} = this.props
    const {liked,showEmojis,likeBtnColor} = this.state
    return (
      
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              {data.avatar}
            </Avatar>
          }
          title={data.createdBy}
          subheader={moment(data.createdAt).fromNow()}
        />
        {/* put sir kashif library here */}
        <CardContent>
        {/* <Typography component="p">
            {data.description}
        </Typography> */}
        <h3>{data.description}</h3>
          <div className="grid">
          <FbImageGrid 
              images={data.images} 
              countFrom={5}
              width={100}
              
          />
          </div>
          {/* <Typography component="p">
            {data.description}
          </Typography> */}
          {liked ?
          <p>You and {data.likes.length} others Reacted on this</p>
          :<p>{data.likes.map((value) => <span>{value},</span>)} have Reacted on this</p>
          }
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          
          {showEmojis && 
            <div 
             style={{marginBottom:90,width:270,border: '2px solid #dcdcdc',borderRadius: 20,padding: 5,position:'absolute',backgroundColor: 'white'}}
             onMouseLeave={this.hideEmoji}
            >
              <FacebookEmoji type="like" size='sm'/>
              <FacebookEmoji type="love" size='sm'/>
              <FacebookEmoji type="wow" size='sm'/>
              <FacebookEmoji type="yay" size='sm'/>
              <FacebookEmoji type="angry" size='sm'/>
              <FacebookEmoji type="haha" size='sm'/>
              <FacebookEmoji type="sad" size='sm'/>
            </div>
          }
          <FavoriteIcon 
          onClick={this.likedByMe} 
          onMouseOver={() => this.setState({showEmojis: true})} 
          style={{color: likeBtnColor}}
          />
          
        </CardActions>

      </Card>
    );
  }
}

Post.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Post);
