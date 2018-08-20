import React, { Component } from 'react';
import ListObject from './ListObject';


export default class Body extends Component {

    constructor(){
        super();
        this.state={
            uri:'',
            isLoading:true,
            posts: [],
        };
        this.fetchData=this.fetchData.bind(this);
        this.renderListData=this.renderListData.bind(this);
    }

    /* Mediante este metodo se obtiene la data desde Reddit */
    fetchData(){
        fetch(this.props.uri)
        .then(response=>response.json())
        .then(parsedJSON=>parsedJSON.data.children.map(post=>{
            return [
                post.data.author,
                post.data.title,
                post.data.thumbnail,
                post.data.ups,
                post.data.downs,
                post.data.num_comments,
                post.data.url,
                post.data.id,
            ]
        }))
        .then(postsLoaded=>this.setState({
            posts:postsLoaded,
            isLoading:false
        }))
        .catch(error=>console.log('Parsing failed',error));
    }

    renderListData(){
        if (!this.state.isLoading&&this.state.posts.length>0) {
            return this.state.posts.map((data)=>{
                return <ListObject key={data[7]} postData={data}/>
            })            
        }else{
            return <div>Cargando...</div>
        }
    }

    render() {
        this.fetchData();
        return (
            <div className='container-fluid m-0'>
                <div className="row">
                    <div className="col-md-2 d-none d-sm-block"></div>
                        <div className="col-md-8" >
                            <div className='row'>
                                {/* Componentes objeto de lista */}
                                {this.renderListData()}
                            </div>
                        </div>
                    <div className="col-md-2 d-none d-sm-block"></div>
                </div>
            </div>
        )
    }
}
