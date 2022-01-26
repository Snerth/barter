import React from "react";

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
  return text.match(/[^A-Za-z0-9]/);
};

const isLessThanEightChars = (text: string) => {
  return text.length < 8;
};

const isMoreThanFifteenChars = (text: string) => {
  return text.length > 15;
};

const containsCapitalLetter = (text: string) => {
  return !text.match(/.*[A-Z].*/);
};

const containsDigit = (text: string) => {
  return !text.match(/.*[0-9].*/);
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
