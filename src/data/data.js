const data = [
    {
      "id": 1,
      "title": "Frontend Developer",
      "description": "Comfortable with modern JS stack, experience with React.",
      "employment_type": "full_time"
    },
    {
        "id": 2,
        "title": "Frontend Developer 2",
        "description": "Comfortable with modern JS stack, experience with React.",
        "employment_type": "part_time"
      },
      {
        "id": 3,
        "title": "Frontend Developer 3",
        "description": "Comfortable with modern JS stack, experience with React.",
        "employment_type": "full_time"
      },
      {
        "id": 4,
        "title": "Frontend Developer 4",
        "description": "Comfortable with modern JS stack, experience with React.",
        "employment_type": "part_time"
      },
      {
        "id": 5,
        "title": "Frontend Developer 5",
        "description": "Comfortable with modern JS stack, experience with React.",
        "employment_type": "full_time"
      },
      {
        "id": 6,
        "title": "Frontend Developer 6",
        "description": "Comfortable with modern JS stack, experience with React.",
        "employment_type": "full_time"
      },
      {
        "id": 7,
        "title": "Frontend Developer 7",
        "description": "Comfortable with modern JS stack, experience with React.",
        "employment_type": "full_time"
      }
  ];

  export const getData = () => {

    return new Promise( (resolve,reject) =>{
       resolve(data);
       reject('an error occurred');
    })
}



