export function localSave(nameInLocal,data) {
  localStorage.setItem(nameInLocal,JSON.stringify(data))
};

export function getLocalStorageItem(key, defaultValue,gameInfoObjName="gameInfo") {
  const gameInfo = JSON.parse(localStorage.getItem(gameInfoObjName));
  return gameInfo ? gameInfo[key] : defaultValue;
};