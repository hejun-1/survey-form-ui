const SelectActionCreator = (survey) => {
  return {
    type: "SURVEY_SELECT_ACTION",
    survey
  }
};

export {
  SelectActionCreator
};