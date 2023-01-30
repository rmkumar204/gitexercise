let template=[
    {
      label: "Validity days",
      value: ""
    },
    {
      label: "Profile ID",
      value: ""
    },
    {
      label: "Start date",
      value: ""
    },
    {
      label: "End date",
      value: ""
    },
    {
      label: "Plan price",
      value: ""
    }
    ,
    // {
    //   label: "Active Plan Discount",
    //   value: ""
    // },
    // {
    //   label: "Sub total",
    //   value: ""
    // },
    // {
    //   label: "GST (18%)",
    //   value: ""
    // }
  ]
let value=[{sub:'salem'},{sub:'salem'},{sub:'salem'},{sub:'salem'},{sub:'salem'}]
template.map((e,ind)=>{
    console.log(e,ind)
    if(!e.value){
        console.log('jljl',e.value)
        value.map((f,index)=>{
            if(ind==index){
                console.log('index',ind,index,f.sub)
                console.log('before',e.value)
                e.value=f.sub
                console.log('after',e.value)
            }
        })
    }
})
console.log('temp',template)

