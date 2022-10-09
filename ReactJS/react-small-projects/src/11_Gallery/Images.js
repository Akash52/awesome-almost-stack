import React from 'react';

class Images extends React.Component{
    render(){
        const {image}=this.props;
        console.log(image);
        return(
           
                <div className="col-md-3">
                    <img src={image.src.large} alt="Not Found"
                    className="img-fluid" width='300' height='350' />
                </div>
           
        )
    }
}
export default Images;