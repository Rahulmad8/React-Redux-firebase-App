const initState = {
  projects: [
    { id: "1", title: "Wake up early", content: "blah blah blah blah blah" },
    { id: "2", title: "Going to gym", content: "blah blah blah blah blah" },
    { id: "3", title: "Going to office", content: "blah blah blah blah blah" }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created projects ", action.project);
      return state; 
    case "CREATE_PROJECT_ERROR":
      console.log("project error", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
