export const ID = Object.freeze({
  CAR_NAMES_FORM: 'car_names_form',
  CAR_NAMES_INPUT: 'car_names_input',
});

export const ERROR_MESSAGES = Object.freeze({
  EMPTY_CAR_NAME: '자동차 이름은 최소 1개 이상 입력해야 한다.',
  EXCEED_CAR_NAME_LENGTH: '자동차 이름의 길이는 5 이하로만 입력해야 한다.',
  BLANK_CAR_NAME: '자동차 이름은 공백이면 안된다.',
});

export const RULES = Object.freeze({
  MAX_CAR_NAME_LENGTH: 5,
  ZERO_CAR_NAME_LENGTH: 0,
  SEPERATOR: ',',
});
