
export const getData  ={

     a :() =>{
         alert('1')
         let a =''
         fetch('https://reqres.in/api/get/1')                            /* GET */
        .then(response => response.json())
        .then(a=json => {
            return  json.support;
        });

        console.log(a +'1')
        return a
    }
}

export const  productData=[
    {numberOfRoomProduct:'3',
        NumberOfCapacityProduct:'3',
        rateProduct:'3.5',
        topicProduct:'باغ',
        locationProduct:'مازندران',
        priceProduct:'25000',},

    {numberOfRoomProduct:'2',
        NumberOfCapacityProduct:'3',
        rateProduct:'3.5',
        topicProduct:'باغ',
        locationProduct:'مازندران',
        priceProduct:'25000',},

    {numberOfRoomProduct:'1',
        NumberOfCapacityProduct:'3',
        rateProduct:'3.5',
        topicProduct:'باغ',
        locationProduct:'مازندران',
        priceProduct:'25000',},

    {numberOfRoomProduct:'4',
        NumberOfCapacityProduct:'3',
        rateProduct:'3.5',
        topicProduct:'باغ',
        locationProduct:'مازندران',
        priceProduct:'25000',}
];
export const specifcation = [
    {
        name:' hamid ',
        address:' tehran ',
        code:100
    },
    {
        name: ' hadi ',
        address:'tehran',
        code:200
    },
    {
        name:' farhad ',
        address:' tehran ',
        code:300
    }
];
export const name="farhad";