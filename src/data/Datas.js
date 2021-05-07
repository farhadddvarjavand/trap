import React from "react";
import {popularVillas,getBanners,discountedVillas,economicVillas} from "../services/homeService"

class Datas extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            popularVillas:[],
            bannersVillage:[],
            bannersvillas:[],
            bannersbigBanners:[],
            data:'',
        }
    }

   componentDidMount() {

       {  popularVillas()
           .then(res => {
               const popularVillas = res.data.data;
               this.setState({ popularVillas });
           })
           .catch(function (error) {
               console.log('error')
           })  }

       {  getBanners()
           .then(res => {
               const bannersVillage = res.data.villages;
               const bannersvillas = res.data.villas;
               const bannersbigBanners = res.data.bigBanners;
               this.setState({ bannersvillas , bannersbigBanners, bannersVillage});
           })
           .catch(function (error) {
               console.log('error')
           })  }


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