import { atom } from "recoil";

export const isEditState = atom({
  key: "isEditState",
  default: true, // 초기값
});

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});
