
   /* data from API {
      "id": 1,
      "title": "Frontend Developer",
      "description": "Comfortable with modern JS stack, experience with React.",
      "employment_type": "full_time"
    }
  ]*/

 /* Normalized Data 
 
 stateShape = {
      jobsList: {
        isFetching: false,
        lastUpdated: 1439478405547,
        items: [1]
      },
      jobs:{
          1:{
              id:1,
              title: "Frontend Developer",
              description: "Comfortable with modern JS stack, experience with React.",
              employment_type: "full_time",
          }
      }
  }*/

  // Our State

  const state = {
      selectedJobs:{
          id:''
      },
      jobsList:{
        isFetching:false,
        jobsList: [
            {
                "id": 1,
                "title": "Frontend Developer",
                "description": "Comfortable with modern JS stack, experience with React.",
                "employment_type": "full_time"
            }
        ]
    }
  }