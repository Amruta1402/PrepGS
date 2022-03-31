import React ,{useEffect, useState} from "react";
import "../App.css";
import MenuItem from './MenuItemComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from './DashboardComponent';
import MyPost from './MyPostComponent';

 function AlumniProfile(props){
    const menuItems=[
        {name:"Dashboard" ,exact:true, to:'/alumni',iconClassName:'bi bi-speedometer2'},
        {name:'Content',exact:true,to:'/alumni/content',iconClassName:'bi bi-newspaper'},
        {name:'My Posts',to:'/alumni/mypost',iconClassName:'bi bi-vector-pen'}
    ];
    const [inactive,setInactive]=useState(false);

    useEffect(()=>{
        if(inactive){
            document.querySelectorAll('.sub-menu').forEach(ele=>{
                ele.classList.remove('active');
            })
        }
        
    },[inactive]);
    
    // const Dashboard=(props)=>{
    //     return (
    //         <div>Dashboard</div>
    //     );
    // }
    const Content=(props)=>{
        return (
            <div>Content</div>
        );
    }
    
    // const MyPost=(props)=>{
    //     return (
    //         <div>My Posts</div>
    //     );
    // }
    
        return (
            <div className="alumni d-flex">
                <div  className={`side-menu ${inactive?"inactive":""}`}>
                    <div className="top-section">
                        <div className="logo">
                            <img src="./assets/favicon-96x96.png"></img>
                        </div>
                        <div onClick={()=>setInactive(!inactive)} className="toggle-menu-btn">
                        {inactive?<i class="bi bi-arrow-right-square-fill"></i>:<i class="bi bi-arrow-left-square-fill"></i>}
                        </div>
                        <div className="search-controller">
                            <button className="search-btn">
                            <i class="bi bi-search"></i>
                            </button>
                            <input type="text" placeholder="Search"></input>
                        </div>
                        <div className="divider">
                        </div>
                        <div className="main-menu">
                            <ul>
                                {
                                    menuItems.map((menuItem,index)=>
                                    <MenuItem key={index} name={menuItem.name}
                                    exact={menuItem.exact}
                                    to={menuItem.to}
                                    iconClassName={menuItem.iconClassName}
                                    onClick={()=>{
                                        if(inactive){
                                            setInactive(false);
                                        }
                                    }}
                                    />
                                    )
                                }
                                {/* <li>
                                    <a className="menu-item">
                                        <div className="menu-icon">
                                        <i class="bi bi-speedometer2"></i>
                                        </div>
                                        <span>Dashboard</span>
                                    </a>
                                </li>
                                <MenuItem name={"Content"}
                                subMenus={[{name:"Courses"},{name:"Videos"}]}
                                />
                                <li>
                                    <a className="menu-item">
                                        <div className="menu-icon">
                                        <i class="bi bi-vector-pen"></i>
                                        </div>
                                        <span>Design</span>
                                    </a>
                                </li> */}
                            </ul>
                        </div>
                        
                    </div>
                    <div className="side-menu-footer">
                        <div className="avatar">
                            <img src="./assets/ams2final.jpg"/>
                        </div>
                        <div className="user-info">
                            <h5>Amruta Talreja</h5>
                        </div>
                    </div>
                </div>
                <div className={`content ${inactive?"inactive":""}`}>
                    <Switch>
                    <Route exact path="/alumni" component={()=><Dashboard posts={props.posts}/>}></Route>
                        <Route exact path="/alumni/content" component={()=><Content/>}></Route>
                        
                        <Route path='/alumni/mypost' component={()=><MyPost posts={props.posts}/>}/>
                        <Redirect to='/alumni'/>
                    </Switch>
                </div>
            </div>
        );
    
}

export default AlumniProfile;