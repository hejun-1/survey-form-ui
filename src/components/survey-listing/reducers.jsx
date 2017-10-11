export const SurveyActionReducer = (state={}, action) => {
    switch (action.type) {
        case 'SURVEY_SELECT_ACTION':
            return  {
                ...state,
                survey: action.survey
            };
        default:
            return state
    }
};