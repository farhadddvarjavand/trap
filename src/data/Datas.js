import React from "react";

class Datas extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            data:'',
        }
    }

   componentDidMount() {

    }
    getData =(url)=>{
        fetch(url)                            /* GET */
            .then(response => response.json())
            .then(json => {
                this.setState({data:json.support});
            });
        return this.state.data
    }
    postDataAndPush = (url , data , push)=>{
        fetch(url, {                     /* POST */
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({data})
        })
            .then(response => response.json())
            .then(postddata =>{
                if(postddata){
                    console.log(data)
                    this.setState({PostData:"Successful" })
                    this.props.history.push(push)
                } else this.setState({PostData:"UnSuccessful"})
            });
    }
    postData = (url , data)=>{
        fetch(url, {                     /* POST */
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({data})
        })
            .then(response => response.json())
            .then(postddata =>{
                if(postddata){
                    console.log(data)
                    this.setState({PostData:"Successful" })
                } else this.setState({PostData:"UnSuccessful"})
            });
    }
    render() {
        // pass new properties to wrapped component
        return <Datas {...this.props} {...this.state} />
    }

}
export default Datas