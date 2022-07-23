import React from 'react';
import axios from 'axios';
import Images from './Images';

class Search extends React.Component{

    state={
        keyword:'',
        photos:[],
        loader:false
    }
    inputHandle=(e)=>{
        this.setState({keyword:e.target.value});
    };

    SearchImages= async(e)=>{
        e.preventDefault();
        this.setState({loader:true});
        const res=await axios.get(`https://api.pexels.com/v1/search?query=${this.state.keyword}&per_page=15&page=1"
        `,{
            headers:{
                Authorization:"563492ad6f91700001000001a27be5301e8d465db13ec5e1ca7f93cd",
            }
        });
        this.setState({loader:false});
        this.setState({photos:res.data.photos});

        console.log(this.state.photos);
    };
   
    render()
    {
        return(
            <>
            <form onSubmit={this.SearchImages}>
                <div className="form-group">
                    <input type="text" name="keyword" className="form-control" value={this.state.keyword} 
                    onChange={this.inputHandle} 
                    placeholder="Search images..."
                    
                    />    
                </div>
            <div className="form-group">
                <input type="submit" value="Search images"
                className="btn btn-success btn-block"  
                />
            </div>
            </form>
            <div className="row">
            {!this.state.loader ?(
            this.state.photos.map((img)=><Images image={img} key={img.id}/>)
             

            ):(<h1>Loading...</h1>
            )}
            </div>
            </>
        );
    }
}

export default Search;