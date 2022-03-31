import React,{Component} from 'react';
import {Card,CardBody, CardHeader,CardTitle,Modal,ModalHeader,ModalBody,Form,FormGroup,Label,Input,Button} from 'reactstrap';

function RenderPost({post}){
    return(
        <div className="col-12 col-md-6 mt-4">
                    <Card>
                        <CardHeader>
                            <CardTitle><h3>{post.title}</h3></CardTitle>
                        </CardHeader>
                        <CardBody>
                            <blockquote class="blockquote">
                                <p class="mb-0">{post.description}</p>
                                <footer class="blockquote-footer"><cite title="Source Title">{post.author}</cite></footer>
                            </blockquote>
                        </CardBody>
                    </Card>
        </div>
    );
}
class MyPost extends Component {
    constructor(props){
        super(props);

        this.state={
            isModalOpen:false
        }
        this.toggleModal=this.toggleModal.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({isModalOpen:!this.state.isModalOpen});
    }

    handleSubmit(event) {
        event.preventDefault();
        alert("Author: "+this.author.value+" Title: "+this.title.value+" Description: "+this.description.value);
        this.toggleModal();
    }
    render(){
        const posts=this.props.posts.map((post)=>{
            return(
            <RenderPost key={post.id} post={post} />
            );
        });
        return(
            <div className="container">
                <div className="row">
                <h1 className="m-auto">My Posts</h1>
                </div>
                <div className="row">
                {posts}
                <div className="col-12 mt-4">
                <button className="btn btn-dark" onClick={this.toggleModal}><span className="bi bi-vector-pen"> Add Post</span></button>
                </div>
                </div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        <h3>Add Post</h3>
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label htmlFor="author">Author:</Label>
                                <Input type="text" placeholder="Author Name" id="author" name="author" innerRef={(input) =>this.author=input}></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="title">Title:</Label>
                                <Input type="text" placeholder="Title" id="title" name="title" innerRef={(input) =>this.title=input}></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="description">Description:</Label>
                                <Input type="textarea" id="description" placeholder="Description" name="description" innerRef={(input) =>this.description=input}></Input>
                            </FormGroup>
                            <Button type="submit" color="dark">Add Post</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
            
        );
    }
}

export default MyPost;