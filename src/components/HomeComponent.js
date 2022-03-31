import React, { Component } from 'react';
import { Media } from 'reactstrap';
import Header from './HeaderComponent';
import About from './AboutComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import AfterLogin from './AfterLoginComponent';
import AlumniProfile from './AlumniProfileComponent';
import { ALUMS } from '../shared/alums';
import { POSTS } from '../shared/posts';
class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            alums: ALUMS,
            posts:POSTS
        }
    }
    
    render() {
        const HomePage = () => {
            return (
                <React.Fragment>
                    <Header />
                    <About alums={this.state.alums} />
                    <Footer />
                </React.Fragment>
            );
        }
        
        return (
            <div>
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route path="/afterlogin" component={() => <AfterLogin gate={this.state.alums.filter(alum => alum.specialization === 'GATE')} cat={this.state.alums.filter(alum => alum.specialization === 'CAT')}
                        upsc={this.state.alums.filter(alum => alum.specialization === 'UPSC')}
                        placement={this.state.alums.filter(alum => alum.specialization === 'Placement')} />} />
                    <Route path="/alumni" component={() => <AlumniProfile posts={this.state.posts}/>} />
                    
                    <Redirect to="/home" />
                </Switch>
            </div>
        );
    }
}

export default Home;