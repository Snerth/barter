import React, { ChangeEvent } from "react";

const isLessThanThreeChars = (text: string) => {
  return text.length < 3;
};

const isMoreThanTenChars = (text: string) => {
  return text.length > 10;
};

const containsWhitespaces = (text: string) => {
  return !text.match(/^\S*$/);
};

const containsSpecialCharacters = (text: string) => {
  return !text.match(/^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/g);
};

const isLessThanEightChars = (text: string) => {
  return text.length < 8;
};

const isMoreThanFifteenChars = (text: string) => {
  return text.length > 15;
};

const containsCapitalLetter = (text: string) => {
  return text.match(/^[A-Z]*$/);
};

const containsDigit = (text: string) => {
  return text.match(/^[0-9]*$/);
};

const matchesValue = (text: string, value: string) => {
  return !(text === value);
};

export default {
  isLessThanThreeChars,
  isMoreThanTenChars,
  containsWhitespaces,
  containsSpecialCharacters,
  isLessThanEightChars,
  isMoreThanFifteenChars,
  containsCapitalLetter,
  containsDigit,
  matchesValue,
};
