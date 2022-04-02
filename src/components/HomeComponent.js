import React, { Component } from 'react';
import { Media } from 'reactstrap';
import Header from './HeaderComponent';
import About from './AboutComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect ,withRouter} from 'react-router-dom';
import AfterLogin from './AfterLoginComponent';
import AlumniProfile from './AlumniProfileComponent';
import {connect} from 'react-redux';
import {postPost,fetchAlums,fetchPosts} from '../redux/ActionCreators';

const mapStateToProps = (state)=>{
    return {
        alums: state.alums,
        posts: state.posts
    };
}

const mapDispatchToProps = (dispatch)=>({
    postPost:(author,title,description)=> dispatch(postPost(author,title,description)),
    fetchAlums:()=>{ dispatch(fetchAlums())},
    fetchPosts:()=>{dispatch(fetchPosts())}
});

class Home extends Component {
    constructor(props) {
        super(props);

    }
    
    componentDidMount(){
        this.props.fetchAlums();
        this.props.fetchPosts();
    }
    render() {
        const HomePage = () => {
            return (
                <React.Fragment>
                    <Header />
                    <About alums={this.props.alums.alums} alumsLoading={this.props.alums.isLoading} alumsErrmess={this.props.alums.errMess} />
                    <Footer />
                </React.Fragment>
            );
        }
        
        return (
            <div>
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route path="/afterlogin" component={() => <AfterLogin gate={this.props.alums.alums.filter(alum => alum.specialization === 'GATE')} cat={this.props.alums.alums.filter(alum => alum.specialization === 'CAT')}
                        upsc={this.props.alums.alums.filter(alum => alum.specialization === 'UPSC')}
                        placement={this.props.alums.alums.filter(alum => alum.specialization === 'Placement')} 
                        alumsLoading={this.props.alums.isLoading} alumsErrmess={this.props.alums.errMess} />} />
                    <Route path="/alumni" component={() => <AlumniProfile posts={this.props.posts.posts} addPost={this.props.postPost} postsLoading={this.props.posts.isLoading} postsErrmess={this.props.posts.errMess}/>} />
                    
                    <Redirect to="/home" />
                </Switch>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Home));